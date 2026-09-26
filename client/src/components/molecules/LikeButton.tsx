"use client";

import { HeartIcon } from "@phosphor-icons/react/ssr";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/atoms/Button";

interface LikeButtonProps {
  initialCount: number;
  initialLiked?: boolean;
  label: string;
  onToggle?: () => Promise<{ liked: boolean; count: number }>;
}

export function LikeButton({ initialCount, initialLiked = false, label, onToggle }: LikeButtonProps) {
  const [state, setState] = useState({ liked: initialLiked, count: initialCount });
  const [pending, setPending] = useState(false);
  const stateRef = useRef(state);
  const pendingRef = useRef(false);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const toggle = useCallback(async () => {
    if (pendingRef.current) return;
    const previous = stateRef.current;
    setState({ liked: !previous.liked, count: previous.count + (previous.liked ? -1 : 1) });
    if (!onToggle) return;
    pendingRef.current = true;
    setPending(true);
    try {
      setState(await onToggle());
    } catch {
      setState(previous);
    } finally {
      pendingRef.current = false;
      setPending(false);
    }
  }, [onToggle]);

  return (
    <Button
      variant="ghost"
      aria-pressed={state.liked}
      aria-label={`${label}, ${state.count} beğeni`}
      aria-busy={pending || undefined}
      onClick={toggle}
    >
      <HeartIcon size={16} weight={state.liked ? "fill" : "regular"} className="text-accent" aria-hidden />
      <span className="text-foreground tabular-nums">{state.count}</span>
    </Button>
  );
}
