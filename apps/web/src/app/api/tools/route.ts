import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const tools = await prisma.aITool.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    })

    return NextResponse.json(tools)
  } catch (error) {
    console.error('Error fetching tools:', error)
    return NextResponse.json({ error: 'Failed to fetch tools' }, { status: 500 })
  }
}