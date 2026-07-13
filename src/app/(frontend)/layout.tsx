import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const isLive = process.env.NEXT_PUBLIC_SITE_LIVE === "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://sevinckarahanoglu.com"),
  title: {
    default: "Dt. Sevinç Karahanoğlu | Diş Hekimi — Altunizade, İstanbul",
    template: "%s | Dt. Sevinç Karahanoğlu",
  },
  description:
    "Dt. Sevinç Karahanoğlu — 25 yıllık deneyime sahip diş hekimi. Marmara Üniversitesi mezunu. İmplant, estetik diş hekimliği, zirkonyum kaplama ve daha fazlası. Altunizade, İstanbul.",
  robots: isLive
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Dt. Sevinç Karahanoğlu",
    url: "https://sevinckarahanoglu.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dt. Sevinç Karahanoğlu | Diş Hekimi — Altunizade, İstanbul",
    description: "Dt. Sevinç Karahanoğlu — 25 yıllık deneyime sahip diş hekimi. Marmara Üniversitesi mezunu. İmplant, estetik diş hekimliği, zirkonyum kaplama ve daha fazlası. Altunizade, İstanbul.",
  },
  alternates: {
    canonical: "https://sevinckarahanoglu.com",
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
    "image": "https://sevinckarahanoglu.com/logo.png",
    "url": "https://sevinckarahanoglu.com",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
