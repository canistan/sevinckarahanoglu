import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sevinckarahanoglu.com"),
  title: {
    default: "Dt. Sevinç Karahanoğlu | Diş Hekimi — Altunizade, İstanbul",
    template: "%s | Dt. Sevinç Karahanoğlu",
  },
  description:
    "Dt. Sevinç Karahanoğlu — 25 yıllık deneyime sahip diş hekimi. Marmara Üniversitesi mezunu. İmplant, estetik diş hekimliği, zirkonyum kaplama ve daha fazlası. Altunizade, İstanbul.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Dt. Sevinç Karahanoğlu",
    url: "https://www.sevinckarahanoglu.com",
    title: "Dt. Sevinç Karahanoğlu | Diş Hekimi",
    description: "25 yıllık deneyime sahip uzman diş hekimi. İmplant, estetik diş hekimliği, zirkonyum kaplama. Altunizade, İstanbul.",
    images: [
      {
        url: "/images/clinic-interior.png",
        width: 1200,
        height: 630,
        alt: "Dt. Sevinç Karahanoğlu Klinik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dt. Sevinç Karahanoğlu | Diş Hekimi — Altunizade, İstanbul",
    description: "Dt. Sevinç Karahanoğlu — 25 yıllık deneyime sahip diş hekimi. Marmara Üniversitesi mezunu. İmplant, estetik diş hekimliği, zirkonyum kaplama ve daha fazlası. Altunizade, İstanbul.",
  },
  alternates: {
    // Let Next.js auto-generate canonical URLs per-page using metadataBase
  },
  manifest: "/manifest.json",
  verification: {
    google: "zB92t8fbVtpQs3jGmeU2NtrA4T5xurpELPU3EQmsBsc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJSON = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dt. Sevinç Karahanoğlu | Üsküdar Diş Kliniği",
    "image": "https://www.sevinckarahanoglu.com/logo.png",
    "url": "https://www.sevinckarahanoglu.com",
    "telephone": "+905521706600",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barbaros Mh. Nuhkuyusu Cd No:48A",
      "addressLocality": "Üsküdar",
      "addressRegion": "İstanbul",
      "postalCode": "34662",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0175345,
      "longitude": 29.0321157
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJSON) }}
        />
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KRFSZWVS');
          `}
        </Script>
        {/* End Google Tag Manager */}

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EJHPSB457S" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });

            gtag('config', 'G-EJHPSB457S');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRFSZWVS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
