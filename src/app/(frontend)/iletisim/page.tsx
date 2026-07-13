import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const metadata = {
  title: "İletişim | Dt. Sevinç Karahanoğlu",
  description: "SevinçDent Ağız ve Diş Sağlığı Polikliniği iletişim bilgileri, adres, telefon ve çalışma saatleri.",
};

export default async function Contact() {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' }) as any;

  const phone = settings?.phone || '0552 170 66 00';
  const phoneClean = phone.replace(/[^0-9+]/g, '');
  const email = settings?.email || 'sevincdent@gmail.com';
  const address = settings?.address || 'Barbaros Mh. Nuhkuyusu Cd No:48A, 34662 Üsküdar/İstanbul';
  // const workingHours = settings?.workingHours || 'Pazartesi – Cumartesi 09:00 – 19:30';
  const mapsUrl = settings?.mapsUrl || 'https://www.google.com/maps/place/SEVİNÇ+DENT+AĞIZ+VE+DİŞ+SAĞLIĞI+POLİKLİNİĞİ/@41.0175345,29.0321157,17z';

  return (
    <main>
      {/* Page Header */}
      <section className="page-header" style={{ paddingTop: '150px', paddingBottom: '60px', backgroundColor: 'var(--color-primary-50)', textAlign: 'center' }}>
        <div className="container">
          <span className="section__subtitle">Bize Ulaşın</span>
          <h1 className="section__title" style={{ marginTop: '0.5rem', marginBottom: '0' }}>İletişim</h1>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Contact Details */}
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                Kliniğimize Bekleriz
              </h2>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Tedavi süreciniz hakkında bilgi almak, ücretsiz ön görüşme sağlamak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>📍</div>
                  <div>
                    <h4 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.2rem' }}>Adres</h4>
                    <p style={{ color: 'var(--color-text-light)', lineHeight: '1.5' }}>{address}</p>
                    <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 500 }}>✓ Özel Otopark Mevcuttur</p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>📞</div>
                  <div>
                    <h4 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.2rem' }}>Telefon & WhatsApp</h4>
                    <a href={`tel:${phoneClean}`} style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>{phone}</a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>✉️</div>
                  <div>
                    <h4 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.2rem' }}>E-Posta</h4>
                    <a href={`mailto:${email}`} style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>{email}</a>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>🕒</div>
                  <div>
                    <h4 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.2rem' }}>Çalışma Saatleri</h4>
                    <p style={{ color: 'var(--color-text-light)' }}>Pazartesi – Cuma: 09:00 – 19:30</p>
                    <p style={{ color: 'var(--color-text-light)' }}>Cumartesi: 09:00 – 18:00</p>
                    <p style={{ color: 'var(--color-text-light)', opacity: 0.7, fontSize: '0.9rem' }}>Pazar günleri kapalıyız.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={`tel:${phoneClean}`} className="btn btn--primary">Hemen Ara</a>
                <a href={`https://wa.me/${phoneClean.replace('+', '')}?text=Merhaba,%20randevu%20almak%20istiyorum.`} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ borderColor: '#25D366', color: '#25D366' }}>WhatsApp'tan Yaz</a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', height: '100%', minHeight: '400px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.584742410313!2d29.029540776510795!3d41.01244342571217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab80164c636f3%3A0xe54dbfb2cbba6ce3!2sBarbaros%2C%20Nuhkuyusu%20Cd%20No%3A48A%2C%2034662%20%C3%9Csk%C3%BCdar%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1715000000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
