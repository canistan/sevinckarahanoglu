import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

// Dinamik SEO Metadata oluşturma
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const payload = await getPayload({ config: configPromise });
  const req = await payload.find({
    collection: 'specialties',
    where: { slug: { equals: resolvedParams.slug } },
  });

  const specialty = req.docs[0];
  if (!specialty) return { title: 'Bulunamadı | Dt. Sevinç Karahanoğlu' };

  return {
    title: `${specialty.metaTitle || specialty.title} | Dt. Sevinç Karahanoğlu`,
    description: specialty.metaDescription || specialty.shortDescription,
  };
}

export default async function SpecialtyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const payload = await getPayload({ config: configPromise });
  
  const req = await payload.find({
    collection: 'specialties',
    where: { slug: { equals: resolvedParams.slug } },
    depth: 1,
  });

  const specialty = req.docs[0] as any;
  if (!specialty) notFound();

  // Settings for phone number CTA
  const settings = await payload.findGlobal({ slug: 'site-settings' }) as any;
  const phone = settings?.phone || '0552 170 66 00';
  const phoneClean = phone.replace(/[^0-9+]/g, '');
  const waNumber = phoneClean.startsWith('0') ? '90' + phoneClean.slice(1) : phoneClean.replace('+', '');

  return (
    <main>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '10rem 2rem 6rem', 
        backgroundColor: 'var(--color-primary-dark)', 
        color: 'white', 
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {specialty.featuredImage?.url && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.2 }}>
            <Image 
              src={specialty.featuredImage.url} 
              alt={specialty.title} 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
        )}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/uzmanlik-alanlari" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600, display: 'inline-block', marginBottom: '1.5rem' }}>
            ← Tüm Uzmanlık Alanları
          </Link>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{specialty.title}</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: '1.6' }}>
            {specialty.shortDescription}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '5rem 2rem', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '4rem', borderRadius: '20px', boxShadow: 'var(--shadow-md)' }}>
          {/* Lexical Rich Text is returned as a JSON tree in Payload v3, we need to render it. 
              For now, since we might not have a full lexical renderer configured, we'll try to map text nodes simply, 
              or if the user inputs rich text, we should ideally use a serializer. 
              Let's build a simple HTML renderer for standard Payload Lexical structure.
          */}
          <div className="rich-text-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-gray-600)' }}>
            {specialty.content?.root?.children?.map((block: any, i: number) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={i} style={{ marginBottom: '1.5rem' }}>
                    {block.children?.map((child: any, j: number) => {
                      let text = child.text;
                      if (child.format & 1) text = <strong key={j}>{text}</strong>;
                      if (child.format & 2) text = <em key={j}>{text}</em>;
                      return <span key={j}>{text}</span>;
                    })}
                  </p>
                );
              }
              if (block.type === 'heading') {
                const Tag = `h${block.tag.replace('h', '')}` as any;
                return (
                  <Tag key={i} style={{ color: 'var(--color-primary-dark)', marginTop: '2rem', marginBottom: '1rem' }}>
                    {block.children?.map((child: any) => child.text).join('')}
                  </Tag>
                );
              }
              if (block.type === 'list') {
                const ListTag = block.listType === 'number' ? 'ol' : 'ul';
                return (
                  <ListTag key={i} style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    {block.children?.map((item: any, j: number) => (
                      <li key={j} style={{ marginBottom: '0.5rem' }}>
                        {item.children?.map((child: any) => child.text).join('')}
                      </li>
                    ))}
                  </ListTag>
                );
              }
              return null;
            })}
            
            {(!specialty.content || !specialty.content.root) && (
              <p>Bu tedavi hakkında detaylı içerik yakında eklenecektir.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Randevu Alın</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2.5rem' }}>
            {specialty.title} tedavisi hakkında detaylı bilgi ve muayene için hemen bizimle iletişime geçin.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${phoneClean}`} className="btn btn--primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
              📞 Hemen Ara
            </a>
            <a href={`https://wa.me/${waNumber}?text=Merhaba,%20${specialty.title}%20hakkında%20bilgi%20almak%20istiyorum.`} target="_blank" rel="noopener noreferrer" className="btn btn--secondary" style={{ borderColor: 'white', color: 'white' }}>
              💬 WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
