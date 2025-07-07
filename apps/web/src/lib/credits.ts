import { prisma } from './prisma'

export async function deductCredits(userId: string, amount: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  })

  if (!user || user.credits < amount) {
    throw new Error('Insufficient credits')
  }

  await prisma.$transaction([
    prisma.user.update({
      where: { id: userId },
      data: { credits: { decrement: amount } }
    }),
    prisma.usageRecord.create({
      data: {
        userId,
        credits: -amount,
        type: 'spent',
        source: 'tool_usage',
        description: `Used ${amount} credits for AI tool`
      }
    })
  ])
}

export async function addCredits(userId: string, amount: number, source: string, description?: string) {
  await prisma.$transaction([
    prisma.user.update({
      where: { id: userId },
      data: { credits: { increment: amount } }
    }),
    prisma.usageRecord.create({
      data: {
        userId,
        credits: amount,
        type: 'earned',
        source,
        description: description || `Added ${amount} credits from ${source}`
      }
    })
  ])
}