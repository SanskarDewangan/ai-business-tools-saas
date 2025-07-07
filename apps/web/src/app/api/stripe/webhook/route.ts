import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { prisma } from '@/lib/prisma'
import { addCredits } from '@/lib/credits'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = (await headers()).get('stripe-signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: any) {
    console.log(`Webhook signature verification failed.`, err.message)
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      const subscription = event.data.object as Stripe.Subscription
      await handleSubscriptionUpdate(subscription)
      break
    
    case 'customer.subscription.deleted':
      const deletedSub = event.data.object as Stripe.Subscription
      await handleSubscriptionCancellation(deletedSub)
      break
    
    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice
      await handlePaymentSuccess(invoice)
      break
    
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  const user = await prisma.user.findUnique({
    where: { clerkId: subscription.metadata.userId }
  })

  if (!user) return

  const priceId = subscription.items.data[0].price.id
  let tier = 'free'
  let creditsPerMonth = 0

  // Map price IDs to tiers and credits
  if (priceId === process.env.STRIPE_PRO_PRICE_ID) {
    tier = 'pro'
    creditsPerMonth = 1000
  } else if (priceId === process.env.STRIPE_ENTERPRISE_PRICE_ID) {
    tier = 'enterprise'
    creditsPerMonth = 5000
  }

  await prisma.subscription.upsert({
    where: { stripeSubscriptionId: subscription.id },
    create: {
      userId: user.id,
      stripeCustomerId: subscription.customer as string,
      stripeSubscriptionId: subscription.id,
      stripePriceId: priceId,
      status: subscription.status,
      tier,
      creditsPerMonth,
      currentPeriodStart: new Date((subscription as any).current_period_start ? (subscription as any).current_period_start * 1000 : Date.now()),
      currentPeriodEnd: new Date((subscription as any).current_period_end ? (subscription as any).current_period_end * 1000 : Date.now())
    },
    update: {
      status: subscription.status,
      tier,
      creditsPerMonth,
      currentPeriodStart: new Date((subscription as any).current_period_start ? (subscription as any).current_period_start * 1000 : Date.now()),
      currentPeriodEnd: new Date((subscription as any).current_period_end ? (subscription as any).current_period_end * 1000 : Date.now())
    }
  })

  await prisma.user.update({
    where: { id: user.id },
    data: { subscriptionTier: tier }
  })
}

async function handleSubscriptionCancellation(subscription: Stripe.Subscription) {
  await prisma.subscription.update({
    where: { stripeSubscriptionId: subscription.id },
    data: { status: 'canceled' }
  })

  const sub = await prisma.subscription.findUnique({
    where: { stripeSubscriptionId: subscription.id }
  })

  if (sub) {
    await prisma.user.update({
      where: { id: sub.userId },
      data: { subscriptionTier: 'free' }
    })
  }
}

async function handlePaymentSuccess(invoice: Stripe.Invoice) {
  // Use (invoice as any).subscription if not present in type
  const subscriptionId = (invoice as any).subscription as string | undefined
  if (subscriptionId) {
    const subscription = await prisma.subscription.findUnique({
      where: { stripeSubscriptionId: subscriptionId }
    })

    if (subscription) {
      await addCredits(
        subscription.userId,
        subscription.creditsPerMonth,
        'subscription',
        `Monthly credits for ${subscription.tier} plan`
      )
    }
  }
}