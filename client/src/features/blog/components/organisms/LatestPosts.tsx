import { SectionHeader } from "@/components/molecules";
import { getLatestPosts } from "../../api/posts";
import { PostRow } from "../molecules/PostRow";

export async function LatestPosts({ count = 3 }: { count?: number }) {
  const posts = await getLatestPosts(count);
  return (
    <section aria-labelledby="latest-title" className="pt-7 pb-[70px]">
      <SectionHeader
        eyebrow="Blog"
        title="Son yazılar"
        id="latest-title"
        link={{ href: "/blog", label: "Tüm yazıları göster" }}
      />
      <ul role="list">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostRow post={post} headingLevel="h3" />
          </li>
        ))}
      </ul>
    </section>
  );
}
