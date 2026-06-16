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
      label: "Eskiden Yeniye",
    },
    {
      _id: 2,
      name: "desc",
      label: "Yeniden Eskiye",
    },
  ];

  const [sort, setSort] = useState("desc");
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
      <h2 className="text-3xl font-bold mb-10">Blog</h2>

      <div className="flex justify-between">
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

      <List blog={sortedData} />
    </>
  );
}
