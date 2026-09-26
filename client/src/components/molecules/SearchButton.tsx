"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react/ssr";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@/components/atoms/Button";
import { requestSearchFocus } from "@/lib/search-intent";

export function SearchButton({ onActivate }: { onActivate?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  const activate = useCallback(() => {
    onActivate?.();
    requestSearchFocus();
    if (pathname !== "/blog") router.push("/blog");
  }, [onActivate, pathname, router]);

  return (
    <Button
      variant="ghost"
      iconOnly
      aria-label="Yazılarda ara"
      onClick={activate}
    >
      <MagnifyingGlassIcon size={18} aria-hidden />
    </Button>
  );
}
