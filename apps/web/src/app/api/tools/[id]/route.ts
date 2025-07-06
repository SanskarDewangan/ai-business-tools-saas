import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const tool = await db.aITool.findUnique({
      where: { id: params.id }
    })

    if (!tool) {
      return NextResponse.json({ error: 'Tool not found' }, { status: 404 })
    }

    return NextResponse.json(tool)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tool' }, { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const toolData = await req.json()
    
    const tool = await db.aITool.update({
      where: { id: params.id },
      data: toolData
    })

    return NextResponse.json(tool)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update tool' }, { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await db.aITool.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete tool' }, { status: 500 })
  }
}