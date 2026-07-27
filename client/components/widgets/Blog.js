"use client";

import useArticles from "@/shared/hooks/useArticles";
import { CustomButton } from "@/atoms";
import { useRouter } from "next/navigation";
import { List } from "@/molecules";
export default function Blog({ articles }) {
  const { blog } = useArticles({ articles });
  const router = useRouter();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
         <h2 className="text-xl dark:text-gray-300 md:text-2xl text-gray-700 mb-5 text-left">Blog</h2>

      <List blog={blog} />

      <CustomButton
        text="Tüm yazıları göster&nbsp;→"
        onClick={() => router.push(`/blog`)}
      />

      <br />
      <br />
    </div>
  );
}
