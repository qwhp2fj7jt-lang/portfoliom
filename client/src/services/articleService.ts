import { apiClient } from "./apiClient";
import type { ApiArticle, ApiArticleDetail, ApiArticleQuery } from "./types";

const REVALIDATE = 60;

export const articleService = {
  getAll: (query?: ApiArticleQuery) =>
    apiClient.get<ApiArticle[]>("/articles", {
      query: { ...query },
      signal: AbortSignal.timeout(3_000),
      next: { revalidate: REVALIDATE },
    }),

  getBySlug: (slug: string) =>
    apiClient.get<ApiArticleDetail>(`/articles/${encodeURIComponent(slug)}`, {
      signal: AbortSignal.timeout(3_000),
      next: { revalidate: REVALIDATE },
    }),

  create: (form: FormData, token: string) => apiClient.post<ApiArticle>("/articles", form, { token }),
};
