import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export const metadata = {
  title: 'Uzmanlık Alanları | Dt. Sevinç Karahanoğlu',
  description: 'Kliniğimizde sunulan modern diş hekimliği tedavileri; implant, estetik gülüş tasarımı, diş beyazlatma ve ortodonti hizmetlerimiz.',
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
      <style dangerouslySetInnerHTML={{__html: `
        .specialty-card-item {
          background-color: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .specialty-card-item:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
        }
      `}} />
      <section className="page-header" style={{ padding: '8rem 2rem 4rem', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Uzmanlık Alanlarımız</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Sağlıklı ve estetik bir gülüş için en modern diş hekimliği teknolojilerini kullanarak sunduğumuz tedaviler.
        </p>
      </section>

      <section className="specialties-grid" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {specialties.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {specialties.map((specialty: any) => (
              <Link href={`/uzmanlik-alanlari/${specialty.slug}`} key={specialty.id} style={{ textDecoration: 'none', display: 'flex', height: '100%' }}>
                <div className="specialty-card-item">
                  <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: '#f0f4f8' }}>
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
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
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
