
"use client"
import { CardZone } from "@/components/widgets";
export default function Zone({ product }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-5">

      <CardZone posts={product} />
    </div>
  );
}
