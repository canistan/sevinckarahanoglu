import Image from "next/image";
import Link from "next/link";
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const metadata = {
  title: "Hakkımda | Dt. Sevinç Karahanoğlu",
  description: "Diş hekimliğinde çeyrek asırlık tecrübesiyle Dt. Sevinç Karahanoğlu'nun biyografisi, eğitimi ve vizyonu.",
};

export default async function About() {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' }) as any;
  const aboutData = await payload.findGlobal({ slug: 'about-page' }) as any;

  const phone = settings?.phone || '0552 170 66 00';
  const phoneClean = phone.replace(/[^0-9+]/g, '');

  const certificates = aboutData?.certificates || [];
  const profileImageUrl = aboutData?.profileImage?.url || null;

  return (
    <main>
      {/* Page Header */}
      <section className="page-header" style={{ 
        paddingTop: '150px', 
        paddingBottom: '60px', 
        backgroundImage: 'linear-gradient(rgba(0, 116, 123, 0.85), rgba(0, 116, 123, 0.95)), url(/images/clinic-interior.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center', 
        color: 'white' 
      }}>
        <div className="container">
          <span className="section__subtitle" style={{ color: 'var(--color-primary-light)' }}>{aboutData?.subtitle || 'Uzman Diş Hekimi • Çeyrek asırlık tecrübe ve güven.'}</span>
          <h1 className="section__title" style={{ marginTop: '0.5rem', marginBottom: '0', color: 'white' }}>{aboutData?.title || 'Hakkımda'}</h1>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
            
            {/* Image Side */}
            <div className="sticky-on-desktop" style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4', backgroundColor: 'var(--color-primary-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'max-content' }}>
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt="Dt. Sevinç Karahanoğlu"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <Image
                  src="/images/Sevinc-Karahanoglu-Dis-Hekimi.jpg"
                  alt="Dt. Sevinç Karahanoğlu"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              )}
            </div>

            {/* Text Side */}
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                Sağlıklı Gülüşler, Güvenilir Eller
              </h2>
              
              <p style={{ marginBottom: '1.5rem' }}>
                Diş hekimliğinde çeyrek asırlık tecrübesiyle Dt. Sevinç Karahanoğlu, hastalarına modern, güvenilir ve butik bir sağlık hizmeti sunmayı ilke edinmiştir.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                1975 yılında Erzurum’da dünyaya gelen Karahanoğlu, lise eğitimini köklü kurumlardan Haydarpaşa Lisesi’nde tamamlamış; ardından 2000 yılında Marmara Üniversitesi Diş Hekimliği Fakültesi’nden başarıyla mezun olmuştur.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Meslek hayatına 2000-2003 yılları arasında Üsküdar Özel Yunus Emre Hastanesi’nde adım atmış, sonrasında 2025 yılına kadar farklı özel sağlık kuruluşlarında binlerce hastanın gülüşüne dokunmuştur. Edindiği bu derin tecrübeyi kendi vizyonuyla harmanlayarak, 2025 yılının Temmuz ayında <strong>SevinçDent Ağız ve Diş Sağlığı Polikliniği</strong>'ni hayata geçirmiştir.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Şu anda kendi kliniğinde; hem çocuklara hem de yetişkinlere 'aile sıcaklığında' ve kişiye özel (butik) tedavi ayrıcalığı sunmaktadır.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Mesleğine olan tutkusunu sürekli güncel tutan Dt. Karahanoğlu; <strong>İDO (İstanbul Diş Hekimleri Odası)</strong>, <strong>EDAD (Estetik Diş Hekimliği Derneği)</strong> ve <strong>ITI (Uluslararası İmplantoloji Vakfı)</strong> bünyesinde aktif üyedir. Özellikle estetik diş hekimliği, dijital tasarım ve implant cerrahisi konularında uluslararası eğitimleri yakından takip etmektedir.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Tedavi felsefesinin merkezinde; koruyucu hekimlik, dijital teknolojilerin doğru kullanımı ve hastalarının klinikten uzun vadeli bir memnuniyetle ayrılması yer alır. Klinik dışındaki zamanlarında ise doğa yürüyüşleri, pilates ve fitness ile zinde kalmaya özen göstermekte; tiyatro ve sinema ile sanatsal etkinliklere vakit ayırmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="section section--gray">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="section__header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section__subtitle">Eğitim ve Gelişim</span>
            <h2 className="section__title">Sertifikalar ve Diplomalar</h2>
            <p className="section__description" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Mesleki gelişimimi ulusal ve uluslararası kongreler, kurslar ve seminerlerle sürekli destekliyorum.
            </p>
          </div>

          {certificates && certificates.length > 0 ? (
            <>
              <style dangerouslySetInnerHTML={{__html: `
                .marquee-container {
                  width: 100%;
                  overflow: hidden;
                  padding-bottom: 2rem;
                  position: relative;
                }
                /* Optional fade edges for a more premium look */
                .marquee-container::before, .marquee-container::after {
                  content: '';
                  position: absolute;
                  top: 0;
                  width: 100px;
                  height: 100%;
                  z-index: 2;
                  pointer-events: none;
                }
                .marquee-container::before {
                  left: 0;
                  background: linear-gradient(to right, var(--color-gray-50), transparent);
                }
                .marquee-container::after {
                  right: 0;
                  background: linear-gradient(to left, var(--color-gray-50), transparent);
                }
                .marquee-track {
                  display: flex;
                  gap: 2rem;
                  width: max-content;
                  animation: marquee 40s linear infinite;
                }
                .marquee-track:hover {
                  animation-play-state: paused;
                }
                .certificate-card {
                  flex: 0 0 300px;
                  background-color: #fff;
                  border-radius: 15px;
                  padding: 1.5rem;
                  box-shadow: var(--shadow-sm);
                  text-align: center;
                  transition: transform 0.3s ease;
                }
                .certificate-card:hover {
                  transform: translateY(-5px);
                  box-shadow: var(--shadow-md);
                }
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                @media (max-width: 768px) {
                  .certificate-card { flex: 0 0 250px; }
                }
              `}} />
              
              <div className="marquee-container">
                <div className="marquee-track">
                  {/* Birinci Set */}
                  {certificates
                    .filter((cert: any) => !cert.title?.toLowerCase().includes('acev'))
                    .map((cert: any, index: number) => (
                    <div key={`first-${index}`} className="certificate-card">
                      <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem', backgroundColor: '#fdfdfd', borderRadius: '10px', overflow: 'hidden' }}>
                        {cert.image?.url ? (
                          <Image
                            src={cert.image.url}
                            alt={cert.title || 'Sertifika'}
                            fill
                            style={{ objectFit: "contain", padding: '10px' }}
                            sizes="(max-width: 768px) 100vw, 300px"
                          />
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#ccc', fontSize: '3rem' }}>📜</div>
                        )}
                      </div>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 600, lineHeight: '1.4' }}>{cert.title || 'Sertifika'}</h4>
                    </div>
                  ))}
                  {/* İkinci Set (Sonsuz Döngü İçin) */}
                  {certificates
                    .filter((cert: any) => !cert.title?.toLowerCase().includes('acev'))
                    .map((cert: any, index: number) => (
                    <div key={`second-${index}`} className="certificate-card">
                      <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem', backgroundColor: '#fdfdfd', borderRadius: '10px', overflow: 'hidden' }}>
                        {cert.image?.url ? (
                          <Image
                            src={cert.image.url}
                            alt={cert.title || 'Sertifika'}
                            fill
                            style={{ objectFit: "contain", padding: '10px' }}
                            sizes="(max-width: 768px) 100vw, 300px"
                          />
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#ccc', fontSize: '3rem' }}>📜</div>
                        )}
                      </div>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 600, lineHeight: '1.4' }}>{cert.title || 'Sertifika'}</h4>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '0.5rem', color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>
                Detaylı incelemek için farenizi üzerine getirin
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#fff', borderRadius: '20px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>Sertifikalar Yükleniyor</h3>
              <p style={{ color: 'var(--color-text-light)' }}>Admin panelinden sertifika ve diplomalar eklendiğinde burada sergilenecektir.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
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
    </main>
  );
}
