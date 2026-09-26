"use client";

import { useEffect, useRef } from "react";
import { consumeSearchFocus, SEARCH_FOCUS_EVENT } from "@/lib/search-intent";

export function useSearchFocus() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focus = () => {
      consumeSearchFocus();
      ref.current?.focus();
    };
    if (consumeSearchFocus()) focus();
    window.addEventListener(SEARCH_FOCUS_EVENT, focus);
    return () => window.removeEventListener(SEARCH_FOCUS_EVENT, focus);
  }, []);

  return ref;
}
