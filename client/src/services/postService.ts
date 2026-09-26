import { apiClient } from "./apiClient";
import type { ApiComment, ApiLikeResponse, ApiPost } from "./types";

export const postService = {
  getAll: () => apiClient.get<ApiPost[]>("/posts", { cache: "no-store" }),

  like: (postId: string, nickname: string) =>
    apiClient.post<ApiLikeResponse>(`/posts/like/${encodeURIComponent(postId)}`, { nickname }),

  addComment: (postId: string, comment: { nickname: string; text: string }) =>
    apiClient.post<ApiComment[]>(`/posts/comment/${encodeURIComponent(postId)}`, comment),

  create: (form: FormData, token: string) => apiClient.post<ApiPost>("/posts", form, { token }),
};
