import { formatRelative } from "@/lib/format";
import type { ApiComment } from "@/services";
import type { ZoneComment } from "../types";

export function toZoneComment(comment: ApiComment): ZoneComment {
  return { name: comment.nickname, when: formatRelative(comment.createdAt), text: comment.text };
}
