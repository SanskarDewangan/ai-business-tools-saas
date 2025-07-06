import { auth } from '@clerk/nextjs/server';
import { db } from './db';

export async function getCurrentUser() {
  const session = await auth();
  const userId = session?.userId;
  if (!userId) {
    throw new Error('Unauthorized');
  }
  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: {
      subscriptions: {
        where: { status: 'active' },
        orderBy: { createdAt: 'desc' },
        take: 1,
      },
    },
  });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}
