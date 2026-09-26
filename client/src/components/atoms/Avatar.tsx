import Image from "next/image";
import { cn } from "@/lib/cn";

const sizeClass = { 28: "size-7", 32: "size-8", 56: "size-14" } as const;

interface AvatarProps {
  src: string;
  alt: string;
  size?: keyof typeof sizeClass;
  bordered?: boolean;
  eager?: boolean;
  className?: string;
}

export function Avatar({ src, alt, size = 32, bordered, eager, className }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      sizes={`${size}px`}
      loading={eager ? "eager" : "lazy"}
      className={cn(
        "shrink-0 rounded-full bg-neutral-800 object-cover",
        sizeClass[size],
        bordered && "border border-accent-700",
        className,
      )}
    />
  );
}
