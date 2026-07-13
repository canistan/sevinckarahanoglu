import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const isLive = process.env.NEXT_PUBLIC_SITE_LIVE === "true";

export const metadata: Metadata = {
  title: {
    default: "Dt. Sevinç Karahanoğlu | Diş Hekimi — Ataşehir, İstanbul",
    template: "%s | Dt. Sevinç Karahanoğlu",
  },
  description:
    "Dt. Sevinç Karahanoğlu — 25 yıllık deneyime sahip diş hekimi. Marmara Üniversitesi mezunu. İmplant, estetik diş hekimliği, zirkonyum kaplama ve daha fazlası. Ataşehir, İstanbul.",
  robots: isLive
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Dt. Sevinç Karahanoğlu",
    url: "https://sevinckarahanoglu.com",
  },
  alternates: {
    canonical: "https://sevinckarahanoglu.com",
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
