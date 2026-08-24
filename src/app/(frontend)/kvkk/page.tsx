import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Dt. Sevinç Karahanoğlu',
  description: 'Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metnimiz.',
  alternates: {
    canonical: "https://www.sevinckarahanoglu.com/kvkk",
  },
  openGraph: {
    title: "KVKK Aydınlatma Metni | Dt. Sevinç Karahanoğlu",
    description: "Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metnimiz.",
    url: "https://www.sevinckarahanoglu.com/kvkk",
    type: "website",
    locale: "tr_TR",
    siteName: "Dt. Sevinç Karahanoğlu",
  },
};

export default function KVKKPage() {
  return (
    <main>
      <section className="page-header" style={{ padding: '8rem 2rem 4rem', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>KVKK Aydınlatma Metni</h1>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', minHeight: '50vh', color: 'var(--color-gray-600)', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '2rem' }}>
          <strong>Dt. Sevinç Karahanoğlu</strong> olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu doğrultuda, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında sizleri bilgilendirmek isteriz.
        </p>

        <h2>1. Veri Sorumlusu</h2>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla <strong>Dt. Sevinç Karahanoğlu</strong> (bundan sonra &quot;Muayenehane&quot; olarak anılacaktır) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
        </p>

        <h2>2. İşlenen Kişisel Veriler</h2>
        <p>Muayenehanemiz tarafından aşağıdaki kişisel veri kategorileri işlenmektedir:</p>
        <ul>
          <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası, doğum tarihi</li>
          <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres</li>
          <li><strong>Sağlık Bilgileri:</strong> Diş ve ağız sağlığı geçmişi, tedavi kayıtları, röntgen ve görüntüleme verileri, kullanılan ilaçlar, alerjiler</li>
          <li><strong>Finansal Bilgiler:</strong> Ödeme ve faturalama bilgileri</li>
          <li><strong>Dijital Veriler:</strong> Web sitesi ziyaret verileri, çerez kayıtları, IP adresi</li>
        </ul>

        <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
        <p>Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
        <ul>
          <li>Ağız ve diş sağlığı hizmetlerinin planlanması ve sunulması</li>
          <li>Randevu süreçlerinin yönetilmesi</li>
          <li>Hasta kayıt ve takip işlemlerinin yürütülmesi</li>
          <li>Tedavi planlarının oluşturulması ve takibi</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi (Sağlık Bakanlığı bildirimleri vb.)</li>
          <li>Faturalama ve muhasebe işlemlerinin yürütülmesi</li>
          <li>İletişim faaliyetlerinin yürütülmesi (randevu hatırlatma, bilgilendirme)</li>
          <li>Hizmet kalitesinin artırılması ve hasta memnuniyetinin ölçülmesi</li>
        </ul>

        <h2>4. Kişisel Verilerin Aktarılması</h2>
        <p>
          Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda aşağıdaki taraflara aktarılabilecektir:
        </p>
        <ul>
          <li>Sağlık Bakanlığı ve bağlı kuruluşları</li>
          <li>Sosyal Güvenlik Kurumu (SGK)</li>
          <li>Adli ve idari makamlar (yasal zorunluluk halinde)</li>
          <li>Anlaşmalı laboratuvarlar ve sağlık kuruluşları (tedavi gereklilikleri doğrultusunda)</li>
          <li>Yasal yükümlülükler kapsamında denetim ve düzenleyici kurumlar</li>
        </ul>

        <h2>5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
        <p>
          Kişisel verileriniz; muayenehanemize fiziksel başvurunuz, web sitemizdeki iletişim ve randevu formları, telefon görüşmeleri, e-posta yazışmaları ve sosyal medya kanalları aracılığıyla otomatik veya otomatik olmayan yöntemlerle toplanmaktadır.
        </p>
        <p>Kişisel verilerinizin işlenmesinin hukuki sebepleri şunlardır:</p>
        <ul>
          <li>Açık rızanızın bulunması (KVKK m.5/1)</li>
          <li>Kanunlarda açıkça öngörülmesi (KVKK m.5/2-a)</li>
          <li>Bir sözleşmenin kurulması veya ifasıyla ilgili olması (KVKK m.5/2-c)</li>
          <li>Veri sorumlusunun hukuki yükümlülüğü (KVKK m.5/2-ç)</li>
          <li>Kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis ve tedavi (KVKK m.6/3)</li>
        </ul>

        <h2>6. Kişisel Verilerin Saklanma Süresi</h2>
        <p>
          Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca ve yasal saklama yükümlülükleri çerçevesinde saklanmaktadır. Sağlık verileri, ilgili mevzuat gereği tedavi tarihinden itibaren en az 20 yıl süreyle muhafaza edilmektedir.
        </p>

        <h2>7. Veri Güvenliği Tedbirleri</h2>
        <p>
          Muayenehanemiz, kişisel verilerinizin güvenliğini sağlamak amacıyla gerekli teknik ve idari tedbirleri almaktadır. Bu tedbirler arasında; veri erişim yetkilendirmeleri, şifreleme teknolojileri, güvenlik duvarları ve düzenli güvenlik denetimleri yer almaktadır.
        </p>

        <h2>8. Veri Sahibi Olarak Haklarınız</h2>
        <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
          <li>Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
          <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
          <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
          <li>Yapılan işlemlerin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
          <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
          <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
        </ul>

        <h2>9. Başvuru Yöntemi</h2>
        <p>
          Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerden biriyle muayenehanemize başvurabilirsiniz:
        </p>
        <ul>
          <li>Yazılı olarak muayenehane adresimize başvuru</li>
          <li>Kayıtlı elektronik posta (KEP) adresi ile</li>
          <li>Güvenli elektronik imza veya mobil imza ile</li>
          <li>Sistemimizde kayıtlı e-posta adresiniz üzerinden</li>
        </ul>
        <p>
          Başvurularınız, talebinizin niteliğine göre en kısa sürede ve en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılacaktır.
        </p>

        <h2>10. İletişim Bilgileri</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li><strong>Veri Sorumlusu:</strong> Dt. Sevinç Karahanoğlu</li>
          <li><strong>Adres:</strong> Kocasinan Merkez Mah. Çelebioğlu Sk. No:8/4, 34744 Ataşehir/İstanbul</li>
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
