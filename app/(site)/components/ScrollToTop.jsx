'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ScrollToTop() {
  const { asPath } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [asPath]);

  return null;
}
