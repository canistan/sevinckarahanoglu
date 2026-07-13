import React from 'react';

export const metadata = {
  title: 'Çerez (Cookie) Politikası | Dt. Sevinç Karahanoğlu',
  description: 'Web sitemizde kullanılan çerezler ve yönetimleri hakkında bilgilendirme.',
};

export default function CookiePolicyPage() {
  return (
    <main>
      <section className="page-header" style={{ padding: '8rem 2rem 4rem', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Çerez (Cookie) Politikası</h1>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', minHeight: '50vh', color: 'var(--color-gray-600)', lineHeight: 1.8 }}>
        <h2>Çerez Nedir?</h2>
        <p>
          Çerezler (cookies), web sitelerini ziyaret ettiğinizde bilgisayarınıza, tabletinize veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar sayesinde web sitesi, cihazınızı tanır ve size daha iyi bir kullanıcı deneyimi sunar.
        </p>

        <h2>Hangi Çerezleri Kullanıyoruz?</h2>
        <ul>
          <li><strong>Zorunlu Çerezler:</strong> Sitenin düzgün çalışması ve temel fonksiyonların yerine getirilmesi için mutlaka kullanılması gereken çerezlerdir.</li>
          <li><strong>Performans ve Analitik Çerezleri:</strong> Sitemizi nasıl kullandığınızı analiz etmek (örneğin Google Analytics) ve performansı artırmak için kullandığımız çerezlerdir. Kimliğinizi ifşa etmez.</li>
          <li><strong>Hedefleme ve Reklam Çerezleri:</strong> İlgi alanlarınıza uygun içerik veya kampanyaları sunmak amacıyla kullanılır.</li>
        </ul>

        <h2>Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
        <p>
          İnternet tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirebilirsiniz. Ancak zorunlu çerezleri engellemeniz durumunda web sitemizin bazı fonksiyonları düzgün çalışmayabilir.
        </p>

        <p style={{ marginTop: '3rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
          * Bu metin taslak bir bilgilendirme metnidir. İhtiyacınıza göre CMS üzerinden veya kod içerisinden güncelleyebilirsiniz.
        </p>
      </section>
    </main>
  );
}
