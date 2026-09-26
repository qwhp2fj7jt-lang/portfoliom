import { ArrowLeftIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { formatDate } from "@/lib/format";
import { Avatar, Heading, Tag } from "@/components/atoms";
import type { Post } from "../../types";

export function ArticleHeader({ post }: { post: Post }) {
  return (
    <header>
      <Link href="/blog" className="mb-8 inline-flex items-center gap-1.5 text-sm">
        <ArrowLeftIcon size={16} aria-hidden />
        Tüm yazılar
      </Link>
      <div className="flex flex-col gap-[18px]">
        {post.tags && (
          <ul role="list" aria-label="Etiketler" className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        )}
        <Heading as="h1" size="lg">
          {post.title}
        </Heading>
        <p className="text-lg leading-[30px] text-neutral-300">{post.lead ?? post.excerpt}</p>
        <p className="flex flex-wrap items-center gap-3 text-[13px] text-neutral-400">
          <Avatar src={images.profile.src} alt="" size={32} eager />
          <span className="text-foreground">{site.name}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} okuma</span>
        </p>
      </div>
    </header>
  );
}
