import Section from "@/features/section";
import { postArticles } from "@/shared/services/postArticles";
export default async function HomeRoute() {
  const posts = await postArticles.articlesGet();
  return <Section articles={posts} />;
}
