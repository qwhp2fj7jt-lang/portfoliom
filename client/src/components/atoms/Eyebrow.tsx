import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  tone?: "accent" | "section";
  className?: string;
  children: ReactNode;
}

export function Eyebrow({ tone = "accent", className, children }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[13px] tracking-[0.06em] uppercase",
        tone === "accent" ? "text-accent" : "text-foreground/72",
        className,
      )}
    >
      {children}
    </p>
  );
}
