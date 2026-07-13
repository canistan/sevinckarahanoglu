import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export const metadata = {
  title: 'Blog | Dt. Sevinç Karahanoğlu',
  description: 'Diş sağlığı, estetik gülüş tasarımı, ağız bakım ipuçları ve modern dental tedaviler hakkında güncel makaleler.',
};

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise });
  
  const req = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    sort: '-publishedAt',
  });
  
  const posts = req.docs;

  return (
    <main>
      <style dangerouslySetInnerHTML={{__html: `
        .blog-card-item {
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
        .blog-card-item:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
        }
      `}} />
      <section className="page-header" style={{ padding: '8rem 2rem 4rem', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Dental Blog</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Sağlıklı gülüşler için ağız ve diş sağlığı hakkında bilmeniz gereken her şey.
        </p>
      </section>

      <section className="blog-grid" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {posts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {posts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.id} style={{ textDecoration: 'none' }}>
                <div className="blog-card-item">
                  <div style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: '#f0f4f8' }}>
                    {post.heroImage?.url ? (
                      <Image 
                        src={post.heroImage.url} 
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
                    <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '1rem', lineHeight: '1.4' }}>
                      {post.title}
                    </h2>
                    <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                      {post.metaDescription || 'Bu makaleyi okumak için tıklayın.'}
                    </p>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
