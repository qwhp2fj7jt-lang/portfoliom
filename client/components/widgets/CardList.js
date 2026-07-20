"use client";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Eye } from "lucide-react";

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
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        aria-label="Blog yazılarına dön"
      >
        <ArrowLeft size={16} />
        Blog
      </Link>

      <h1 className="text-2xl font-bold tracking-tight">{blog.title}</h1>

      <p className="mt-2 text-md text-muted-foreground">{blog.subtitle}</p>
      <div
        className="group 
        mt-6
    rounded-2xl border border-gray-200/70 
 
       dark:bg-transparent
    p-1  dark:border-gray-900 "
      >
        <div
          className="

    flex flex-col gap-4
    rounded-2xl
    border border-gray-200/70 dark:border-zinc-900/80
     dark:bg-zinc-900/80
    p-4

    lg:flex-row lg:items-center lg:justify-between
  "
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Select>
              <SelectTrigger className="w-full sm:w-56 rounded-xl border-gray-200/70 bg-background shadow-sm dark:border-gray-900 dark:bg-gray-950">
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

            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 shadow-sm dark:border-gray-900 dark:bg-gray-950 dark:text-gray-300">
              <Calendar className="h-4 w-4" />
              <span>
                {blog.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString("tr-TR")
                  : "-"}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-500 ">
              Eklentiler
            </span>

            <div className="flex items-center gap-2">
              {blog?.pdf?.url && (
                <button
                  onClick={() => {
                    setPdfUrl(
                      `${process.env.NEXT_PUBLIC_API_URL}${blog.pdf.url}`
                    );
                    setOpenPdf(true);
                  }}
                  aria-label="PDF Görüntüle"
                  title="PDF Görüntüle"
                  className="
            group
            flex h-11 w-11 items-center justify-center
            rounded-xl
            border border-gray-200 dark:border-gray-900
            bg-white dark:bg-gray-950
            text-gray-600 dark:text-gray-300
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:border-gray-400
            hover:bg-gray-50
            hover:shadow-lg
            dark:hover:border-gray-500
            dark:hover:bg-gray-950
          "
                >
                  <Eye className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                </button>
              )}

              <button
                onClick={handleShare}
                aria-label="Paylaş"
                title="Paylaş"
                className="
          group
          flex h-11 w-11 items-center justify-center
          rounded-xl
          border border-gray-200 dark:border-gray-900
          bg-white dark:bg-gray-950
          text-gray-600 dark:text-gray-300
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-gray-500
          hover:bg-gray-50
          hover:shadow-lg
          dark:hover:border-gray-500
          dark:hover:bg-gray-950
        "
              >
                <Share2 className="h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>{" "}
      </div>

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

      {blog.image?.caption && (
        <p className="text-center text-sm text-muted-foreground mt-3">
          {blog.image.caption}
        </p>
      )}

      <div className="mt-8">
        <p className="text-xl leading-9 text-muted-foreground">
          {blog.summary}
        </p>
      </div>

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
                  <p className="text-lg leading-8">{item.text}</p>

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

      <AdSenseAd />
    </div>
  );
}
