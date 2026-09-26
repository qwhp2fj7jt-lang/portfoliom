export interface ApiImage {
  url?: string;
  alt?: string;
  caption?: string;
}

export interface ApiContentItem {
  text?: string;
  subItems?: string[];
}

export interface ApiSection {
  heading?: string;
  subtitle?: string;
  items?: ApiContentItem[];
}

export type ApiContentBlock =
  | { type: "heading" | "paragraph" | "note"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; file: string; language: string; code: string };

export interface ApiArticle {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  summary?: string;
  /** Kategori slug'ı; başlığı /category API'sinden gelir. */
  category: string;
  readingTime?: string;
  tags?: string[];
  content?: ApiContentBlock[];
  pdf?: { url?: string; name?: string };
  image?: ApiImage;
  sections?: ApiSection[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiArticleDetail {
  article: ApiArticle;
  tableOfContents: { index: number; heading: string }[];
}

export interface ApiArticleQuery {
  sort?: "asc" | "desc";
  category?: string;
  subCategory?: string;
}

export interface ApiSubCategory {
  _id: string;
  name: string;
  slug: string;
  label: string;
  icon?: string;
  image?: string;
  color?: string;
}

export interface ApiCategory {
  _id: string;
  title: string;
  slug: string;
  subCategories: ApiSubCategory[];
}

export interface ApiComment {
  _id: string;
  text: string;
  nickname: string;
  createdAt: string;
}

export interface ApiPost {
  _id: string;
  slug?: string;
  name: string;
  nickname: string;
  image: string;
  description: string;
  konum?: string;
  likes: string[];
  comments: ApiComment[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiLikeResponse {
  likesArray: string[];
  likes: number;
  liked: boolean;
}

export interface ApiUser {
  _id: string;
  name: string;
  email: string;
}

export interface ApiLoginResponse {
  token: string;
  user: ApiUser;
}
