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

    const [usageRecords, totalCount] = await Promise.all([
      prisma.usageRecord.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.usageRecord.count({
        where: { userId: user.id }
      })
    ])

    return NextResponse.json({
      records: usageRecords,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching usage records:', error)
    return NextResponse.json({ error: 'Failed to fetch usage records' }, { status: 500 })
  }
}