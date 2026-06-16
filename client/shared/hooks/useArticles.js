"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_API_BASE_URL;

export default function useArticles({ articles }) {
  const [blog, setBlog] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const sorted = [...(articles || [])].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    setBlog(sorted);
  }, [articles]);


  useEffect(() => {
    const fetchData = async () => {
      try {


        const response = await axios.get(
          `${NEXT_PUBLIC_API_BASE_URL}/category`
        );

        setCategories(response.data);
      } catch (error) {
        console.error("Category fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return { blog, categories };
}