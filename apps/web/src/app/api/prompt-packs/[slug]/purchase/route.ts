import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const user = await getCurrentUser()
    
    const promptPack = await prisma.promptPack.findUnique({
      where: { slug: params.slug, isActive: true }
    })

    if (!promptPack) {
      return NextResponse.json({ error: 'Prompt pack not found' }, { status: 404 })
    }

    // Check if user already owns this pack
    const existingPack = await prisma.userPromptPack.findUnique({
      where: {
        userId_promptPackId: {
          userId: user.id,
          promptPackId: promptPack.id
        }
      }
    })

    if (existingPack) {
      return NextResponse.json({ error: 'Already purchased' }, { status: 400 })
    }

    // For free packs, just add to user's collection
    if (promptPack.price === 0) {
      await prisma.userPromptPack.create({
        data: {
          userId: user.id,
          promptPackId: promptPack.id
        }
      })

      return NextResponse.json({ success: true })
    }

    // For paid packs, return Stripe checkout URL (implement Stripe integration)
    return NextResponse.json({ 
      checkoutUrl: `/api/stripe/checkout?promptPackId=${promptPack.id}` 
    })
  } catch (error) {
    console.error('Error purchasing prompt pack:', error)
    return NextResponse.json({ error: 'Failed to purchase prompt pack' }, { status: 500 })
  }
}