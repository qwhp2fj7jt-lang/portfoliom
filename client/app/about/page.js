
import Abouts from "@/features/about";
export async function generateMetadata() {
  const baseUrl = "https://www.zeynepbas.dev";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Hakkımda",
      template: "%s | Zeynep Baş",
    },
    keywords: [
      "Zeynep Baş",
      "hakkımda",
      "frontend",
      "react",
      "next.js",
      "web development",
      "javascript",
    ],
description: "Merhaba! Ben Zeynep, ölçeklenebilir frontend mimarileri tasarlayan ve modern web uygulamaları geliştiren bir Frontend Engineer'ım. Next.js, React ve TypeScript ekosisteminde performans, erişilebilirlik (A11y), kullanıcı deneyimi ve temiz yazılım prensiplerini odağıma alarak sürdürülebilir dijital ürünler geliştiriyorum.",
    authors: [{ name: "Zeynep Baş", url: baseUrl }],
    creator: "Zeynep Baş",
    alternates: { canonical: `${baseUrl}/projects` },
    robots: { index: true, follow: true },

    openGraph: {
      title: "Hakkımda – Zeynep Baş",

        description: "Merhaba! Ben Zeynep, ölçeklenebilir frontend mimarileri tasarlayan ve modern web uygulamaları geliştiren bir Frontend Engineer'ım. Next.js, React ve TypeScript ekosisteminde performans, erişilebilirlik (A11y), kullanıcı deneyimi ve temiz yazılım prensiplerini odağıma alarak sürdürülebilir dijital ürünler geliştiriyorum.",
      url: `${baseUrl}/about`,
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

  };
}

export default function About() {
  return <Abouts/>
}
