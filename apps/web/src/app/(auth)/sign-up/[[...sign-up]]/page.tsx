'use client';

import { SignUp, useUser } from '@clerk/nextjs'

export default function SignupPage() {
  const { user } = useUser()

  if (!user) return <SignUp />

  return <div>Welcome!</div>
}


