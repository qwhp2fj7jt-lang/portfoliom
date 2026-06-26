import { NEXT_PUBLIC_API_BASE_URL } from "@/shared/contants/api";


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
    } catch {
      errorMessage = "Unknown API error";
    }

    throw new Error(errorMessage);
  }

  return res.json();
};

export const postArticles = {
  articlesGet: ({ category, sort } = {}) => {
    const params = new URLSearchParams();
  
    if (category) params.append("category", category);
    if (sort) params.append("sort", sort);
  
    return request(`/articles?${params.toString()}`, {
      method: "GET",
     cache: "no-store"
    });
  },
  articlesGetSlug: ({ slug }) => {
    return request(`/articles/${slug}`, {
      method: "GET",
      next: { revalidate: 60 },
    });
  }
};
