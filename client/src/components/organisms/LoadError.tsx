"use client";

import { Button } from "@/components/atoms/Button";
import { PageTemplate } from "@/components/templates/PageTemplate";

export function LoadError({ eyebrow, reset }: { eyebrow: string; reset: () => void }) {
  return (
    <PageTemplate eyebrow={eyebrow} title="İçerik yüklenemedi" lead="Sunucuya şu an ulaşılamıyor. Birkaç saniye sonra tekrar dene.">
      <Button onClick={reset}>Tekrar dene</Button>
    </PageTemplate>
  );
}
