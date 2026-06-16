import { NEXT_PUBLIC_API_BASE_URL } from "@/shared/contants/api";

if (!NEXT_PUBLIC_API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

const request = async (url, options = {}) => {
  const res = await fetch(`${NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    let errorMessage = "API error";

    try {
      const errorData = await res.json();
      errorMessage = errorData?.message || errorMessage;
    } catch (e) {}

    throw new Error(errorMessage);
  }

  return res.json();
};

export const postService = {
  postGet: async () => {
    return request("/posts", {
      method: "GET",
      next: { revalidate: 60 }
    });
  },

  postLike: async ({ postId, nickname }) => {
    return request(`/posts/like/${postId}`, {
      method: "POST",
      next: "no-store",
      body: JSON.stringify({ nickname }),
    });
  },

  postComment: async ({ postId, nickname, text }) => {
    return request(`/posts/comment/${postId}`, {
      method: "POST",
      next: { revalidate: 0 },
      body: JSON.stringify({ nickname, text }),
    });
  },
};