import { API_BASE_URL } from "@/shared/contants/api";
export const postService = {
  postGet: async () => {
    const res = await fetch(`${API_BASE_URL}/posts`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
  
    if (!res.ok) throw new Error("API error");
  
    return res.json();
  },
  postLike: async ({ postId, nickname }) => {
    const res = await fetch(`${API_BASE_URL}/posts/like/${postId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname }),
    });

    if (!res.ok) throw new Error("API error");

    return res.json();
  },

  postComment: async ({ postId, nickname, text }) => {
    const res = await fetch(`${API_BASE_URL}/posts/comment/${postId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname, text }),
    });

    if (!res.ok) throw new Error("API error");

    return res.json();
  },
};