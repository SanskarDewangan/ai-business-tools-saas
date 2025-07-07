import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const user = await getCurrentUser()
    
    const userPromptPacks = await prisma.userPromptPack.findMany({
      where: { userId: user.id },
      include: {
        promptPack: true
      },
      orderBy: { purchasedAt: 'desc' }
    })

    return NextResponse.json(userPromptPacks)
  } catch (error) {
    console.error('Error fetching user prompt packs:', error)
    return NextResponse.json({ error: 'Failed to fetch prompt packs' }, { status: 500 })
  }
}