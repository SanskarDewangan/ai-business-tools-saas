import { db } from './db'

export async function deductCredits(userId: string, amount: number) {
  const user = await db.user.findUnique({
    where: { id: userId }
  })

  if (!user || user.credits < amount) {
    throw new Error('Insufficient credits')
  }

  await db.$transaction([
    db.user.update({
      where: { id: userId },
      data: { credits: { decrement: amount } }
    }),
    db.usageRecord.create({
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

export async function addCredits(userId: string, amount: number, source: string) {
  await db.$transaction([
    db.user.update({
      where: { id: userId },
      data: { credits: { increment: amount } }
    }),
    db.usageRecord.create({
      data: {
        userId,
        credits: amount,
        type: 'earned',
        source,
        description: `Added ${amount} credits from ${source}`
      }
    })
  ])
}