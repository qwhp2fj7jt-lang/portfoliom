import { postArticles } from "@/shared/services/postArticles";
import { CardList } from "@/widgets";

async function getArticle(slug) {
  return await postArticles.articlesGetSlug({ slug });
}

export async function generateMetadata({ params }) {
  const baseUrl = "https://www.zeynepbas.dev";

  const data = await getArticle(params.slug);
const article=data?.article
  if (!article) {
    return {
      title: "Blog Yazısı Bulunamadı",
      description: "Aradığınız içerik mevcut değil.",
    };
  }

  const title = article?.title
  ? `${article.title} | Zeynep Baş`
  : "Blog | Zeynep Baş";

  const description =
    article.description?.slice(0, 160) ||
    article.content?.slice(0, 160) ||
    "Zeynep Baş blog yazısı";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/blog/${params.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/blog/${params.slug}`,
      siteName: "Zeynep Baş",
      type: "article",
      images: [
        {
          url: article.image
            ? `${baseUrl}${article.image}`
            : `/images/avatar.png`,
          width: 1200,
          height: 630,
          alt: "makale yazısı",
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogDetail({ params }) {
  const article = await getArticle(params.slug);

  if (!article) {
    return <div>Blog yazısı bulunamadı</div>;
  }

  return <CardList article={article} />;
}
