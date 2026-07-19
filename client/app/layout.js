
import { Header, Footer } from "@/components/layouts";
import "./globals.css";
import { Exo_2 } from "next/font/google";
import Script from "next/script";
import { postArticles } from "@/shared/services/postArticles";
export async function generateMetadata() {
  const baseUrl = "https://portfoliom-4p84.onrender.com";
const exo = Exo_2({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700"
  ],
  variable: "--font-exo",
  display: "swap",
});
  return {
    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/about`,
    },


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


    title: {
      default: "Zeynep Baş – Frontend Engineer",
      template: "%s | Zeynep Baş",
    },
description:"Frontend mimarisi, performans optimizasyonu ve kullanıcı deneyimi odağında modern web uygulamaları geliştiriyorum. React, Next.js ve TypeScript ekosisteminde temiz kod prensipleri, yeniden kullanılabilir bileşenler ve ölçeklenebilir yazılım yaklaşımlarını benimsiyorum.",
    authors: [
      {
        name: "Zeynep Baş",
        url: baseUrl,
      },
    ],
    creator: "Zeynep Baş",


    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },

    openGraph: {
      title: "Zeynep Baş – Frontend Engineer",
description:"Frontend mimarisi, performans optimizasyonu ve kullanıcı deneyimi odağında modern web uygulamaları geliştiriyorum. React, Next.js ve TypeScript ekosisteminde temiz kod prensipleri, yeniden kullanılabilir bileşenler ve ölçeklenebilir yazılım yaklaşımlarını benimsiyorum.",
      url: `${baseUrl}`,
      siteName: "Zeynep Baş",
      type: "website",
      locale: "tr_TR",
      images: [
        {
          url: "/images/avatar.png",
          width: 1200,
          height: 630,
          alt: "Zeynep Baş",
        },
      ],
    },

    metadataBaseJSONLD: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zeynep Baş",
      url: baseUrl,
      image: `${baseUrl}/images/avatar.png`,
      sameAs: [
        "https://www.linkedin.com/in/zeynepbass",
        "https://github.com/zeynepbasss"
      ],
      jobTitle: "Frontend Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Zeynep Baş",
      },
    },
  };
}




export default async function LocaleLayout({ children}) {
  const posts = await postArticles.articlesGet();
  return (
<html lang="tr" className={exo.variable}>
    <body
  className={`${exo.className} antialiased bg-white dark:bg-gray-950 text-black dark:text-gray-300`}
>
          <Header posts={posts}  />
          <main className="min-h-screen">{children}</main>
          <Footer />
    <Script
  async
  strategy="lazyOnload"
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4592493088244067"
  crossOrigin="anonymous"
/>
      </body>
    </html>
  );
}
