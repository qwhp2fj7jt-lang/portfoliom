"use client";

import { useState, useMemo } from "react";
import useArticles from "@/shared/hooks/useArticles";
import { BlogSubSelect } from "@/atoms";
import { List } from "@/molecules";
export default function Papers({ articles }) {
  const { blog, categories } = useArticles({ articles });
  const filtrele = [
    {
      _id: 1,
      name: "asc",
      label: "Yeniden Eskiye",
    },
    {
      _id: 2,
      name: "desc",
      label: "Eskiden Yeniye",

    },
  ];

  const [sort, setSort] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredData = useMemo(() => {
    if (!selectedCategory) return blog;

    return blog.filter((item) => {
      return item.category === selectedCategory;
    });
  }, [blog, selectedCategory]);

  const sortedData = useMemo(() => {
    const data = [...filteredData];

    if (sort === "asc") {
      return data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (sort === "desc") {
      return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return data;
  }, [filteredData, sort]);

  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Blog</h2>

      <div className="flex justify-between gap-2">
        <BlogSubSelect
          title="Kategori"
          filtrele={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />

        <BlogSubSelect
          title="Sırala"
          filtrele={filtrele}
          value={sort}
          onChange={setSort}
        />
      </div>
<br/>
      <List blog={sortedData} />
    </>
  );
}
