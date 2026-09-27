import { unstable_rethrow } from "next/navigation";
import { articleService, categoryService, resolveAssetUrl, type ApiArticle } from "@/services";
import type { ContentBlock, Post, PostCategory } from "../types";

const WORDS_PER_MINUTE = 200;

type CategoryTitles = Map<string, PostCategory>;

function toBlocks(article: ApiArticle): ContentBlock[] {
  if (article.content?.length) return article.content;
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

function toPost(article: ApiArticle, categories: CategoryTitles): Post {
  const content = toBlocks(article);
  const category = categories.get(article.category) ?? humanize(article.category);
  return {
    slug: article.slug,
    date: article.createdAt,
    updated: article.updatedAt,
    category,
    readingTime: article.readingTime || readingTime(content),
    title: article.title,
    excerpt: article.summary ?? article.subtitle ?? "",
    lead: article.subtitle,
    tags: article.tags?.length ? article.tags : [category],
    content: content.length > 0 ? content : undefined,
    image: article.image?.url
      ? { src: resolveAssetUrl(article.image.url), alt: article.image.alt ?? article.title }
      : undefined,
  };
}

const byNewest = (list: Post[]) => [...list].sort((a, b) => b.date.localeCompare(a.date));

// /category API'si: yazının category alanı çoğunlukla bir alt kategori slug'ıdır (ör. "react.js" → "React").
async function getCategoryTitles(): Promise<CategoryTitles> {
  try {
    const titles: CategoryTitles = new Map();
    for (const category of await categoryService.getAll()) {
      titles.set(category.slug, category.title);
      for (const sub of category.subCategories ?? []) titles.set(sub.slug, sub.label || sub.name);
    }
    return titles;
  } catch (error) {
    unstable_rethrow(error);
    return new Map();
  }
}

// Kategori API'de yoksa slug okunur hale getirilir: "software architecture" → "Software Architecture".
const humanize = (slug: string) => slug.replace(/[-_]+/g, " ").replace(/(^|\s)\p{L}/gu, (c) => c.toLocaleUpperCase("tr-TR"));

// Aynı slug'a sahip birden fazla yazı varsa yalnızca en yenisi listelenir (detay sayfası tek yazı açabilir).
const uniqueBySlug = (list: Post[]) => [...new Map(list.map((p) => [p.slug, p])).values()];

export async function getPosts(): Promise<Post[]> {
  try {
    const [articles, categories] = await Promise.all([articleService.getAll({ sort: "desc" }), getCategoryTitles()]);
    // uniqueBySlug son görüleni tutar; eskiden yeniye sıralayıp aynı slug'da en yeniyi bırakırız.
    return byNewest(uniqueBySlug(byNewest(articles.map((a) => toPost(a, categories))).reverse()));
  } catch (error) {
    unstable_rethrow(error);
    return [];
  }
}

/** Filtre seçenekleri: /category API'sindeki sırayla, yalnızca yazısı olan kategoriler. */
export async function getCategories(posts: Post[]): Promise<PostCategory[]> {
  const used = new Set(posts.map((p) => p.category));
  const fromApi = [...(await getCategoryTitles()).values()].filter((title) => used.has(title));
  return [...new Set([...fromApi, ...used])];
}

export async function getPost(slug: string): Promise<Post | undefined> {
  try {
    const [{ article }, categories] = await Promise.all([articleService.getBySlug(slug), getCategoryTitles()]);
    return toPost(article, categories);
  } catch (error) {
    unstable_rethrow(error);
    return undefined;
  }
}

export async function getLatestPosts(count = 3) {
  return (await getPosts()).slice(0, count);
}
