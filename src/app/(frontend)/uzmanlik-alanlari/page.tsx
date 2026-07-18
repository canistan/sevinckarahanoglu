import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uzmanlık Alanları | Dt. Sevinç Karahanoğlu',
  description: 'Kliniğimizde sunulan modern diş hekimliği tedavileri; implant, estetik gülüş tasarımı, diş beyazlatma ve ortodonti hizmetlerimiz.',
  alternates: {
    canonical: "https://www.sevinckarahanoglu.com/uzmanlik-alanlari",
  },
  openGraph: {
    title: "Uzmanlık Alanları | Dt. Sevinç Karahanoğlu",
    description: "Kliniğimizde sunulan modern diş hekimliği tedavileri; implant, estetik gülüş tasarımı, diş beyazlatma ve ortodonti hizmetlerimiz.",
    url: "https://www.sevinckarahanoglu.com/uzmanlik-alanlari",
    type: "website",
    locale: "tr_TR",
    siteName: "Dt. Sevinç Karahanoğlu",
  },
};

export default async function SpecialtiesPage() {
  const payload = await getPayload({ config: configPromise });
  
  // Fetch specialties
  const req = await payload.find({
    collection: 'specialties',
    depth: 1,
    limit: 50,
  });
  
  const specialties = req.docs;

  return (
    <main>
      <section className="page-header" style={{ 
        padding: '10rem 2rem 6rem', 
        backgroundImage: 'linear-gradient(rgba(0, 116, 123, 0.85), rgba(0, 116, 123, 0.95)), url(/images/specialties-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-white)', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>Uzmanlık Alanlarımız</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.95, lineHeight: 1.6, textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
          Sağlıklı ve estetik bir gülüş için en modern diş hekimliği teknolojilerini kullanarak sunduğumuz tedaviler.
        </p>
      </section>

      <section className="specialties-grid" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {specialties.length > 0 ? (
          <div className="specialties__grid">
            {specialties.map((specialty: any) => (
              <Link href={`/uzmanlik-alanlari/${specialty.slug}`} key={specialty.id} style={{ textDecoration: 'none', display: 'flex', height: '100%' }}>
                <div className="specialty-card-item">
                  <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: 'var(--color-primary-light)' }}>
                    {specialty.featuredImage?.url ? (
                      <Image 
                        src={specialty.featuredImage.url} 
                        alt={specialty.title} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '4rem' }}>
                        🦷
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                      {specialty.title}
                    </h2>
                    <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                      {specialty.shortDescription || 'Bu tedavi hakkında detaylı bilgi almak için tıklayın.'}
                    </p>
                    <span style={{ 
                      color: 'var(--color-accent)', 
                      fontWeight: 600, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      marginTop: 'auto'
                    }}>
                      Detayları İncele <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>⚙️</span>
            <h2 style={{ color: 'var(--color-gray-600)' }}>İçerikler Yükleniyor</h2>
            <p>Uzmanlık alanları yakında buraya eklenecektir.</p>
          </div>
        )}
      </section>
    </main>
  );
}
