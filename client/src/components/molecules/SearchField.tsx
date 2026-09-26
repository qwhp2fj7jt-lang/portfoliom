import { MagnifyingGlassIcon } from "@phosphor-icons/react/ssr";
import type { ComponentPropsWithRef } from "react";
import { Input } from "@/components/atoms/Input";
import { cn } from "@/lib/cn";

type SearchFieldProps = Omit<ComponentPropsWithRef<"input">, "type"> & {
  label: string;
};

export function SearchField({ label, id, className, ...rest }: SearchFieldProps) {
  return (
    <div role="search" className={cn("relative max-w-[560px]", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <MagnifyingGlassIcon
        size={18}
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-neutral-400"
      />
      <Input id={id} type="search" autoComplete="off" className="pl-[42px]" {...rest} />
    </div>
  );
}
