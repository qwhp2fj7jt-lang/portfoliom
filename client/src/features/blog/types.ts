export type PostCategory = string;

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; file: string; language: string; code: string }
  | { type: "note"; text: string };

export interface Post {
  slug: string;
  date: string;
  updated?: string;
  category: PostCategory;
  readingTime: string;
  title: string;
  excerpt: string;
  lead?: string;
  tags?: string[];
  likes?: number;
  content?: ContentBlock[];
  image?: { src: string; alt: string };
}
