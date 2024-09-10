'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToHome() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home when this component loads
    router.push('/home');
  }, [router]);

  return null; // No need to render anything
}
