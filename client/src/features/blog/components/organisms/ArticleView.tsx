import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import type { Post } from "../../types";
import { Callout } from "../molecules/Callout";
import { ArticleBody } from "./ArticleBody";
import { ArticleFooter } from "./ArticleFooter";
import { ArticleHeader } from "./ArticleHeader";

export function ArticleView({ post }: { post: Post }) {
  return (
    <ArticleTemplate header={<ArticleHeader post={post} />} footer={<ArticleFooter />}>
      {post.content ? (
        <ArticleBody blocks={post.content} />
      ) : (
        <div className="mt-10">
          <Callout>Bu yazının içeriği bulunamadı.</Callout>
        </div>
      )}
    </ArticleTemplate>
  );
}
