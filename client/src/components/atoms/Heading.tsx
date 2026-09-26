import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Level = "h1" | "h2" | "h3" | "h4";
type Size = "display" | "xl" | "lg" | "md" | "sm" | "xs";

const sizes: Record<Size, string> = {
  display: "-ml-[0.04em] max-w-[16ch] text-[clamp(38px,6vw,80px)] leading-[1.1]",
  xl: "text-[clamp(34px,5vw,56px)] leading-[1.1]",
  lg: "text-[clamp(32px,5vw,52px)] leading-[1.12]",
  md: "text-[clamp(26px,3vw,32px)] leading-[1.2] tracking-[-0.012em]",
  sm: "text-[clamp(22px,2.6vw,28px)] leading-[1.25] tracking-[-0.01em]",
  xs: "text-2xl leading-[1.2]",
};

interface HeadingProps {
  as: Level;
  size?: Size;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Heading({ as: Tag, size = "md", id, className, children }: HeadingProps) {
  return (
    <Tag id={id} className={cn("tracking-[-0.015em]", sizes[size], className)}>
      {children}
    </Tag>
  );
}
