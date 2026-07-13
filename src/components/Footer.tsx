import Link from "next/link";
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' }) as any;
  
  const address = settings?.address || 'Barbaros Mh. Nuhkuyusu Cd No:48A, 34662 Üsküdar/İstanbul';
  const phone = settings?.phone || '0552 170 66 00';
  const phoneClean = phone.replace(/[^0-9+]/g, '');
  // const workingHours = settings?.workingHours || 'Pazartesi – Cumartesi 09:00 – 19:30';
  const instagram = settings?.instagramUrl || 'https://www.instagram.com/dishekimisevinckarahanoglu/';
  const facebook = settings?.facebookUrl || 'https://www.facebook.com/profile.php?id=100094564800152#';

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div>
          <h3 className="footer__brand-name">Dt. Sevinç Karahanoğlu</h3>
          <p className="footer__brand-desc">
            25 yıllık deneyimiyle, hastalarına konforlu ve güvenilir diş
            hekimliği hizmeti sunan Marmara Üniversitesi mezunu diş hekimi.
          </p>
          <div className="footer__social">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram Hesabı"
              id="social-instagram"
            >
              📸
            </a>
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Facebook Hesabı"
              id="social-facebook"
            >
              📘
            </a>
          </div>
        </div>

        {/* Sayfalar */}
        <div>
          <h4 className="footer__heading">Sayfalar</h4>
          <nav className="footer__links" aria-label="Footer Sayfalar">
            <Link href="/hakkimda" className="footer__link">Hakkımda</Link>
            <Link href="/uzmanlik-alanlari" className="footer__link">Uzmanlık Alanları</Link>
            <Link href="/blog" className="footer__link">Blog</Link>
          </nav>
        </div>

        {/* Uzmanlık Alanları */}
        <div>
          <h4 className="footer__heading">Uzmanlık Alanları</h4>
          <nav className="footer__links" aria-label="Footer Uzmanlıklar">
            <Link href="/uzmanlik-alanlari/implant" className="footer__link">İmplant</Link>
            <Link href="/uzmanlik-alanlari/estetik-dis-hekimligi" className="footer__link">Estetik Diş Hekimliği</Link>
            <Link href="/uzmanlik-alanlari/zirkonyum-kaplama" className="footer__link">Zirkonyum Kaplama</Link>
            <Link href="/uzmanlik-alanlari/ortodonti" className="footer__link">Ortodonti</Link>
          </nav>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="footer__heading">İletişim</h4>
          <div className="footer__links">
            <a href={`tel:${phoneClean}`} className="footer__link" id="footer-phone">
              📞 {phone}
            </a>
            <span className="footer__link" style={{ lineHeight: 1.4 }}>
              📍 {address}
            </span>
            <span className="footer__link">
              🕐 Pzt-Cum: 09:00 - 19:30 | Cmt: 09:00 - 18:00
            </span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} Dt. Sevinç Karahanoğlu — Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
}
