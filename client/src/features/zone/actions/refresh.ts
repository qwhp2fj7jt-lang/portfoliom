"use server";

import { updateTag } from "next/cache";
import { POSTS_TAG } from "@/services";

export async function refreshZonePosts() {
  updateTag(POSTS_TAG);
}
