import { LightbulbIcon } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside
      aria-label="Not"
      className="flex gap-3 rounded-md bg-accent-900/70 px-[18px] py-4 text-[15.5px] leading-[26px] text-accent-200"
    >
      <LightbulbIcon size={20} className="mt-[3px] shrink-0 text-accent" aria-hidden />
      <p>{children}</p>
    </aside>
  );
}
