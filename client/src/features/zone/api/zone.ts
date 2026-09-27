import { unstable_rethrow } from "next/navigation";
import { postService, resolveAssetUrl, type ApiPost } from "@/services";
import { toZoneComment } from "../lib/comments";
import type { ZonePost } from "../types";

function toZonePost(post: ApiPost): ZonePost {
  const place = post.konum ?? "";
  return {
    id: post._id,
    image: { src: resolveAssetUrl(post.image), alt: place ? `${place} paylaşımı` : "Paylaşım görseli" },
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
    return [];
  }
}
