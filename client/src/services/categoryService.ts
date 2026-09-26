import { apiClient } from "./apiClient";
import type { ApiCategory } from "./types";

export const categoryService = {
  getAll: () =>
    apiClient.get<ApiCategory[]>("/category", { signal: AbortSignal.timeout(3_000), next: { revalidate: 60 } }),

  create: (
    category: Pick<ApiCategory, "title" | "slug"> & { subCategories?: Omit<ApiCategory["subCategories"][number], "_id">[] },
    token: string,
  ) => apiClient.post<ApiCategory>("/category", category, { token }),
};
