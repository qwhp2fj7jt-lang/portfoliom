"use client";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Eye, Clock3 } from "lucide-react";

import AdSenseAd from "@/components/AdSenseAd";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import dynamic from "next/dynamic";
const PdfMakers = dynamic(() => import("@/widgets/PdfMakers"), {
  loading: () => <p>PDF yükleniyor...</p>,
});
export default function CardList({ article }) {
  const blog = article?.article;
  const imageUrl = blog?.image?.url;
  const [openPdf, setOpenPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

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
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto ">
        <Link
          href="/blog"
          className="inline-flex 
        items-center gap-2 
        text-gray-600
        dark:text-gray-400
        text-muted-foreground hover:text-foreground mb-8"
          aria-label="Blog yazılarına dön"
        >
          <ArrowLeft size={16} />
          Blog
        </Link>

        <h1 className="text-2xl font-bold tracking-tight">{blog.title}</h1>
        <div className="mt-6 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:justify-between">
          <div className="col-span-3 w-full sm:w-72">
            <Select>
              <SelectTrigger className="w-full rounded-xl border-gray-200/70 bg-background shadow-sm dark:border-gray-900 dark:bg-gray-950">
                <SelectValue placeholder="İçindekiler" />
              </SelectTrigger>

              <PdfMakers
                openPdf={openPdf}
                setOpenPdf={setOpenPdf}
                pdfUrl={pdfUrl}
              />

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

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>
              {blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString("tr-TR")
                : "-"}
            </span>
          </div>

          <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            {blog.category}
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Eklentiler
            </span>

            {blog?.pdf?.url && (
              <button
                onClick={() => {
                  setPdfUrl(
                    `${process.env.NEXT_PUBLIC_API_URL}${blog.pdf.url}`
                  );
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
              <Share2 className="h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            </button>
          </div>
        </div>
        <p className="mt-5 text-md text-muted-foreground">{blog.subtitle}</p>
      </div>
      <div className="md:max-w-4xl mx-auto sm:max-w-3xl">
        <div className="mt-6 rounded-3xl overflow-hidden">
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
        <p className="text-center text-sm text-muted-foreground mt-3">
          {blog.image.caption}
        </p>
      )}
      <div className="max-w-2xl mx-auto ">
        <div className="mt-8">
          <p className="text-md leading-9 text-muted-foreground">
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
              <h2 className="text-xl font-bold">{section.heading}</h2>

              {section.subtitle && (
                <p className="text-muted-foreground mt-2">{section.subtitle}</p>
              )}

              <div className="mt-4 space-y-6">
                {section.items.map((item) => (
                  <div key={item._id}>
                    <p className="text-md leading-8">{item.text}</p>

                    {item.subItems?.length > 0 && (
                      <ul className="mt-3 space-y-2 list-disc pl-6 text-muted-foreground">
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
