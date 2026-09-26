"use client";

import { LinkIcon } from "@phosphor-icons/react/ssr";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copy = useCallback(async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      const field = document.createElement("textarea");
      field.value = url;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      setCopied(document.execCommand("copy"));
      field.remove();
    }
  }, []);

  return (
    <>
      <Button variant="ghost" onClick={copy}>
        <LinkIcon size={16} aria-hidden />
        {copied ? "Kopyalandı" : "Bağlantıyı kopyala"}
      </Button>

      <span role="status" className="sr-only">
        {copied ? "Bağlantı panoya kopyalandı" : ""}
      </span>
    </>
  );
}
