'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [phoneClean, setPhoneClean] = useState('05521706600');

  useEffect(() => {
    // Basic fetch if needed, or just rely on global context.
    // For simplicity since Header is now client component, we use default phone.
    // Real implementation could fetch via REST API or pass as props.
  }, []);

  return (
    <header className="header" id="header">
      <div className="header__inner">
        <Link href="/" className="header__logo" aria-label="Ana Sayfa" onClick={() => setIsMenuOpen(false)}>
          <span className="header__logo-name">Dt. Sevinç Karahanoğlu</span>
          <span className="header__logo-title">Diş Hekimi</span>
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--active' : ''}`} aria-label="Ana Menü">
          <Link href="/" className="header__link" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</Link>
          <Link href="/hakkimda" className="header__link" onClick={() => setIsMenuOpen(false)}>Hakkımda</Link>
          <Link href="/uzmanlik-alanlari" className="header__link" onClick={() => setIsMenuOpen(false)}>Uzmanlık Alanları</Link>
          <Link href="/blog" className="header__link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/iletisim" className="header__link" onClick={() => setIsMenuOpen(false)}>İletişim</Link>
          <a href={`tel:${phoneClean}`} className="header__cta" id="header-cta" onClick={() => setIsMenuOpen(false)}>
            <span>📞</span>
            Randevu Al
          </a>
        </nav>

        <button
          className={`header__hamburger ${isMenuOpen ? 'header__hamburger--active' : ''}`}
          aria-label="Menüyü aç/kapat"
          id="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Dynamic CSS for mobile menu */}
      <style jsx>{`
        @media (max-width: 768px) {
          .header__nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--color-primary-dark);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          }
          .header__nav--active {
            display: flex;
          }
          .header__hamburger span {
            transition: all 0.3s ease;
          }
          .header__hamburger--active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          .header__hamburger--active span:nth-child(2) {
            opacity: 0;
          }
          .header__hamburger--active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
        }
      `}</style>
    </header>
  );
}
