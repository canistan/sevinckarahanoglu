"use client";

import React from 'react';

export function CookiePreferencesButton() {
  const resetCookies = () => {
    localStorage.removeItem('cookieConsent');
    window.location.reload();
  };

  return (
    <button 
      onClick={resetCookies}
      style={{
        background: 'none',
        border: 'none',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.85rem',
        cursor: 'pointer',
        padding: 0,
        textDecoration: 'none',
        display: 'inline-block'
      }}
      onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
      onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
    >
      Çerez Tercihlerini Değiştir
    </button>
  );
}
