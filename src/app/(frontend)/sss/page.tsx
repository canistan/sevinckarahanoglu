import React from 'react';
import { Accordion } from '@/components/Accordion';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular (SSS) | Dt. Sevinç Karahanoğlu',
  description: 'Diş tedavileri, implant, kanal tedavisi ve diş beyazlatma hakkında hastalarımızın en çok merak ettiği soruların cevapları.',
  alternates: {
    canonical: "https://www.sevinckarahanoglu.com/sss",
  },
  openGraph: {
    title: "Sıkça Sorulan Sorular (SSS) | Dt. Sevinç Karahanoğlu",
    description: "Diş tedavileri, implant, kanal tedavisi ve diş beyazlatma hakkında hastalarımızın en çok merak ettiği soruların cevapları.",
    url: "https://www.sevinckarahanoglu.com/sss",
    type: "website",
    locale: "tr_TR",
    siteName: "Dt. Sevinç Karahanoğlu",
  },
};

const faqs = [
  {
    question: "İmplant tedavisi sırasında ağrı hisseder miyim?",
    answer: "Hayır. İmplant cerrahisi gelişmiş lokal anestezi altında yapıldığı için işlem sırasında kesinlikle ağrı hissedilmez. İşlem sonrası oluşabilecek hafif hassasiyetler, hekimimizin önereceği basit ağrı kesicilerle kolaylıkla kontrol altına alınır."
  },
  {
    question: "Diş beyazlatma (Bleaching) diş mineme zarar verir mi?",
    answer: "Uzman diş hekimi kontrolünde klinik ortamında yapılan profesyonel diş beyazlatma işlemi minelere zarar vermez. Evde kullanılan aşındırıcı karbonat veya limon gibi karışımlar ise minede kalıcı çiziklere yol açabilir."
  },
  {
    question: "Çocuklar ilk kez ne zaman diş hekimine gitmelidir?",
    answer: "Pedodonti uzmanlarına göre, bebeğinizin ilk dişi ağızda görüldüğünde (genellikle 6. ay - 1 yaş arası) ilk diş hekimi muayenesi yapılmalıdır. Bu sayede hem ebeveynler doğru yönlendirilir hem de çocukta dişçi fobisi oluşması engellenir."
  },
  {
    question: "Kanal tedavisi ne kadar sürer?",
    answer: "Gelişen teknoloji ve dijital sistemler sayesinde, dişteki enfeksiyon çok büyük değilse kanal tedavisi genellikle 45-60 dakikalık tek bir seansta, tamamen ağrısız olarak tamamlanabilmektedir."
  },
  {
    question: "Gece diş sıkması (Bruksizm) nasıl tedavi edilir?",
    answer: "Diş sıkmanın çene eklemine ve dişlere verdiği zararı engellemek için kişiye özel şeffaf gece plakları (splint) kullanılır. Ayrıca çiğneme kaslarına uygulanan masseter botoksu da istemsiz kasılmaları önleyerek hastayı oldukça rahatlatır."
  },
  {
    question: "Zirkonyum ile Lamine kaplama arasındaki fark nedir?",
    answer: "Lamine (Yaprak porselen), dişin sadece ön yüzeyinden çok minimal aşındırma yapılarak hazırlanan ultra ince estetik kaplamadır. Zirkonyum ise dişin etrafından bir miktar küçültülerek dişin üzerine şapka gibi geçirilen, ışık geçirgenliği yüksek ve çok daha dayanıklı bir materyaldir."
  },
  {
    question: "Diş taşı temizliği (Detertraj) zararlı mı?",
    answer: "Kesinlikle hayır. Diş hekimlerinin kullandığı ultrasonik titreşimli aletler taşı kırarak uzaklaştırır, minenin sertliğini çizebilecek yapıda değildir. Temizlenmeyen diş taşları diş eti çekilmesine ve diş kayıplarına yol açar."
  },
  {
    question: "Hamilelikte diş tedavisi yapılabilir mi?",
    answer: "Evet yapılabilir. Özellikle hamileliğin ikinci trimesteri (4-6 aylar arası) birçok diş tedavisi için en güvenli dönemdir. İlk ve son 3 ayda ise acil olmayan işlemler doğum sonrasına ertelenebilir."
  }
];

export default function FAQPage() {
  return (
    <main>
      <section className="page-header" style={{ padding: '8rem 2rem 4rem', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Sıkça Sorulan Sorular</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Sağlıklı gülüşlere giden yolda aklınıza takılan tüm soruların cevapları burada.
        </p>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', minHeight: '50vh' }}>
        <Accordion items={faqs} />
        
        <div style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', backgroundColor: 'var(--color-primary-light)', borderRadius: '15px' }}>
          <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Farklı bir sorunuz mu var?</h2>
          <p style={{ color: 'var(--color-gray-600)', marginBottom: '2rem' }}>İletişim sayfamızdan veya WhatsApp üzerinden bize ulaşarak direkt bilgi alabilirsiniz.</p>
          <a href="/iletisim" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 600,
            transition: 'background-color 0.3s ease'
          }}>
            İletişime Geçin
          </a>
        </div>
      </section>
    </main>
  );
}
