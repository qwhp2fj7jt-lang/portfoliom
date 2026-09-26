import { unstable_rethrow } from "next/navigation";
import { postService, resolveAssetUrl, type ApiPost } from "@/services";
import { zonePosts as fallbackPosts } from "../data/zone";
import { toZoneComment } from "../lib/comments";
import type { ZonePost } from "../types";

const localBySlug = new Map(fallbackPosts.map((post) => [post.id, post]));

// API'ye ulaşılamazsa yerel paylaşımlar gösterilir; id'leri slug olduğu için yorumlar yine API'ye gider.
const offlinePosts: ZonePost[] = fallbackPosts.map((post) => ({ ...post, remote: true }));

function toZonePost(post: ApiPost): ZonePost {
  const interactions = {
    id: post._id,
    likes: post.likes.length,
    likedBy: post.likes,
    comments: post.comments.map(toZoneComment),
    remote: true,
  };

  // Seed'lenmiş paylaşımlarda yerel görsel (boyut + blur) kullanılır; beğeni ve yorumlar API'den gelir.
  const local = post.slug ? localBySlug.get(post.slug) : undefined;
  if (local) return { ...local, ...interactions };

  const place = post.konum ?? "";
  return {
    ...interactions,
    image: { src: resolveAssetUrl(post.image), alt: place ? `${place} paylaşımı` : "Paylaşım görseli" },
    place,
    text: post.description ?? "",
  };
}

export async function getZonePosts(): Promise<ZonePost[]> {
  try {
    const posts = await postService.getAll();
    return posts.length > 0 ? posts.map(toZonePost) : offlinePosts;
  } catch (error) {
    unstable_rethrow(error);
    return offlinePosts;
  }
}
