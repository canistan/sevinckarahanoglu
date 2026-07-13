'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Bir Sorun Oluştu!</h2>
      <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2rem', maxWidth: '600px' }}>
        İşleminiz sırasında beklenmedik bir hata meydana geldi. Teknik ekibimiz bilgilendirildi.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => reset()}
          className="btn btn--primary"
        >
          Tekrar Dene
        </button>
        <Link href="/" className="btn btn--outline">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
