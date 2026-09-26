"use client";

import { useCallback, useDeferredValue, useMemo, useState, type ChangeEvent } from "react";
import { SearchField } from "@/components/molecules/SearchField";
import { ALL_CATEGORIES } from "../../constants";
import { useSearchFocus } from "../../hooks/useSearchFocus";
import { categoriesOf, filterPosts, type CategoryFilterValue } from "../../lib/filter-posts";
import type { Post, PostCategory } from "../../types";
import { CategoryFilter } from "../molecules/CategoryFilter";
import { NoResults } from "../molecules/NoResults";
import { PostCard } from "../molecules/PostCard";
import { PostRow } from "../molecules/PostRow";
import { SortToggle } from "../molecules/SortToggle";

interface BlogExplorerProps {
  posts: Post[];
  /** /category API'sinden gelen kategori başlıkları; verilmezse yazılardan türetilir. */
  categories?: PostCategory[];
  layout?: "list" | "grid";
}

export function BlogExplorer({ posts, categories: categoryList, layout = "list" }: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilterValue>(ALL_CATEGORIES);
  const [newestFirst, setNewestFirst] = useState(true);
  const searchRef = useSearchFocus();
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(
    () => (categoryList ? [ALL_CATEGORIES, ...categoryList] : categoriesOf(posts)),
    [categoryList, posts],
  );
  const visible = useMemo(
    () => filterPosts(posts, { query: deferredQuery, category, newestFirst }),
    [posts, deferredQuery, category, newestFirst],
  );

  const clear = useCallback(() => {
    setQuery("");
    setCategory(ALL_CATEGORIES);
    searchRef.current?.focus();
  }, [searchRef]);

  const changeQuery = useCallback((e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value), []);
  const toggleSort = useCallback(() => setNewestFirst((v) => !v), []);

  return (
    <>
      <SearchField
        ref={searchRef}
        id="blog-search"
        label="Yazılarda ara"
        placeholder="Yazılarda ara…"
        value={query}
        onChange={changeQuery}
        className="mb-4"
      />

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <CategoryFilter options={categories} value={category} onChange={setCategory} />
        <SortToggle newestFirst={newestFirst} onToggle={toggleSort} />
      </div>

      <p role="status" className="sr-only">
        {visible.length === 0 ? "Sonuç bulunamadı" : `${visible.length} yazı listeleniyor`}
      </p>

      {visible.length === 0 ? (
        <NoResults query={deferredQuery} onClear={clear} />
      ) : (
        <ul
          role="list"
          className={
            layout === "grid"
              ? "grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-4"
              : undefined
          }
        >
          {visible.map((post) => (
            <li key={post.slug}>
              {layout === "grid" ? (
                <PostCard post={post} />
              ) : (
                <PostRow post={post} headingLevel="h2" showReadingTime />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
