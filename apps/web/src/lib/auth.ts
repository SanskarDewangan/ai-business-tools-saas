import { auth } from '@clerk/nextjs/server'
import { prisma } from './prisma'

export async function getCurrentUser() {
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error('Unauthorized')
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      subscriptions: {
        where: { status: 'active' },
        orderBy: { createdAt: 'desc' },
        take: 1
      }
    }
  })

  if (!user) {
    throw new Error('User not found')
  }

  return user
}