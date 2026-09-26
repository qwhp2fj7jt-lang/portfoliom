import type { Metadata } from "next";
import { BlogExplorer, getPosts } from "@/features/blog";
import { PageTemplate } from "@/components/templates";
import { ogImage } from "@/config/images";
import { site } from "@/config/site";

const lead =
  "Frontend, React, Next.js, yazılım mimarisi, performans, erişilebilirlik ve yapay zeka entegrasyonları üzerine deneyimler.";

const description =
  "Zeynep Baş'ın frontend developer, React, Next.js, yazılım mimarisi, performans optimizasyonu, erişilebilirlik (A11y), yapay zeka entegrasyonları ve modern web teknolojileri üzerine deneyimlerini paylaştığı teknik blog yazıları.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  keywords: [site.name, "blog", "frontend", "react", "next.js", "typescript", "web development", "javascript"],
  creator: site.name,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: `Blog – ${site.name}`,
    description,
    url: "/blog",
    images: [ogImage],
  },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <PageTemplate eyebrow="Blog" title="Yazılar" lead={lead}>
      <BlogExplorer posts={posts} layout="list" />
    </PageTemplate>
  );
}
