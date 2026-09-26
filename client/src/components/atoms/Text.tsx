import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "lead" | "body" | "article" | "small";

const variants: Record<Variant, string> = {
  lead: "max-w-[60ch] text-[17px] leading-7 text-neutral-300",
  body: "max-w-[62ch] text-[17px] leading-[30px] text-neutral-200",
  article: "text-[17px] leading-[30px] text-neutral-200",
  small: "max-w-[58ch] text-[15.5px] leading-7 text-neutral-300",
};

interface TextProps {
  as?: "p" | "span";
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function Text({ as: Tag = "p", variant = "body", className, children }: TextProps) {
  return <Tag className={cn(variants[variant], className)}>{children}</Tag>;
}
