"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/config/site";
import { cn } from "@/lib/cn";

interface NavLinksProps {
  items: NavItem[];
  layout?: "row" | "stack";
  onNavigate?: () => void;
}

export function NavLinks({ items, layout = "row", onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const stack = layout === "stack";

  return (
    <ul role="list" className={cn("flex", stack ? "flex-col" : "items-center gap-3")}>
      {items.map((item) => {
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "text-foreground hover:text-accent aria-[current=page]:text-accent",
                stack ? "rule-bottom block py-3.5 text-[17px]" : "text-sm",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
