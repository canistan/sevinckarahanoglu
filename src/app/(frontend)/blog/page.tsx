import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export const metadata = {
  title: 'Blog | Dt. Sevinç Karahanoğlu',
  description: 'Diş sağlığı, estetik gülüş tasarımı, ağız bakım ipuçları ve modern dental tedaviler hakkında güncel makaleler.',
};

export const dynamic = 'force-dynamic'; // Next.js önbelleğini devre dışı bırak, her zaman güncel kalsın

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise });
  
  const req = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    where: {
      status: {
        equals: 'published',
      }
    },
    sort: '-publishedAt',
  });
  
  const posts = req.docs;

  return (
    <main>
      <section className="page-header" style={{ 
        padding: '10rem 2rem 6rem', 
        backgroundImage: 'linear-gradient(rgba(0, 116, 123, 0.85), rgba(0, 116, 123, 0.95)), url(/images/blog-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-white)', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>Sağlıklı Gülüşler Rehberi</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.95, lineHeight: 1.6, textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
          Sağlıklı gülüşler için ağız ve diş sağlığı hakkında bilmeniz gereken her şey.
        </p>
      </section>

      <section className="blog-grid" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {posts.length > 0 ? (
          <div className="specialties__grid">
            {posts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.id} style={{ textDecoration: 'none', display: 'flex', height: '100%' }}>
                <div className="blog-card-item">
                  <div style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: 'var(--color-primary-light)', overflow: 'hidden' }}>
                    {post.featuredImage?.url ? (
                      <Image 
                        src={post.featuredImage.url} 
                        alt={post.title} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '3rem' }}>
                        📖
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginBottom: '0.5rem' }}>
                      {new Date(post.publishedAt || post.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: '1.4' }}>
                      {post.title}
                    </h2>
                    <p style={{ 
                      color: 'var(--color-gray-600)', 
                      lineHeight: '1.6', 
                      marginBottom: '1.5rem', 
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {post.excerpt || 'Bu makaleyi okumak için tıklayın.'}
                    </p>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
                      Devamını Oku <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>✍️</span>
            <h2 style={{ color: 'var(--color-gray-600)' }}>Henüz Yazı Eklenmedi</h2>
            <p>Blog yazıları çok yakında burada olacak.</p>
          </div>
        )}
      </section>
    </main>
  );
}
