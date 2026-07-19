"use client";

import { useState, useMemo } from "react";
import useArticles from "@/shared/hooks/useArticles";
import { BlogSubSelect } from "@/atoms";
import { List } from "@/molecules";

export default function Papers({ articles }) {
  const { blog, categories } = useArticles({ articles });

  const sortOptions = [
    {

      slug: "sort",
      subCategories: [
        {
          _id: 1,
          name: "Eskiden Yeniye",
          slug: "eskiden yeniye",
          label: "Eskiden Yeniye",
        },
        {
          _id: 2,
          name: "Yeniden Eskiye",
          slug: "yeniden eskiye",
          label: "Yeniden Eskiye",
    
        },
      ],
    },
  ];

  const [sort, setSort] = useState("eskiden yeniye");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredData = useMemo(() => {
    if (!selectedCategory || selectedCategory === "Tümü") {
      return blog;
    }

    return blog.filter((item) => item.category === selectedCategory);
  }, [blog, selectedCategory]);

  const sortedData = useMemo(() => {
    const data = [...filteredData];

    if (sort === "eskiden yeniye") {
      return data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [filteredData, sort]);

  return (
    <>
          <h2 className="text-xl dark:text-gray-300 md:text-2xl font-semibold mb-5  flex items-center">
Blog</h2>

      <div className="flex justify-between gap-2">
        <BlogSubSelect
          title="Kategori"
          filtrele={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />


        <BlogSubSelect
          title="Sırala"
          filtrele={sortOptions}
          value={sort}
          onChange={setSort}
        />
      </div>
      <br />
      <List blog={sortedData} />
    </>
  );
}
