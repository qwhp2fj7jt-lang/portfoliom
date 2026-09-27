import { apiClient } from "./apiClient";
import type { ApiComment, ApiLikeResponse, ApiPost } from "./types";

export const POSTS_TAG = "posts";

export const postService = {
  getAll: () =>
    apiClient.get<ApiPost[]>("/posts", {
      next: { revalidate: 60, tags: [POSTS_TAG] },
    }),

  like: (postId: string, nickname: string) =>
    apiClient.post<ApiLikeResponse>(`/posts/like/${encodeURIComponent(postId)}`, { nickname }),

  addComment: (postId: string, comment: { nickname: string; text: string }) =>
    apiClient.post<ApiComment[]>(`/posts/comment/${encodeURIComponent(postId)}`, comment),

  create: (form: FormData, token: string) => apiClient.post<ApiPost>("/posts", form, { token }),
};
