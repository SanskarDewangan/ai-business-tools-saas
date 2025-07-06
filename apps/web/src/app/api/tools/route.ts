import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
  try {
    const tools = await db.aITool.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(tools)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tools' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    await getCurrentUser() // Ensure user is authenticated
    const toolData = await req.json()

    const tool = await db.aITool.create({
      data: toolData
    })

    return NextResponse.json(tool)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create tool' }, { status: 500 })
  }
}


