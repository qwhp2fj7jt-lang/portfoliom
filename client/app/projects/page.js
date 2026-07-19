
import Project from "@/features/projects"
export async function generateMetadata() {
  const baseUrl = "https://www.zeynepbas.dev";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Projelerim",
      template: "%s | Zeynep Baş",
    },
    keywords: [
      "Zeynep Baş",
      "proje",
      "frontend",
      "react",
      "next.js",
      "web development",
      "javascript",
    ],
    description:"Modern frontend mimarileri, sistem tasarımı, performans mühendisliği ve kullanıcı odaklı web uygulamaları",
    authors: [{ name: "Zeynep Baş", url: baseUrl }],
    creator: "Zeynep Baş",
    alternates: { canonical: `${baseUrl}/about` },
    robots: { index: true, follow: true },

    openGraph: {
      title: "Projelerim – Zeynep Baş",
      description:"Modern frontend mimarileri, sistem tasarımı, performans mühendisliği ve kullanıcı odaklı web uygulamaları",
      url: `${baseUrl}/projects`,
      siteName: "Zeynep Baş",
      type: "website",
      locale: "tr_TR",
      images: [
        {
          url: "/images/avatar.png",
          width: 1200,
          height: 630,
          alt: "Zeynep Baş",
        },
      ],
    },
  };
}
export default function Projects() {
  return <Project/>
}
