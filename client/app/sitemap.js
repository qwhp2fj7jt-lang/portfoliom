export default async function sitemap() {
  const baseUrl = "https://portfoliom-4p84.onrender.com";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles`,
    { cache: "no-store" }
  );

  const articles = await res.json();

  const blogUrls =
    articles?.map((article) => ({
      url: `${baseUrl}/blog/${article.article.slug}`,
      lastModified: new Date(article.article.updatedAt || article.article.createdAt),
    })) || [];

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/zone`,
      lastModified: new Date(),
    },


    ...blogUrls,
  ];
}