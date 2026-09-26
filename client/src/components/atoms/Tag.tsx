import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "accent" | "outline" | "outline-muted" | "outline-light";

const tones: Record<Tone, string> = {
  accent: "bg-accent-800 text-accent-100",
  outline: "border border-accent text-accent",
  "outline-muted": "border border-accent text-neutral-200",
  "outline-light": "border border-foreground/30 text-foreground",
};

interface TagProps {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

export function Tag({ tone = "accent", className, children }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[6px] px-2.5 py-[3px] text-[11px] tracking-[0.02em] whitespace-nowrap",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
