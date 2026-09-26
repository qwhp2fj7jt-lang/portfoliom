import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ogImage } from "@/config/images";
import { site } from "@/config/site";
import { SiteTemplate } from "@/components/templates";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVariable-latin-tr.woff2",
  weight: "400 500",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const title = `${site.name} – ${site.role}`;
const description =
  "Frontend mimarisi, performans optimizasyonu ve kullanıcı deneyimi odağında modern web uygulamaları geliştiriyorum. React, Next.js ve TypeScript ekosisteminde temiz kod prensipleri, yeniden kullanılabilir bileşenler ve ölçeklenebilir yazılım yaklaşımlarını benimsiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  keywords: [site.name, "frontend developer", "react", "next.js", "typescript", "web development", "javascript"],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title,
    description,
    url: "/",
    images: [ogImage],
  },
  twitter: { card: "summary", title, description, images: [ogImage] },
};

export const viewport: Viewport = {
  themeColor: "#170a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body data-ground={site.ground} className="font-sans">
        <SiteTemplate>{children}</SiteTemplate>
      </body>
    </html>
  );
}
