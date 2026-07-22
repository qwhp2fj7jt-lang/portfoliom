
"use client"
import { CardZone } from "@/components/widgets";
export default function Zone({ product }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 min-h-screen">

      <CardZone posts={product} />
    </div>
  );
}
