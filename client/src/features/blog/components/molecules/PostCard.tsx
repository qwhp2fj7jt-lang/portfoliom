import { memo } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Post } from "../../types";

export const PostCard = memo(function PostCard({ post }: { post: Post }) {
  return (
    <article className="relative flex h-full flex-col gap-3 rounded-md bg-surface p-[16.8px] hover:shadow-edge has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-accent">
      <p className="text-[10px] tracking-widest text-accent uppercase">{post.category}</p>
      <h2 className="text-[17px] leading-[1.2]">
        <Link href={`/blog/${post.slug}`} className="stretched-link">
          {post.title}
        </Link>
      </h2>
      <p className="flex-1 text-[13px] opacity-85">{post.excerpt}</p>
      <p className="flex items-center gap-1.5 text-[11px] text-foreground/60">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime} okuma</span>
      </p>
    </article>
  );
});
