import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser()
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const [toolUsage, totalCount] = await Promise.all([
      prisma.toolUsage.findMany({
        where: { userId: user.id },
        include: {
          tool: {
            select: {
              name: true,
              slug: true,
              icon: true,
              category: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.toolUsage.count({
        where: { userId: user.id }
      })
    ])

    return NextResponse.json({
      usage: toolUsage,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching tool usage:', error)
    return NextResponse.json({ error: 'Failed to fetch tool usage' }, { status: 500 })
  }
}