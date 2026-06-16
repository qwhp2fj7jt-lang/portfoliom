
import { postArticles } from "@/shared/services/postArticles";
import {CardList} from "@/widgets" 
export default async function BlogDetail({ params }) {

 const article = await postArticles.articlesGetSlug({slug:params.slug})
 
  return <CardList article={article}/>
}