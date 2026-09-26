import { unstable_rethrow } from "next/navigation";
import { articleService, resolveAssetUrl, type ApiArticle } from "@/services";
import { posts as fallbackPosts } from "../data/posts";
import type { ContentBlock, Post } from "../types";

const WORDS_PER_MINUTE = 200;

function toBlocks(article: ApiArticle): ContentBlock[] {
  return (article.sections ?? []).flatMap((section): ContentBlock[] => [
    ...(section.heading ? [{ type: "heading" as const, text: section.heading }] : []),
    ...(section.subtitle ? [{ type: "paragraph" as const, text: section.subtitle }] : []),
    ...(section.items ?? []).flatMap((item): ContentBlock[] => [
      ...(item.text ? [{ type: "paragraph" as const, text: item.text }] : []),
      ...(item.subItems?.length ? [{ type: "list" as const, items: item.subItems }] : []),
    ]),
  ]);
}

function readingTime(blocks: ContentBlock[]) {
  const text = blocks.map((b) => (b.type === "list" ? b.items.join(" ") : b.type === "code" ? b.code : b.text)).join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} dk`;
}

function toPost(article: ApiArticle): Post {
  const content = toBlocks(article);
  return {
    slug: article.slug,
    date: article.createdAt,
    updated: article.updatedAt,
    category: article.category,
    readingTime: readingTime(content),
    title: article.title,
    excerpt: article.summary ?? article.subtitle ?? "",
    lead: article.subtitle,
    tags: [article.category],
    content: content.length > 0 ? content : undefined,
    image: article.image?.url
      ? { src: resolveAssetUrl(article.image.url), alt: article.image.alt ?? article.title }
      : undefined,
  };
}

const byNewest = (list: Post[]) => [...list].sort((a, b) => b.date.localeCompare(a.date));

export async function getPosts(): Promise<Post[]> {
  try {
    return byNewest((await articleService.getAll({ sort: "desc" })).map(toPost));
  } catch (error) {
    unstable_rethrow(error);
    return byNewest(fallbackPosts);
  }
}

export async function getPost(slug: string): Promise<Post | undefined> {
  try {
    return toPost((await articleService.getBySlug(slug)).article);
  } catch (error) {
    unstable_rethrow(error);
    if ((error as { status?: number }).status === 404) return undefined;
    return fallbackPosts.find((p) => p.slug === slug);
  }
}

export async function getLatestPosts(count = 3) {
  return (await getPosts()).slice(0, count);
}
