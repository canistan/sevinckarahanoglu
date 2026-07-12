import type { Metadata } from "next";
import "./globals.css";

const isLive = process.env.NEXT_PUBLIC_SITE_LIVE === "true";

export const metadata: Metadata = {
  title: {
    default: "Dt. Sevinç Karahanoğlu | Diş Hekimi",
    template: "%s | Dt. Sevinç Karahanoğlu",
  },
  description:
    "Dt. Sevinç Karahanoğlu - 25 yıllık deneyime sahip diş hekimi. Marmara Üniversitesi mezunu. Hekimlik felsefesi, uzmanlık alanları ve eğitici içerikler.",
  robots: isLive
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Dt. Sevinç Karahanoğlu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
