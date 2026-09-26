import { memo } from "react";
import { InitialAvatar } from "@/components/atoms/InitialAvatar";
import type { ZoneComment } from "../../types";

export const CommentItem = memo(function CommentItem({ comment }: { comment: ZoneComment }) {
  return (
    <article className="flex gap-2.5">
      <InitialAvatar name={comment.name} />
      <div className="flex min-w-0 flex-col gap-0.5">
        <p className="flex items-baseline gap-2 text-[13px]">
          <span className="font-medium text-foreground">{comment.name}</span>
          <span className="text-neutral-400">{comment.when}</span>
        </p>
        <p className="text-sm leading-[22px] [overflow-wrap:anywhere] text-neutral-200">{comment.text}</p>
      </div>
    </article>
  );
});
