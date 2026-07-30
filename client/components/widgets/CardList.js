"use client";
import Link from "next/link";
import { CornerUpLeft, Calendar, Link2, Eye, Menu } from "lucide-react";

import AdSenseAd from "@/components/AdSenseAd";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import dynamic from "next/dynamic";

export default function CardList({ article }) {
  const blog = article?.article;
  const imageUrl = blog?.image?.url;
  const [openPdf, setOpenPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [activeHeading, setActiveHeading] = useState("");
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url,
        });
      } catch (err) {
        console.log("Paylaşım iptal edildi.");
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };
  const PdfMakers = dynamic(() => import("@/widgets/PdfMakers"), {
    loading: () => <p className="text-center">PDF yükleniyor...</p>,
  });
  useEffect(() => {
    const headings = document.querySelectorAll("h2[id], h3[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="max-w-4xl lg:ml-[26%] pr-3 lg:mx-auto ml-[5%]">
      <div className="max-w-2xl mx-auto pt-10">
        <Link
          href="/blog"
          className="inline-flex 
        items-center gap-2 
        
        bg-gray-50
        dark:bg-zinc-900
        p-2
        rounded-full
        shadow-md
        text-gray-700  dark:text-gray-400 
   hover:scale-110

         hover:text-foreground mb-8"
          aria-label="Blog yazılarına dön"
        >
          <CornerUpLeft size={16} />
        </Link>
        <div className="hidden lg:block">
          <div className="fixed left-4 top-100 w-72">
            <div className="rounded-xl pl-0">
              <div className="mb-4 flex items-center gap-2 text-gray-700   dark:text-white">
                <Menu className="h-4 w-4" />
                <span className="text-sm font-medium">İçindekiler</span>
              </div>

              <nav>
                <ul className="space-y-3">
                  {article?.tableOfContents?.map((item) => (
                    <li key={item._id} className="flex items-start gap-3">
                      <span
                        className={`mt-3 h-px w-6 shrink-0 transition-colors ${
                          activeHeading === item.heading
                            ? "bg-black dark:bg-white"
                            : "bg-gray-200 dark:bg-gray-500"
                        }`}
                      />

                      <a
                        href={`#${item.heading}`}
                        className={`text-sm transition-colors ${
                          activeHeading === item.heading
                            ? "pl-2 font-medium text-gray-600 dark:text-white"
                            : "text-gray-500 hover:text-gray-600 dark:hover:text-white"
                        }`}
                      >
                        {item.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <PdfMakers
        openPdf={openPdf}
        setOpenPdf={setOpenPdf}
        pdfUrl={pdfUrl}
      />
        <h1 className="text-2xl tracking-tight  text-gray-700 pt-5 pb-2   dark:text-white text-center">{blog.title}</h1>
        <div className="m-4 grid grid-col gap-4 lg:flex lg:items-center lg:justify-center">



  <div className="w-full lg:hidden">
    <Select>
      <SelectTrigger className="w-full rounded-xl border-gray-200/70 bg-background shadow-sm dark:border-gray-900 dark:bg-gray-950">
        <SelectValue placeholder="İçindekiler" />
      </SelectTrigger>



      <SelectContent className="bg-white dark:bg-gray-950">
        <SelectGroup>
          {article?.tableOfContents?.map((item) => (
            <SelectItem key={item._id} value={item.heading}>
              <a href={`#${item.heading}`} className="block w-full">
                {item.heading}
              </a>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>

<div className="flex gap-4 justify-center">


  <div className="flex items-center justify-center lg:justify-start">
    <span className="text-sm capitalize text-yellow-400 underline">
      {blog.category}
    </span>
  </div>
<span className="text-gray-200">|</span>
  <div className="flex items-center justify-center gap-2 text-sm text-gray-700 dark:text-gray-400 lg:justify-start">
    <Calendar className="h-4 w-4 shrink-0" />
    <span>
      {blog.createdAt
        ? new Date(blog.createdAt).toLocaleDateString("tr-TR")
        : "-"}
    </span>
  </div>

  <span className="text-gray-200">|</span>
  <div className="flex items-center justify-center gap-3 lg:justify-start">
    <span className="text-sm text-gray-700 dark:text-gray-400">
      Eklentiler
    </span>

    {blog?.pdf?.url && (
      <button
        onClick={() => {
          setPdfUrl(`${process.env.NEXT_PUBLIC_API_URL}${blog.pdf.url}`);
          setOpenPdf(true);
        }}
        className="group text-gray-600 transition-all duration-300 hover:-translate-y-1 dark:text-gray-300"
      >
        <Eye className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </button>
    )}

    <button
      onClick={handleShare}
      className="group text-gray-600 transition-all duration-300 hover:-translate-y-1 dark:text-gray-300"
    >
      <Link2 className="h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
    </button>
  </div></div>
</div>
        <p className="mt-2 text-md    pt-6 pb-3     text-gray-700   dark:text-gray-400">{blog.subtitle}</p>
      </div>
      <div className="md:max-w-4xl mx-auto sm:max-w-3xl">
        <div className="rounded-3xl overflow-hidden">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Blog görseli"
              className="w-full object-cover"
              loading="eager"
            />
          )}
        </div>
      </div>
      {blog.image?.caption && (
        <p className="text-center text-sm  mt-3 text-gray-700   dark:text-gray-400">
          {blog.image.caption}
        </p>
      )}
      <div className="max-w-2xl mx-auto ">
        <div className="mt-8">
          <p className="text-md leading-9  text-gray-700   dark:text-gray-400 ">
            {blog.summary}
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto ">
        <div className="mt-10 space-y-16">
          {blog.sections?.map((section) => (
            <section
              key={section._id}
              id={section.heading || section._id}
              className="scroll-mt-24"
            >
              <h2 className="text-xl  underline text-gray-700   dark:text-gray-400" id={section.heading}>
                {section.heading}
              </h2>

              {section.subtitle && (
                <p className=" mt-2 text-gray-700   dark:text-gray-400">{section.subtitle}</p>
              )}

              <div className="mt-4 space-y-6">
                {section.items.map((item) => (
                  <div key={item._id}>
                    <p className="text-md leading-8 text-gray-700   dark:text-gray-400 ">{item.text}</p>

                    {item.subItems?.length > 0 && (
                      <ul className="mt-3 space-y-2 list-disc pl-6 text-gray-700  dark:text-gray-400 ">
                        {item.subItems.map((subItem, i) => (
                          <li key={i}>{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <AdSenseAd />
    </div>
  );
}
