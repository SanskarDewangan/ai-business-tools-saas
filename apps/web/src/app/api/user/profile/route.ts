import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const user = await getCurrentUser()
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}

export async function PUT(req: Request) {
  try {
    const user = await getCurrentUser()
    const { firstName, lastName } = await req.json()

    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: { firstName, lastName }
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}