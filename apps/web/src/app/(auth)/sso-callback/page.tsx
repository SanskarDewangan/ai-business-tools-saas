'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export default function SSOCallbackPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard'); // or wherever you want to redirect after login
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">Redirecting...</p>
    </div>
  );
}
