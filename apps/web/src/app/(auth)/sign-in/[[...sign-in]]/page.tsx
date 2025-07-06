'use client';

import { SignIn, useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';

export default function SigninPage() {
  const { user } = useUser()

  if (!user) return <SignIn />

  return redirect('/dashboard')
}


