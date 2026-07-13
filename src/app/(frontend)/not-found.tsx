import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'var(--color-light)'
    }}>
      <h1 style={{
        fontSize: '8rem',
        fontWeight: 800,
        color: 'var(--color-primary)',
        margin: 0,
        lineHeight: 1,
        textShadow: '4px 4px 0px rgba(0, 165, 175, 0.1)'
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '2rem',
        color: 'var(--color-dark)',
        marginTop: '1rem',
        marginBottom: '1.5rem'
      }}>
        Sayfa Bulunamadı
      </h2>
      <p style={{
        fontSize: '1.2rem',
        color: 'var(--color-gray-600)',
        maxWidth: '500px',
        marginBottom: '2.5rem',
        lineHeight: 1.6
      }}>
        Aradığınız sayfa taşınmış, silinmiş veya geçici olarak ulaşılamıyor olabilir. 
        Sağlıklı gülüşleriniz için ana sayfamıza dönebilirsiniz.
      </p>
      <Link 
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem 2.5rem',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-white)',
          fontWeight: 600,
          borderRadius: '50px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        Ana Sayfaya Dön
      </Link>
    </main>
  );
}
