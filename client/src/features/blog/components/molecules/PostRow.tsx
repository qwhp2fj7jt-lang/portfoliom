import { memo } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import { Tag } from "@/components/atoms/Tag";
import type { Post } from "../../types";

interface PostRowProps {
  post: Post;
  headingLevel?: "h2" | "h3";
  showReadingTime?: boolean;
}

export const PostRow = memo(function PostRow({ post, headingLevel: H = "h3", showReadingTime }: PostRowProps) {
  return (
    <article className="group rule-top relative flex flex-wrap items-baseline gap-x-8 gap-y-2 py-6 has-[a:focus-visible]:rounded-sm has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent">
      <time dateTime={post.date} className="flex-[0_0_110px] text-[13px] text-neutral-400 tabular-nums">
        {formatDate(post.date)}
      </time>
      <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-2">
        <H className="text-xl leading-7 tracking-[-0.01em]">
          <Link href={`/blog/${post.slug}`} className="stretched-link group-hover:text-accent-300">
            {post.title}
          </Link>
        </H>
        <p className="max-w-[64ch] text-[15px] leading-6 text-neutral-300">{post.excerpt}</p>
        {showReadingTime && <p className="text-[13px] text-neutral-400">{post.readingTime} okuma</p>}
      </div>
      <Tag>{post.category}</Tag>
    </article>
  );
});
