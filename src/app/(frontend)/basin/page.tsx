import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basın & Medya | Dt. Sevinç Karahanoğlu',
  description: 'Dt. Sevinç Karahanoğlu basın yansımaları, televizyon programları, YouTube videoları ve diş hekimliği üzerine röportajlar.',
  alternates: {
    canonical: "https://www.sevinckarahanoglu.com/basin",
  },
  openGraph: {
    title: "Basın & Medya | Dt. Sevinç Karahanoğlu",
    description: "Dt. Sevinç Karahanoğlu basın yansımaları, televizyon programları, YouTube videoları ve diş hekimliği üzerine röportajlar.",
    url: "https://www.sevinckarahanoglu.com/basin",
    type: "website",
    locale: "tr_TR",
    siteName: "Dt. Sevinç Karahanoğlu",
    images: [
      {
        url: "/images/basin-hero.png",
        width: 1200,
        height: 630,
        alt: "Dt. Sevinç Karahanoğlu Basın & Medya",
      },
    ],
  },
};

// Bu array'e kullanıcının vereceği YouTube Linkleri (veya ID'leri) eklenecektir.
const VIDEOS: { id: string; title: string }[] = [
  { id: 'FBsWHMMnAeU', title: "İmplant Nedir? | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: 'tW_q4xHCHK4', title: "Gülüş Tasarımı Nedir? | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: 'uLsdNPUSesw', title: "Diş Eti Hastalıkları | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: '1Z6cT9Di6xE', title: "Çocuklarda İlk Diş Muayenesi Ne Zaman Olmalıdır? | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: '-3-pFQB8tAk', title: "İmplant Nedir? | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: '0NV1VCVs4yk', title: "Gülüş Tasarımı Nedir? | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: 'Gs4Ei7eowLg', title: "Ortodontik Tedaviler Nelerdir? | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: 'y1pSq0piiyg', title: "Çocuklarda İlk Diş Muayenesi Ne Zaman Olmalıdır? | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: 'QOlUOlnHwSw', title: "Diş Eti Hastalıkları | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: 'IBZsmcpiLM0', title: "20 Yaş Dişleri Herkeste Çıkar mı? | DT. Sevinç Karahanoğlu | 8'de Sağlık" },
  { id: '_oIo48Bqs0w', title: "Ortodonti Nedir? | DT. Sevinç Karahanoğlu | 8'de Sağlık" }
];

export default function BasinPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header" style={{ 
        paddingTop: '150px', 
        paddingBottom: '60px', 
        backgroundImage: 'linear-gradient(rgba(0, 116, 123, 0.85), rgba(0, 116, 123, 0.95)), url(/images/basin-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center', 
        color: 'white' 
      }}>
        <div className="container">
          <span style={{ display: 'block', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>
            Medya & Videolar
          </span>
          <h1 style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
            Basında Biz
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
            Televizyon programları, bilimsel röportajlar ve ağız sağlığı üzerine bilgilendirici videolarımızı buradan izleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', minHeight: '50vh' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          {VIDEOS.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <div style={{ display: 'inline-block', padding: '1rem 2rem', border: '2px dashed var(--color-primary)', borderRadius: '12px', color: 'var(--color-primary-dark)', fontSize: '1.2rem', fontWeight: 500 }}>
                🎥 Videolar Yükleniyor... Lütfen YouTube linklerini iletin.
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
              {VIDEOS.map((video, idx) => (
                <div key={idx} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', backgroundColor: 'white', transition: 'transform 0.3s ease' }} className="video-card">
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe 
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&showinfo=0&color=white`}
                      title={video.title}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', margin: 0, lineHeight: 1.4, fontFamily: 'var(--font-heading)' }}>
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
