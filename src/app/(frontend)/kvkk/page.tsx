import React from 'react';

export const metadata = {
  title: 'KVKK Aydınlatma Metni | Dt. Sevinç Karahanoğlu',
  description: 'Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metnimiz.',
};

export default function KVKKPage() {
  return (
    <main>
      <section className="page-header" style={{ padding: '8rem 2rem 4rem', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>KVKK Aydınlatma Metni</h1>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', minHeight: '50vh', color: 'var(--color-gray-600)', lineHeight: 1.8 }}>
        <h2>1. Veri Sorumlusu</h2>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Muayenehanemiz (Dt. Sevinç Karahanoğlu) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
        </p>

        <h2>2. Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
        <p>
          Toplanan kişisel verileriniz; randevu süreçlerinin yürütülmesi, sağlık hizmetlerinin sunulması, hasta kayıtlarının tutulması, iletişim faaliyetlerinin yürütülmesi ve yasal yükümlülüklerimizin yerine getirilmesi amaçlarıyla işlenmektedir.
        </p>

        <h2>3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
        <p>
          Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda; kanunen yetkili kamu kurum ve kuruluşları ile yasal sınırlar çerçevesinde paylaşılabilecektir.
        </p>

        <h2>4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
        <p>
          Kişisel verileriniz, web sitemiz üzerinden doldurduğunuz formlar, çağrı merkezimiz, muayenehanemize fiziksel ziyaretiniz veya e-posta yoluyla otomatik ya da otomatik olmayan yöntemlerle toplanmaktadır.
        </p>

        <p style={{ marginTop: '3rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
          * Bu metin standart bir bilgilendirme metnidir. Resmi ve nihai KVKK politikanızı hukuk danışmanınız aracılığıyla hazırlayıp bu sayfaya ekleyebilirsiniz.
        </p>
      </section>
    </main>
  );
}
