import { postArticles } from "@/shared/services/postArticles";
import SubBlog from "@/features/blog";
export async function generateMetadata() {
  const baseUrl = "https://www.zeynepbas.dev";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Blog",
      template: "%s | Zeynep Baş",
    },
    keywords: [
      "Zeynep Baş",
      "blog",
      "frontend",
      "react",
      "next.js",
      "web development",
      "javascript",
    ],
description:"Zeynep Baş'ın frontend engineering, React, Next.js, yazılım mimarisi, performans optimizasyonu, erişilebilirlik (A11y), yapay zeka entegrasyonları ve modern web teknolojileri üzerine deneyimlerini paylaştığı teknik blog yazıları.",
    authors: [{ name: "Zeynep Baş", url: baseUrl }],
    creator: "Zeynep Baş",
    alternates: { canonical: `${baseUrl}/blog` },
    robots: { index: true, follow: true },

    openGraph: {
      title: "Blog – Zeynep Baş",
description:"Zeynep Baş'ın frontend engineering, React, Next.js, yazılım mimarisi, performans optimizasyonu, erişilebilirlik (A11y), yapay zeka entegrasyonları ve modern web teknolojileri üzerine deneyimlerini paylaştığı teknik blog yazıları.",
      url: `${baseUrl}/blog`,
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
export default async function Blog() {
  const posts = await postArticles.articlesGet();
  return <SubBlog articles={posts} />;
}
