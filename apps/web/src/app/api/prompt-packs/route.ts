import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const skip = (page - 1) * limit

    const where = {
      isActive: true,
      ...(category && { category })
    }

    const [promptPacks, totalCount] = await Promise.all([
      prisma.promptPack.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.promptPack.count({ where })
    ])

    return NextResponse.json({
      promptPacks,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching prompt packs:', error)
    return NextResponse.json({ error: 'Failed to fetch prompt packs' }, { status: 500 })
  }
}