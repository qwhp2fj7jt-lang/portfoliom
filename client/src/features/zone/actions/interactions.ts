"use server";

import { updateTag } from "next/cache";
import { ApiError, POSTS_TAG, postService, type ApiComment, type ApiLikeResponse } from "@/services";

type ActionResult<T> = { ok: true; data: T } | { ok: false; message: string };

const failure = (error: unknown): { ok: false; message: string } => ({
  ok: false,
  message: error instanceof ApiError ? error.message : "Sunucuya ulaşılamadı",
});

// Yorum ve beğeniler sunucu tarafından API'ye iletilir; tarayıcı CORS/CSP'ye takılmaz.
export async function addZoneComment(
  postId: string,
  comment: { nickname: string; text: string },
): Promise<ActionResult<ApiComment[]>> {
  try {
    const data = await postService.addComment(postId, comment);
    updateTag(POSTS_TAG);
    return { ok: true, data };
  } catch (error) {
    return failure(error);
  }
}

export async function toggleZoneLike(postId: string, nickname: string): Promise<ActionResult<ApiLikeResponse>> {
  try {
    const data = await postService.like(postId, nickname);
    updateTag(POSTS_TAG);
    return { ok: true, data };
  } catch (error) {
    return failure(error);
  }
}
