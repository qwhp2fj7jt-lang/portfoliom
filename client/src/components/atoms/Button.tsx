import Link from "next/link";
import type { AnchorHTMLAttributes, ComponentPropsWithRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: Variant;
  iconOnly?: boolean;
  className?: string;
  children: ReactNode;
}

const base =
  "inline-flex min-h-8 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent " +
  "px-2.5 py-1.5 text-sm leading-tight font-medium text-foreground no-underline transition-colors " +
  "disabled:cursor-not-allowed disabled:opacity-45 [&_svg]:shrink-0";

const variants: Record<Variant, string> = {
  primary: "border-accent text-accent hover:bg-accent/12 hover:text-accent active:bg-accent/22",
  secondary: "border-divider hover:bg-foreground/7 hover:text-foreground active:bg-foreground/14",
  ghost: "px-1.5 text-accent hover:bg-accent/10 hover:text-accent active:bg-accent/18",
};

const classes = (variant: Variant, iconOnly?: boolean, className?: string) =>
  cn(base, variants[variant], iconOnly && "size-9 p-0", className);

export function Button({
  variant = "primary",
  iconOnly,
  className,
  type = "button",
  ...rest
}: BaseProps & ComponentPropsWithRef<"button">) {
  return <button type={type} className={classes(variant, iconOnly, className)} {...rest} />;
}

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export function ButtonLink({
  href,
  variant = "primary",
  iconOnly,
  className,
  ...rest
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const cls = classes(variant, iconOnly, className);
  if (isExternal(href)) {
    const isWeb = href.startsWith("http");
    return (
      <a
        href={href}
        target={isWeb ? "_blank" : undefined}
        rel={isWeb ? "noopener noreferrer" : undefined}
        className={cls}
        {...rest}
      />
    );
  }
  return <Link href={href} className={cls} {...rest} />;
}
