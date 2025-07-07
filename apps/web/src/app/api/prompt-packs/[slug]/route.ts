import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'

export async function GET(
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

    // Check if user owns this pack
    const userPack = await prisma.userPromptPack.findUnique({
      where: {
        userId_promptPackId: {
          userId: user.id,
          promptPackId: promptPack.id
        }
      }
    })

    return NextResponse.json({
      ...promptPack,
      owned: !!userPack
    })
  } catch (error) {
    console.error('Error fetching prompt pack:', error)
    return NextResponse.json({ error: 'Failed to fetch prompt pack' }, { status: 500 })
  }
}