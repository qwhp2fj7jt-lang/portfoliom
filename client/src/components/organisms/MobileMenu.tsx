"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react/ssr";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NavItem } from "@/config/site";
import { Button, ButtonLink } from "@/components/atoms/Button";
import { NavLinks } from "@/components/molecules/NavLinks";
import { SearchButton } from "@/components/molecules/SearchButton";

interface MobileMenuProps {
  items: NavItem[];
  email: string;
}

const DESKTOP_QUERY = "(min-width: 47.5rem)";

export function MobileMenu({ items, email }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onDesktop = (e: MediaQueryListEvent) => e.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="flex items-center gap-1 nav:hidden">
      <SearchButton onActivate={close} />
      <Button
        ref={toggleRef}
        variant="ghost"
        iconOnly
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        onClick={toggle}
      >
        {open ? <XIcon size={20} aria-hidden /> : <ListIcon size={20} aria-hidden />}
      </Button>
      <nav
        id="mobile-menu"
        aria-label="Mobil menü"
        hidden={!open}
        className="absolute inset-x-0 top-full flex max-h-[calc(100dvh-var(--spacing-header))] flex-col overflow-y-auto overscroll-contain bg-surface px-gutter pt-2 pb-5 shadow-raised [&[hidden]]:hidden"
      >
        <NavLinks items={items} layout="stack" onNavigate={close} />
        <ButtonLink href={`mailto:${email}`} className="mt-4" onClick={close}>
          İletişim
        </ButtonLink>
      </nav>
    </div>
  );
}
