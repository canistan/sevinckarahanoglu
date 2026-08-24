import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çerez (Cookie) Politikası | Dt. Sevinç Karahanoğlu',
  description: 'Web sitemizde kullanılan çerezler ve yönetimleri hakkında bilgilendirme.',
  alternates: {
    canonical: "https://www.sevinckarahanoglu.com/cerez-politikasi",
  },
  openGraph: {
    title: "Çerez (Cookie) Politikası | Dt. Sevinç Karahanoğlu",
    description: "Web sitemizde kullanılan çerezler ve yönetimleri hakkında bilgilendirme.",
    url: "https://www.sevinckarahanoglu.com/cerez-politikasi",
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

export default function CookiePolicyPage() {
  return (
    <main>
      <section className="page-header" style={{ padding: '8rem 2rem 4rem', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Çerez (Cookie) Politikası</h1>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', minHeight: '50vh', color: 'var(--color-gray-600)', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '2rem' }}>
          Bu Çerez Politikası, <strong>Dt. Sevinç Karahanoğlu</strong> web sitesini (www.sevinckarahanoglu.com) ziyaret ettiğinizde çerezlerin nasıl kullanıldığını açıklamaktadır. Sitemizi kullanarak bu politikada belirtilen çerez uygulamalarını kabul etmiş sayılırsınız.
        </p>

        <h2>1. Çerez Nedir?</h2>
        <p>
          Çerezler (cookies), web sitelerini ziyaret ettiğinizde bilgisayarınıza, tabletinize veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar sayesinde web sitesi, cihazınızı tanır ve size daha iyi bir kullanıcı deneyimi sunar. Çerezler, kişisel verilerinize zarar vermez ve virüs içermez.
        </p>

        <h2>2. Kullandığımız Çerez Türleri</h2>

        <h3>a) Zorunlu Çerezler</h3>
        <p>
          Web sitemizin düzgün çalışması için gerekli olan çerezlerdir. Bu çerezler olmadan site işlevleri kullanılamaz. Oturum yönetimi, güvenlik ve erişilebilirlik gibi temel fonksiyonları destekler. Bu çerezler devre dışı bırakılamaz.
        </p>

        <h3>b) Performans ve Analitik Çerezleri</h3>
        <p>
          Ziyaretçilerin sitemizi nasıl kullandığını anlamamıza yardımcı olan çerezlerdir. Hangi sayfaların en çok ziyaret edildiği, hata mesajlarının alınıp alınmadığı gibi bilgileri toplar. Bu çerezler kimliğinizi doğrudan ifşa etmez ve yalnızca sitemizin performansını iyileştirmek amacıyla kullanılır.
        </p>

        <h3>c) İşlevsellik Çerezleri</h3>
        <p>
          Dil tercihi, bölge seçimi veya çerez onay tercihleriniz gibi seçimlerinizi hatırlayarak size kişiselleştirilmiş bir deneyim sunar.
        </p>

        <h3>d) Hedefleme ve Pazarlama Çerezleri</h3>
        <p>
          İlgi alanlarınıza uygun içerik sunmak ve reklam kampanyalarının etkinliğini ölçmek amacıyla kullanılabilir. Bu çerezler üçüncü taraf hizmet sağlayıcılar tarafından yerleştirilebilir.
        </p>

        <h2>3. Üçüncü Taraf Çerezleri</h2>
        <p>
          Sitemizde aşağıdaki üçüncü taraf hizmetlerine ait çerezler bulunabilir:
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> Web sitesi trafiğini analiz etmek için kullanılır.</li>
          <li><strong>Google Haritalar:</strong> Klinik konum bilgisini görüntülemek için kullanılır.</li>
          <li><strong>Sosyal Medya Eklentileri:</strong> Instagram ve diğer sosyal medya platformlarının içerik paylaşım özellikleri için kullanılır.</li>
        </ul>

        <h2>4. Çerezlerin Saklama Süreleri</h2>
        <ul>
          <li><strong>Oturum Çerezleri:</strong> Tarayıcınızı kapattığınızda otomatik olarak silinir.</li>
          <li><strong>Kalıcı Çerezler:</strong> Belirli bir süre boyunca cihazınızda saklanır. Bu süre, çerezin türüne göre birkaç günden 2 yıla kadar değişebilir.</li>
        </ul>

        <h2>5. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
        <p>
          Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirebilirsiniz. Çoğu tarayıcı, çerezleri kabul etme, reddetme veya çerez gönderilmeden önce sizi uyarma seçenekleri sunar. Aşağıdaki bağlantılardan tarayıcınıza özel çerez ayarlarına ulaşabilirsiniz:
        </p>
        <ul>
          <li>Google Chrome: Ayarlar → Gizlilik ve Güvenlik → Çerezler</li>
          <li>Mozilla Firefox: Ayarlar → Gizlilik ve Güvenlik</li>
          <li>Safari: Tercihler → Gizlilik</li>
          <li>Microsoft Edge: Ayarlar → Çerezler ve Site İzinleri</li>
        </ul>
        <p>
          Zorunlu çerezleri engellemeniz durumunda web sitemizin bazı fonksiyonları düzgün çalışmayabilir.
        </p>

        <h2>6. Yasal Dayanak</h2>
        <p>
          Bu Çerez Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), 5809 sayılı Elektronik Haberleşme Kanunu ve ilgili mevzuat hükümleri çerçevesinde hazırlanmıştır.
        </p>

        <h2>7. Politika Güncellemeleri</h2>
        <p>
          Bu Çerez Politikası, yasal düzenlemeler veya hizmetlerimizdeki değişiklikler doğrultusunda güncellenebilir. Güncellemeler bu sayfada yayımlanır ve yürürlüğe giriş tarihi belirtilir.
        </p>

        <h2>8. İletişim</h2>
        <p>
          Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li><strong>Veri Sorumlusu:</strong> Dt. Sevinç Karahanoğlu</li>

          <li><strong>Telefon:</strong> 0530 454 8989</li>
          <li><strong>E-posta:</strong> sevinckarahanoglu@gmail.com</li>
        </ul>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-gray-400)' }}>
          Son güncelleme tarihi: Ağustos 2026
        </p>
      </section>
    </main>
  );
}
