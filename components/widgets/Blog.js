"use client";

import { useRouter } from "next/navigation";
import Button from "./Button"

import { useTranslations } from "next-intl";
export default function Blog({locale}) {
  const router = useRouter();
  const t = useTranslations("Blog");
  const blogPosts = [
    {
      id: "01",
      title: "React 18 ile Gelen Yenilikler",
      date: "10 Aralık 2025",
      description: "Concurrent Mode ve yeni Hooks ile performansı artırın.",
    },
    {
      id: "02",
      title: "Tailwind CSS ile Modern Tasarımlar",
      date: "03 Aralık 2025",
      description: "Sıfırdan responsive ve şık UI bileşenleri oluşturun.",
    },
    {
      id: "03",
      title: "Next.js 16 ile SEO Dostu Siteler",
      date: "25 Kasım 2025",
      description: "Static ve server-side rendering ile hızlı sayfalar geliştirin.",
    },
    {
      id: "04",
      title: "TypeScript ile Daha Güvenli Kod",
      date: "18 Kasım 2025",
      description: "Tip güvenliği sayesinde hataları erkenden yakalayın.",
    },
  ];

  return (
<div className="container mx-auto px-6 md:px-20 py-10 pointer-events-none opacity-60 cursor-not-allowed">
  <h2 className="text-3xl font-bold mb-10 dark:text-white text-gray-800">Blog</h2>

  <div className="space-y-8">
    {blogPosts.map((item) => (
      <div
        key={item.id}
        className="flex flex-col md:flex-row items-start gap-6 group hover:bg-gray-50 p-4 rounded-lg transition"
      >
        <span className="text-gray-400 text-xl w-10">{item.id}</span>
        <div>
          <h3 className="text-lg font-medium group-hover:underline cursor-pointer">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm mb-1">{item.date}</p>
          <p className="text-gray-700 text-sm">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
  <Button text={t("buttonBlog")}  onClick={() => router.push(`/${locale}/blog`)}/>


</div>


  );
}
