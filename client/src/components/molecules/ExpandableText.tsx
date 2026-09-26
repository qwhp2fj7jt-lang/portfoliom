"use client";

import { useId, useState } from "react";

interface ExpandableTextProps {
  text: string;
  limit?: number;
}

export function ExpandableText({ text, limit = 150 }: ExpandableTextProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const long = text.length > limit;
  const shown = long && !open ? `${text.slice(0, limit).trim()}…` : text;

  return (
    <>
      <p id={id} className="flex-1 text-[15px] leading-6 text-neutral-200">
        {shown}
      </p>
      {long && (
        <button
          type="button"
          className="min-h-6 cursor-pointer self-start text-sm text-accent-300 hover:text-accent-100"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Daha az göster" : "Devamını gör"}
        </button>
      )}
    </>
  );
}
