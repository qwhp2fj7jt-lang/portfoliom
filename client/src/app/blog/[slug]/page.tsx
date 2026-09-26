import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ogImage } from "@/config/images";
import { site } from "@/config/site";
import { JsonLd } from "@/components/atoms";
import { ArticleView, getPost, getPosts } from "@/features/blog";

const DESCRIPTION_LIMIT = 160;

function toDescription(text: string) {
  if (text.length <= DESCRIPTION_LIMIT) return text;
  return `${text.slice(0, DESCRIPTION_LIMIT - 1).replace(/\s+\S*$/, "")}…`;
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const description = toDescription(post.excerpt || post.lead || `${site.name} blog yazısı`);
  const image = post.image ? { url: post.image.src, alt: post.image.alt } : ogImage;

  return {
    title: post.title,
    description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      locale: "tr_TR",
      siteName: site.name,
      title: post.title,
      description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [site.url],
      section: post.category,
      tags: post.tags,
      images: [image],
    },
    twitter: { card: post.image ? "summary_large_image" : "summary", title: post.title, description, images: [image] },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "tr-TR",
    url: `${site.url}/blog/${post.slug}`,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    image: post.image?.src ?? `${site.url}${ogImage.url}`,
    articleSection: post.category,
    keywords: post.tags?.join(", "),
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ArticleView post={post} />
    </>
  );
}
