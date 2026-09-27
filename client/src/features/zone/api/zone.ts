import { unstable_rethrow } from "next/navigation";
import { keepCachedOr, postService, resolveAssetUrl, type ApiPost } from "@/services";
import { toZoneComment } from "../lib/comments";
import type { ZonePost } from "../types";

// Sunucudaki yüklemelerin (~2.4 MB PNG) sitede sıkıştırılmış JPG kopyaları var; varsa onlar kullanılır.
const LOCAL_COPIES = new Set(["camp", "flowers", "library", "travels"]);

function imageSrc(path: string) {
  const name = path.match(/\/uploads\/([\w-]+)\.png$/)?.[1];
  return name && LOCAL_COPIES.has(name) ? `/assets/images/zone/${name}.jpg` : resolveAssetUrl(path);
}

function toZonePost(post: ApiPost): ZonePost {
  const place = post.konum ?? "";
  return {
    id: post._id,
    image: { src: imageSrc(post.image), alt: place ? `${place} paylaşımı` : "Paylaşım görseli" },
    place,
    likes: post.likes.length,
    likedBy: post.likes,
    comments: post.comments.map(toZoneComment),
    text: post.description ?? "",
  };
}

export async function getZonePosts(): Promise<ZonePost[]> {
  try {
    return (await postService.getAll()).map(toZonePost);
  } catch (error) {
    unstable_rethrow(error);
    return keepCachedOr([], error);
  }
}
