import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ArrowLinkProps {
  href: string;
  direction?: "forward" | "back";
  className?: string;
  children: ReactNode;
}

export function ArrowLink({ href, direction = "forward", className, children }: ArrowLinkProps) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-1.5 text-[15px]", className)}>
      {direction === "back" && <span aria-hidden="true">←</span>}
      {children}
      {direction === "forward" && <span aria-hidden="true">→</span>}
    </Link>
  );
}
