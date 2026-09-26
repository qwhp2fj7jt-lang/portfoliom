import type { MetadataRoute } from "next";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { getPosts } from "@/features/blog";

type Entry = MetadataRoute.Sitemap[number];

const pages: { path: string; changeFrequency: Entry["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/experience", changeFrequency: "monthly", priority: 0.7 },
  { path: "/zone", changeFrequency: "weekly", priority: 0.6 },
];

const toDate = (value?: string) => {
  const date = value ? new Date(value) : undefined;
  return date && !Number.isNaN(date.getTime()) ? date : undefined;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const now = new Date();
  const latestPost = posts.reduce<Date | undefined>((latest, p) => {
    const date = toDate(p.updated ?? p.date);
    return date && (!latest || date > latest) ? date : latest;
  }, undefined);

  const staticEntries: MetadataRoute.Sitemap = pages.map(({ path, changeFrequency, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: path === "/blog" || path === "" ? (latestPost ?? now) : now,
    changeFrequency,
    priority,
    ...(path === "/about" && { images: [`${site.url}${images.profile.src}`] }),
  }));

  const articleEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${encodeURIComponent(p.slug)}`,
    lastModified: toDate(p.updated ?? p.date) ?? now,
    changeFrequency: "monthly",
    priority: 0.7,
    ...(p.image && { images: [p.image.src] }),
  }));

  return [...staticEntries, ...articleEntries];
}
