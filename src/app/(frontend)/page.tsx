import Image from "next/image";
import Link from "next/link";
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dt. Sevinç Karahanoğlu | Diş Hekimi — Altunizade, İstanbul',
  description: '25 yıllık deneyime sahip uzman diş hekimi. İmplant, estetik diş hekimliği, zirkonyum kaplama. Altunizade, İstanbul.',
  alternates: {
    canonical: "https://www.sevinckarahanoglu.com",
  },
  openGraph: {
    title: "Dt. Sevinç Karahanoğlu | Diş Hekimi — Altunizade, İstanbul",
    description: "25 yıllık deneyime sahip uzman diş hekimi. İmplant, estetik diş hekimliği, zirkonyum kaplama. Altunizade, İstanbul.",
    url: "https://www.sevinckarahanoglu.com",
    type: "website",
    locale: "tr_TR",
    siteName: "Dt. Sevinç Karahanoğlu",
    images: [
      {
        url: "/images/clinic-interior.png",
        width: 1200,
        height: 630,
        alt: "Dt. Sevinç Karahanoğlu Klinik",
      },
    ],
  },
};

export default async function Home() {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' }) as any;
  const homeData = await payload.findGlobal({ slug: 'home-page' }) as any;

  // Fetch specialties
  const specialtiesReq = await payload.find({
    collection: 'specialties',
    depth: 1,
    limit: 6,
  });
  const specialties = specialtiesReq.docs;

  const phone = settings?.phone || '0552 170 66 00';
  const phoneClean = phone.replace(/[^0-9+]/g, '');
  const waNumber = phoneClean.startsWith('0') ? '90' + phoneClean.slice(1) : phoneClean.replace('+', '');
  const address = settings?.address || 'Barbaros Mh. Nuhkuyusu Cd No:48A, 34662 Üsküdar/İstanbul';
  
  // Hero Image'ı Payload'dan al, yoksa placeholder göster
  const heroImageUrl = homeData?.heroImage?.url || null;

  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="hero" id="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__badge animate-fade-in-up">
              <span className="hero__badge-dot"></span>
              Diş Hekimi • Altunizade, Üsküdar
            </div>

            <h1 className="hero__title animate-fade-in-up delay-1">
              Sağlıklı Gülüşler,{" "}
              <span className="hero__title-highlight">Güvenilir Eller</span>
            </h1>

            <p className="hero__description animate-fade-in-up delay-2">
              25 yılı aşkın klinik deneyimimle, her hastama özel tedavi planları
              oluşturuyor, konforlu ve güvenilir bir diş hekimliği deneyimi
              sunuyorum.
            </p>

            <div className="hero__actions animate-fade-in-up delay-3">
              <a href={`tel:${phoneClean}`} className="btn btn--primary" id="hero-cta-phone">
                📞 Randevu Al
              </a>
              <a 
                href={`https://wa.me/${waNumber}?text=Merhaba,%20randevu%20almak%20istiyorum.`} 
                className="btn btn--outline" 
                id="hero-cta-whatsapp"
                style={{ borderColor: '#25D366', color: '#25D366' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'text-bottom' }}>
                  <path d="M16.05 32h-.05A16 16 0 0 1 2.3 24.1L0 32l8.1-2.2A16 16 0 1 1 16.05 32z" fill="#25D366"/>
                  <path d="M16.05 2.7A13.3 13.3 0 0 0 4.6 20.3L3.1 25.8l5.7-1.5a13.3 13.3 0 1 0 7.25-21.6z" fill="#FAFAFA"/>
                  <path d="M22.5 18.2c-.4-.2-2.1-1-2.5-1.1-.3-.1-.6-.2-.8.1s-1 1.1-1.2 1.4c-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1-1-1.8-2.2-2-2.5-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6-.1-.2-.9-2-1.2-2.8-.3-.8-.6-.7-.8-.7h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1 0 1.9 1.4 3.7 1.6 3.9.2.3 2.7 4.1 6.5 5.7 3.8 1.6 3.8 1.1 4.5 1 .7-.1 2.1-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z" fill="#25D366"/>
                </svg>
                WhatsApp
              </a>
              <Link href="/hakkimda" className="btn btn--outline" id="hero-cta-about">
                Hakkımda →
              </Link>
            </div>
          </div>

          <div className="hero__image-wrapper animate-scale-in delay-2">
            <div className="hero__image-container" style={{ backgroundColor: 'var(--color-primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
              {heroImageUrl ? (
                <Image
                  src={heroImageUrl}
                  alt="Dt. Sevinç Karahanoğlu - Diş Hekimi"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 480px"
                />
              ) : (
                <Image
                  src="/images/SevincKarahanoglu.jpg"
                  alt="Dt. Sevinç Karahanoğlu - Diş Hekimi"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 480px"
                />
              )}
            </div>
            <div className="hero__image-decoration"></div>
            <div className="hero__image-decoration hero__image-decoration--2"></div>

            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-number">25+</div>
                <div className="hero__stat-label">Yıl Deneyim</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">10K+</div>
                <div className="hero__stat-label">Mutlu Hasta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ABOUT PREVIEW ====== */}
      <section className="about section" id="about-preview">
        <div className="about__inner">
          <div className="about__image-wrapper">
            <div className="about__image">
              <Image
                src="/images/dis-hekimi-sevinc-karahanoglu.jpg"
                alt="Modern diş kliniği iç mekan"
                width={600}
                height={500}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="about__accent"></div>
          </div>

          <div className="about__content">
            <span className="section__subtitle">Hakkımda</span>
            <h2 className="section__title" style={{ textAlign: "left" }}>
              Hekimlik Felsefem
            </h2>

            <div className="about__philosophy">
              <p className="about__philosophy-text">
                &ldquo;Her hastam benim için biriciktir. Tedavi planlarımı oluştururken sadece dişleri değil, hastamın genel sağlığını, beklentilerini ve yaşam kalitesini bir bütün olarak değerlendiririm.&rdquo;
              </p>
            </div>

            <p className="about__text">
              1975 yılında Erzurum’da dünyaya gelen Karahanoğlu, lise eğitimini köklü kurumlardan Haydarpaşa Lisesi’nde tamamlamış; ardından 2000 yılında Marmara Üniversitesi Diş Hekimliği Fakültesi’nden başarıyla mezun olmuştur.
            </p>
            <p className="about__text">
              Meslek hayatına 2000 yılında başlayan ve binlerce hastanın gülüşüne dokunan Dt. Karahanoğlu, edindiği bu derin tecrübeyi kendi vizyonuyla harmanlayarak, 2025 yılında <strong>SevinçDent Ağız ve Diş Sağlığı Polikliniği</strong>'ni hayata geçirmiştir.
            </p>

            <div className="about__details">
              <div className="about__detail">
                <div className="about__detail-icon">🎓</div>
                <div>
                  <div className="about__detail-label">Eğitim</div>
                  <div className="about__detail-value">
                    Marmara Üniversitesi Diş Hekimliği
                  </div>
                </div>
              </div>
              <div className="about__detail">
                <div className="about__detail-icon">⏳</div>
                <div>
                  <div className="about__detail-label">Deneyim</div>
                  <div className="about__detail-value">25+ Yıl Klinik Deneyim</div>
                </div>
              </div>
              <div className="about__detail">
                <div className="about__detail-icon">📍</div>
                <div>
                  <div className="about__detail-label">Konum</div>
                  <div className="about__detail-value">Altunizade, Üsküdar</div>
                </div>
              </div>
              <div className="about__detail">
                <div className="about__detail-icon">🏥</div>
                <div>
                  <div className="about__detail-label">Klinik</div>
                  <div className="about__detail-value">SevinçDent</div>
                </div>
              </div>
            </div>

            <Link href="/hakkimda" className="btn btn--outline" id="about-cta">
              Daha Fazla Bilgi →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== SPECIALTIES ====== */}
      <section className="section section--gray" id="specialties-preview">
        <div className="section__header">
          <span className="section__subtitle">Uzmanlık Alanları</span>
          <h2 className="section__title">Tedavi Alanlarım</h2>
          <p className="section__description">
            Her bir uzmanlık alanında sürekli eğitimlerle kendimi geliştiriyor,
            en güncel teknikleri hastalarıma sunuyorum.
          </p>
        </div>

        <div className="specialties__grid">
          {specialties.length > 0 ? (
            specialties.map((specialty: any) => (
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
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem', marginTop: 0 }}>
                      {specialty.title}
                    </h3>
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
            ))
          ) : (
            <p>Uzmanlık alanları yükleniyor...</p>
          )}
        </div>

        <div className="specialties__actions" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link href="/uzmanlik-alanlari" className="btn btn--outline">
            Tüm Uzmanlık Alanlarını Gör
          </Link>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="cta" id="cta">
        <div className="cta__inner">
          <h2 className="cta__title">Sağlıklı Bir Gülüş İçin İlk Adımı Atın</h2>
          <p className="cta__description">
            Tedavi süreciniz hakkında bilgi almak ve randevu oluşturmak için
            hemen arayın. Size en uygun tedavi planını birlikte oluşturalım.
          </p>
          <a href={`tel:${phoneClean}`} className="cta__phone" id="cta-phone">
            <span className="cta__phone-icon">📞</span>
            {phone}
          </a>
        </div>
      </section>
    </>
  );
}
