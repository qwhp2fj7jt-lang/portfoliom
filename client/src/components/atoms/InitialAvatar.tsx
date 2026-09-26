import { cn } from "@/lib/cn";

export function InitialAvatar({ name, className }: { name: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-900 text-xs font-medium text-accent-200",
        className,
      )}
    >
      {name.charAt(0).toLocaleUpperCase("tr-TR")}
    </span>
  );
}
