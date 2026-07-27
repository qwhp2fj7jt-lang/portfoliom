
"use client"
import { CardZone } from "@/components/widgets";
export default function Zone({ product }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">

      <CardZone posts={product} />
    </div>
  );
}
