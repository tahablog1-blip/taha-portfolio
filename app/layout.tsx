import type { Metadata, Viewport } from "next";
import defaultContent from "@/lib/default-content.json";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const p = defaultContent.profile;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${p.name.en} | ${p.title.en}`, template: `%s | ${p.name.en}` },
  description: p.intro.en,
  keywords: ["Taha Abdelhady", "طه عبدالهادي", "Business Operations", "Accounting", "ERP", "Riyadh", "Portfolio", "CV"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile", url: "/", siteName: p.name.en,
    title: `${p.name.en} — ${p.title.en}`, description: p.intro.en,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: p.name.en }],
    locale: "ar_SA", alternateLocale: ["en_US"],
  },
  twitter: { card: "summary_large_image", title: p.name.en, description: p.intro.en, images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#080D18", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Tajawal:wght@400;500;700;800;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&family=JetBrains+Mono:wght@500&display=swap" />
        <link rel="stylesheet" href="/app.css" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
