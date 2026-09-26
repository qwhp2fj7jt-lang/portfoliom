import type { ReactNode } from "react";
import { SkipLink } from "@/components/atoms/SkipLink";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export function SiteTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink targetId="main" />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
