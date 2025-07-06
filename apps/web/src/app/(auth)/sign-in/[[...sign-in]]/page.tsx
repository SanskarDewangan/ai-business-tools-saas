'use client';

import { SignIn, useUser } from '@clerk/nextjs'

export default function SigninPage() {
  const { user } = useUser()

  if (!user) return <SignIn />

  return <div>Welcome! ${user.firstName}</div>
}


