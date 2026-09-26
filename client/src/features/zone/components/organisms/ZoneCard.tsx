import { MapPinIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { Avatar } from "@/components/atoms/Avatar";
import { ExpandableText } from "@/components/molecules/ExpandableText";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { isApiAsset } from "@/services";
import type { ZonePost } from "../../types";
import { ZoneInteractions } from "./ZoneInteractions";

interface ZoneCardProps {
  post: ZonePost;
  eager?: boolean;
}

export function ZoneCard({ post, eager }: ZoneCardProps) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(post.place)}`;

  return (
    <article aria-label={`${post.place} paylaşımı`} className="flex flex-col overflow-hidden rounded-lg bg-surface shadow-edge">
      <div className="lighten relative aspect-4/3 bg-neutral-900">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          unoptimized={/^https?:/i.test(post.image.src) && !isApiAsset(post.image.src)}
          sizes="(max-width: 759px) calc(100vw - 40px), (max-width: 1120px) calc(50vw - 60px), 490px"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "low"}
          placeholder={post.image.blurDataURL ? "blur" : "empty"}
          blurDataURL={post.image.blurDataURL}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-[18px]">
        <div className="flex items-center gap-2.5">
          <Avatar src={images.avatar.src} alt="" size={32} />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium">{site.name}</span>
            <a href={mapUrl} rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs">
              <MapPinIcon size={14} aria-hidden />
              {post.place}
              <span className="sr-only"> (Google Haritalar)</span>
            </a>
          </div>
        </div>
        <ExpandableText text={post.text} />
        <ZoneInteractions postId={post.id} remote={post.remote} likes={post.likes} likedBy={post.likedBy} comments={post.comments} />
      </div>
    </article>
  );
}
