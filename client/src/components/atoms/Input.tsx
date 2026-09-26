import type { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/cn";

export function Input({ className, ...rest }: ComponentPropsWithRef<"input">) {
  return (
    <input
      className={cn(
        "min-h-9 w-full rounded-md border border-divider bg-surface px-2.5 py-1.5 text-sm text-foreground caret-accent",
        "placeholder:text-neutral-400 hover:border-foreground/45 focus-visible:border-accent focus-visible:outline-offset-0",
        className,
      )}
      {...rest}
    />
  );
}
