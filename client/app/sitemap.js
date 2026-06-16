export default async function sitemap() {
  const baseUrl = "https://www.zeynepbas.dev";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles`,
    { cache: "force-cache" }
  );

  const articles = await res.json();

  const blogUrls =
    articles?.map((item) => ({
      url: `${baseUrl}/blog/${item.article.slug}`,
      lastModified: new Date(
        item.article.updatedAt || item.article.createdAt
      ),
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