"use client";
import Link from "next/link";
import { ArrowLeft, Calendar,Share2 } from "lucide-react";
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
  const PdfMakers = dynamic(
  () => import("@/widgets/PdfMakers"),
  {
    loading: () => <p>PDF yükleniyor...</p>,
  }
);
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
        Bloga Dön
      </Link>

      <h1 className="text-4xl font-bold tracking-tight">{blog.title}</h1>

      <p className="mt-2 text-xl text-muted-foreground">{blog.subtitle}</p>

      <div className="flex items-center gap-2 mt-3 text-muted-foreground text-gray-500">
        <Select>
          <SelectTrigger className="w-56 rounded-xl border shadow-sm">
            <SelectValue placeholder="İçindekiler" />
          </SelectTrigger>
          {blog?.pdf?.url && (
            <button
     
              onClick={() => {
                setPdfUrl(
                  `${process.env.NEXT_PUBLIC_API_URL}${blog.pdf.url}`
                );
                setOpenPdf(true);
              }}
              className="inline-flex items-center text-xs sm:text-sm px-3 py-1 border rounded-xl hover:bg-gray-50"
                  aria-label="Pdf görüntüle"
            >
              📄 PDF Görüntüle
            </button>
          )}

  <PdfMakers openPdf={openPdf} setOpenPdf={setOpenPdf} pdfUrl={pdfUrl}/>
          <SelectContent className="w-56 bg-white dark:bg-gray-900">
            <SelectGroup>
              {article?.tableOfContents?.map((item) => (
                <SelectItem key={item._id} value={item.heading}>
                  <a href={`#${item.heading}`} className="w-full block"                aria-label={`#${item.heading}`}>
                    {item.heading}
                  </a>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Calendar size={16} />
                <button
  onClick={handleShare}
  className="tooltip-trigger"
  title="Paylaş"
>
  <Share2 size={18} />
</button>
        <span>
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString("tr-TR")
            : "-"}
        </span>
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
            <h2 className="text-3xl font-bold">{section.heading}</h2>

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
