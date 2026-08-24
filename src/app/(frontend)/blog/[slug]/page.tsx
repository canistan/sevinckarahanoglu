import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const payload = await getPayload({ config: configPromise });
  const req = await payload.find({
    collection: 'posts',
    where: { slug: { equals: resolvedParams.slug } },
  });

  const post = req.docs[0];
  if (!post) return { title: 'Bulunamadı | Dt. Sevinç Karahanoğlu' };

  return {
    title: `${post.metaTitle || post.title} | Dt. Sevinç Karahanoğlu`,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const payload = await getPayload({ config: configPromise });
  
  const req = await payload.find({
    collection: 'posts',
    where: { slug: { equals: resolvedParams.slug } },
    depth: 1,
  });

  const post = req.docs[0] as any;
  if (!post) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sevinckarahanoglu.com";
  
  const schemaJSON = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    },
    "headline": post.title,
    "image": post.featuredImage?.url ? (post.featuredImage.url.startsWith('http') ? post.featuredImage.url : `${baseUrl}${post.featuredImage.url}`) : `${baseUrl}/logo.png`,
    "author": {
      "@type": "Person",
      "name": "Dt. Sevinç Karahanoğlu"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SevinçDent Ağız ve Diş Sağlığı Polikliniği",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": post.publishedAt || post.createdAt,
    "dateModified": post.updatedAt || post.createdAt
  };

  const breadcrumbJSON = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${baseUrl}/blog/${post.slug}`
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJSON) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJSON) }}
      />
      <section style={{ 
        padding: '10rem 2rem 6rem', 
        backgroundColor: '#f0f4f8', 
        color: 'var(--color-primary-dark)', 
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/blog" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600, display: 'inline-block', marginBottom: '1.5rem' }}>
            ← Tüm Yazılar
          </Link>
          <div style={{ color: 'var(--color-gray-500)', marginBottom: '1rem' }}>
            {new Date(post.publishedAt || post.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>{post.title}</h1>
        </div>
      </section>

      {post.featuredImage?.url && (
        <section style={{ maxWidth: '1000px', margin: '-4rem auto 4rem', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <Image 
              src={post.featuredImage.url} 
              alt={post.title} 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
        </section>
      )}

      <section style={{ padding: post.featuredImage?.url ? '2rem 2rem 6rem' : '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-gray-600)' }}>
          {post.content?.root?.children?.map((block: any, i: number) => {
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
                <Tag key={i} style={{ color: 'var(--color-primary-dark)', marginTop: '2.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>
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
        </div>
      </section>
    </main>
  );
}
