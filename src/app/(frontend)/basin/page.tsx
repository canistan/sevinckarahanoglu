import React from 'react';

export const metadata = {
  title: 'Basın & Medya | Dt. Sevinç Karahanoğlu',
  description: 'Dt. Sevinç Karahanoğlu basın yansımaları, televizyon programları, YouTube videoları ve diş hekimliği üzerine röportajlar.',
};

// Bu array'e kullanıcının vereceği YouTube Linkleri (veya ID'leri) eklenecektir.
const VIDEOS = [
  // Örnek: { id: 'YOUTUBE_VIDEO_ID', title: 'Video Başlığı' }
];

export default function BasinPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header" style={{ paddingTop: '150px', paddingBottom: '60px', backgroundColor: 'var(--color-primary-dark)', textAlign: 'center', color: 'white' }}>
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
