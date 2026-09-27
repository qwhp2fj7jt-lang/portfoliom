"use client";

import { LoadError } from "@/components/organisms/LoadError";

export default function Error({ reset }: { reset: () => void }) {
  return <LoadError eyebrow="Blog" reset={reset} />;
}
