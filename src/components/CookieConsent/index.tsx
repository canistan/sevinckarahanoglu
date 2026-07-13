"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'var(--color-dark)',
      color: 'var(--color-white)',
      padding: '1.5rem',
      zIndex: 9999,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      borderTop: '3px solid var(--color-primary)'
    }}>
      <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1, fontSize: '0.95rem', lineHeight: 1.5, opacity: 0.9 }}>
          <p style={{ margin: 0 }}>
            Web sitemizde size en iyi deneyimi sunabilmek, site trafiğimizi analiz etmek ve kişiselleştirilmiş içerikler göstermek amacıyla çerezler (cookies) kullanıyoruz. Çerez kullanımına dair detaylı bilgi için <Link href="/cerez-politikasi" style={{ color: 'var(--color-primary-light)', textDecoration: 'underline' }}>Çerez Politikamızı</Link> ve <Link href="/kvkk" style={{ color: 'var(--color-primary-light)', textDecoration: 'underline' }}>KVKK Aydınlatma Metnimizi</Link> inceleyebilirsiniz.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
          <button 
            onClick={handleReject}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: 'var(--color-white)',
              border: '1px solid var(--color-gray-400)',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-white)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-gray-400)'}
          >
            Reddet
          </button>
          <button 
            onClick={handleAccept}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
          >
            Tümünü Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
};
