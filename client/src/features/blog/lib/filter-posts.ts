import { ALL_CATEGORIES } from "../constants";
import type { Post } from "../types";

export type CategoryFilterValue = string;

interface FilterOptions {
  query: string;
  category: CategoryFilterValue;
  newestFirst: boolean;
}

const normalize = (s: string) => s.toLocaleLowerCase("tr-TR");

export function categoriesOf(posts: Post[]): CategoryFilterValue[] {
  return [ALL_CATEGORIES, ...new Set(posts.map((p) => p.category))];
}

export function filterPosts(posts: Post[], { query, category, newestFirst }: FilterOptions) {
  const q = normalize(query.trim());
  return posts
    .filter((p) => category === ALL_CATEGORIES || p.category === category)
    .filter((p) => !q || normalize(`${p.title} ${p.excerpt} ${p.lead ?? ""} ${p.category} ${p.tags?.join(" ") ?? ""}`).includes(q))
    .sort((a, b) => (newestFirst ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));
}
