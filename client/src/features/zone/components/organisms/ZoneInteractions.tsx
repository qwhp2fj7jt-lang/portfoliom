"use client";

import { ChatCircleIcon } from "@phosphor-icons/react/ssr";
import { useCallback, useId, useMemo, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/atoms/Button";
import { LikeButton } from "@/components/molecules/LikeButton";
import { getVisitorNickname } from "@/lib/visitor";
import { postService } from "@/services";
import { refreshZonePosts } from "../../actions/refresh";
import { toZoneComment } from "../../lib/comments";
import type { ZoneComment } from "../../types";
import { CommentForm } from "../molecules/CommentForm";
import { CommentItem } from "../molecules/CommentItem";

interface ZoneInteractionsProps {
  postId: string;
  remote?: boolean;
  likes: number;
  likedBy?: string[];
  comments: ZoneComment[];
}

const noopSubscribe = () => () => {};
const NO_LIKES: string[] = [];

export function ZoneInteractions({ postId, remote, likes, likedBy = NO_LIKES, comments: seed }: ZoneInteractionsProps) {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState(seed);
  const [announce, setAnnounce] = useState("");
  const nickname = useSyncExternalStore(noopSubscribe, getVisitorNickname, () => undefined);
  const panelId = useId();

  const toggleLike = useMemo(
    () =>
      remote
        ? async () => {
            const res = await postService.like(postId, getVisitorNickname());
            void refreshZonePosts();
            return { liked: res.liked, count: res.likes };
          }
        : undefined,
    [postId, remote],
  );

  const initialLiked = useMemo(() => !!nickname && likedBy.includes(nickname), [nickname, likedBy]);
  const toggleComments = useCallback(() => setOpen((v) => !v), []);

  const addComment = useCallback(async (comment: ZoneComment) => {
    setComments((list) => [...list, comment]);
    if (!remote) {
      setAnnounce("Yorumun eklendi");
      return;
    }
    try {
      const saved = await postService.addComment(postId, { nickname: comment.name, text: comment.text });
      setComments(saved.map(toZoneComment));
      void refreshZonePosts();
      setAnnounce("Yorumun eklendi");
    } catch {
      setComments((list) => list.filter((c) => c !== comment));
      setAnnounce("Yorum gönderilemedi, lütfen tekrar dene");
    }
  }, [postId, remote]);

  return (
    <>
      <div className="-ml-2 flex items-center gap-1">
        <LikeButton
          key={nickname ?? "anon"}
          initialCount={likes}
          initialLiked={initialLiked}
          label="Paylaşımı beğen"
          onToggle={toggleLike}
        />
        <Button
          variant="ghost"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`Yorumlar, ${comments.length} yorum`}
          onClick={toggleComments}
        >
          <ChatCircleIcon size={16} weight={open ? "fill" : "regular"} aria-hidden />
          <span className="text-foreground tabular-nums">{comments.length}</span>
        </Button>
      </div>

      <div id={panelId} hidden={!open} className="rule-top flex flex-col gap-3.5 pt-3.5 [--rule-color:var(--color-neutral-700)]">
        {comments.length === 0 ? (
          <p className="text-sm text-neutral-400">Henüz yorum yok. İlk yorumu sen yaz.</p>
        ) : (
          <ul role="list" aria-label="Yorumlar" className="flex flex-col gap-3.5">
            {comments.map((c, i) => (
              <li key={`${c.name}-${i}`}>
                <CommentItem comment={c} />
              </li>
            ))}
          </ul>
        )}
        <CommentForm onSubmit={addComment} />
      </div>
      <p role="status" className="sr-only">
        {announce}
      </p>
    </>
  );
}
