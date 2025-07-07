import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { Webhook } from 'svix'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET to your environment variables')
  }

  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse('Error occured -- no svix headers', { status: 400 })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload)

  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: any

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as any
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new NextResponse('Error occured', { status: 400 })
  }

  const { id } = evt.data
  const eventType = evt.type

  if (eventType === 'user.created') {
    await prisma.user.create({
      data: {
        clerkId: id,
        email: evt.data.email_addresses[0].email_address,
        firstName: evt.data.first_name,
        lastName: evt.data.last_name,
        imageUrl: evt.data.image_url,
        credits: 100, // Welcome credits
      }
    })

    // Create welcome usage record
    const user = await prisma.user.findUnique({
      where: { clerkId: id }
    })

    if (user) {
      await prisma.usageRecord.create({
        data: {
          userId: user.id,
          credits: 100,
          type: 'earned',
          source: 'welcome',
          description: 'Welcome bonus credits'
        }
      })
    }
  }

  if (eventType === 'user.updated') {
    await prisma.user.update({
      where: { clerkId: id },
      data: {
        email: evt.data.email_addresses[0].email_address,
        firstName: evt.data.first_name,
        lastName: evt.data.last_name,
        imageUrl: evt.data.image_url,
      }
    })
  }

  return new NextResponse('', { status: 200 })
}
