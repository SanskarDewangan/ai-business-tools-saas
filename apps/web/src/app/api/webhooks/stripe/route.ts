// import { headers } from 'next/headers'
// import { NextResponse } from 'next/server'
// import { db } from '@/lib/db'
// import { stripe } from '@/lib/stripe'
// import { addCredits } from '@/lib/credits'

// export async function POST(req: Request) {
//   const body = await req.text()
//   const signature = headers().get('Stripe-Signature') as string

//   let event: any

//   try {
//     event = stripe.webhooks.constructEvent(
//       body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     )
//   } catch (error: any) {
//     return new Response(`Webhook Error: ${error.message}`, { status: 400 })
//   }

//   const session = event.data.object as any

//   switch (event.type) {
//     case 'customer.subscription.created':
//     case 'customer.subscription.updated':
//       await handleSubscriptionUpdate(session)
//       break
//     case 'customer.subscription.deleted':
//       await handleSubscriptionDeleted(session)
//       break
//     case 'invoice.payment_succeeded':
//       await handlePaymentSucceeded(session)
//       break
//   }

//   return NextResponse.json({ received: true })
// }

// async function handleSubscriptionUpdate(subscription: any) {
//   const user = await db.user.findFirst({
//     where: { 
//       subscriptions: { 
//         some: { stripeCustomerId: subscription.customer } 
//       } 
//     }
//   })

//   if (!user) return

//   await db.subscription.upsert({
//     where: { stripeSubscriptionId: subscription.id },
//     update: {
//       status: subscription.status,
//       currentPeriodStart: new Date(subscription.current_period_start * 1000),
//       currentPeriodEnd: new Date(subscription.current_period_end * 1000),
//       cancelAtPeriodEnd: subscription.cancel_at_period_end,
//     },
//     create: {
//       userId: user.id,
//       stripeCustomerId: subscription.customer,
//       stripeSubscriptionId: subscription.id,
//       stripePriceId: subscription.items.data[0].price.id,
//       status: subscription.status,
//       tier: getPlanFromPriceId(subscription.items.data[0].price.id),
//       creditsPerMonth: getCreditsFromPriceId(subscription.items.data[0].price.id),
//       currentPeriodStart: new Date(subscription.current_period_start * 1000),
//       currentPeriodEnd: new Date(subscription.current_period_end * 1000),
//     },
//   })
// }

// async function handleSubscriptionDeleted(subscription: any) {
//   await db.subscription.update({
//     where: { stripeSubscriptionId: subscription.id },
//     data: { status: 'canceled' }
//   })
// }

// async function handlePaymentSucceeded(invoice: any) {
//   const subscription = await db.subscription.findUnique({
//     where: { stripeSubscriptionId: invoice.subscription },
//     include: { user: true }
//   })

//   if (subscription) {
//     await addCredits(
//       subscription.userId,
//       subscription.creditsPerMonth,
//       'subscription'
//     )
//   }
// }

// function getPlanFromPriceId(priceId: string): string {
//   const plans: { [key: string]: string } = {
//     'price_pro': 'pro',
//     'price_enterprise': 'enterprise'
//   }
//   return plans[priceId] || 'free'
// }

// function getCreditsFromPriceId(priceId: string): number {
//   const credits: { [key: string]: number } = {
//     'price_pro': 1000,
//     'price_enterprise': 5000
//   }
//   return credits[priceId] || 0
// }