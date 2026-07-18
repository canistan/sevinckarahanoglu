import Link from "next/link";
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CookiePreferencesButton } from '@/components/CookiePreferencesButton';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' }) as any;
  
  const address = settings?.address || 'Barbaros Mh. Nuhkuyusu Cd No:48A, 34662 Üsküdar/İstanbul';
  const phone = settings?.phone || '0552 170 66 00';
  const phoneClean = phone.replace(/[^0-9+]/g, '');
  const instagram = settings?.instagramUrl || 'https://www.instagram.com/dishekimisevinckarahanoglu/';
  const facebook = settings?.facebookUrl || 'https://www.facebook.com/profile.php?id=100094564800152#';
  const linkedin = 'https://www.linkedin.com/in/sevinç-karahanoğlu-16848291/';

  return (
    <footer className="footer-main" id="footer">
      <div className="footer__inner" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '3rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        
        {/* Brand */}
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff', fontWeight: 600 }}>Dt. Sevinç Karahanoğlu</h3>
          <p style={{ color: 'var(--color-primary-light)', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1rem' }}>
            "Değerde ilk olan, öncelikte ilktir."
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            25 yıllık deneyimiyle, hastalarına konforlu ve güvenilir diş hekimliği hizmeti sunan Marmara Üniversitesi mezunu uzman diş hekimi.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Instagram SVG */}
            <a href={instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s ease' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Facebook SVG */}
            <a href={facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s ease' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* LinkedIn SVG */}
            <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s ease' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* YouTube SVG */}
            <a href="https://youtube.com/@sevinckarahanoglu1601?si=QRL2fvdHK_q5kwWV" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s ease' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        {/* Sayfalar */}
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff', fontWeight: 600 }}>Kurumsal</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <Link href="/" className="footer__link">Ana Sayfa</Link>
            <Link href="/hakkimda" className="footer__link">Hakkımda</Link>
            <Link href="/sss" className="footer__link">Sıkça Sorulan Sorular</Link>
            <Link href="/blog" className="footer__link">Sağlıklı Gülüşler Rehberi</Link>
            <Link href="/iletisim" className="footer__link">İletişim</Link>
          </nav>
        </div>

        {/* Uzmanlık Alanları */}
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff', fontWeight: 600 }}>Uzmanlık Alanları</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <Link href="/uzmanlik-alanlari" className="footer__link">Tüm Tedavilerimiz</Link>
            <Link href="/uzmanlik-alanlari/implant" className="footer__link">İmplant Diş Tedavisi</Link>
            <Link href="/uzmanlik-alanlari/estetik-dis-hekimligi" className="footer__link">Estetik Diş Hekimliği</Link>
            <Link href="/uzmanlik-alanlari/zirkonyum-kaplama" className="footer__link">Zirkonyum Kaplama</Link>
            <Link href="/uzmanlik-alanlari/ortodonti" className="footer__link">Ortodonti</Link>
          </nav>
        </div>

        {/* İletişim */}
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff', fontWeight: 600 }}>İletişim</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
            <a href={`tel:${phoneClean}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              {phone}
            </a>
            <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.4 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {address}
            </span>
            <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span>Pzt-Cum: 09:00 - 19:30</span>
                <span>Cmt: 09:00 - 18:00</span>
              </div>
            </span>
          </div>
        </div>
      </div>

      {/* Yasal Linkler ve Alt Çizgi */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
          <p style={{ margin: 0 }}>© {currentYear} Dt. Sevinç Karahanoğlu.</p>
          <Link href="/kvkk" style={{ color: 'inherit', textDecoration: 'none' }}>KVKK Aydınlatma Metni</Link>
          <Link href="/cerez-politikasi" style={{ color: 'inherit', textDecoration: 'none' }}>Çerez Politikası</Link>
          <CookiePreferencesButton />
        </div>

        <div style={{ fontSize: '0.85rem' }}>
          <a href="https://sevincdent.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-light)', textDecoration: 'none', fontWeight: 600 }}>
            Sevinç Dent Ağız ve Diş Sağlığı Polikliniği
          </a>
        </div>
      </div>
    </footer>
  );
}
