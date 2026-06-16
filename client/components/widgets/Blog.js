"use client";

import useArticles from "@/shared/hooks/useArticles";
import { CustomButton } from "@/atoms";
import { useRouter } from "next/navigation";
import { List } from "@/molecules";
export default function Blog({ articles }) {
  const { blog } = useArticles({ articles });
  const router = useRouter();
  return (
    <>
      <h2 className="text-3xl font-bold mb-10">Blog</h2>

      <List blog={blog} />

      <CustomButton
        text="Tüm yazıları göster&nbsp;→"
        onClick={() => router.push(`/blog`)}
      />

      <br />
      <br />
    </>
  );
}
