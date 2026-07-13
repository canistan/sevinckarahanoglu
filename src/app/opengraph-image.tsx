import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Dt. Sevinç Karahanoğlu | Uzman Diş Hekimi';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #00A5AF 0%, #004d52 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '80px 120px',
            borderRadius: '40px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
          }}
        >
          {/* Geometrik Diş İkonu Çizimi (Saf CSS ile) */}
          <div style={{ display: 'flex', marginBottom: '40px' }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
              <path d="M12 2C9 2 7 4 7 7c0 2 1 3.5 2 5 .5 1 .5 2 0 3-1 2-2 3-2 5 0 1 1 2 2 2h10c1 0 2-1 2-2 0-2-1-3-2-5-.5-1-.5-2 0-3 1-1.5 2-3 2-5 0-3-2-5-5-5-1 0-2 .5-3 1.5C14 2.5 13 2 12 2z" />
            </svg>
          </div>

          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Dt. Sevinç Karahanoğlu
          </div>
          
          <div
            style={{
              fontSize: 40,
              fontWeight: 400,
              color: '#E0F7FA',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            UZMAN DİŞ HEKİMİ
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 50,
              fontSize: 30,
              color: 'rgba(255,255,255,0.8)',
              backgroundColor: 'rgba(0,0,0,0.2)',
              padding: '15px 40px',
              borderRadius: '50px',
            }}
          >
            Altunizade, İstanbul
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
