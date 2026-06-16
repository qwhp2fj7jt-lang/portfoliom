
import Project from "@/features/projects"
export async function generateMetadata() {
  const baseUrl = "https://portfoliom-4p84.onrender.com";

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
    description:
      "Temiz mimari, Performanslı React uygulamaları, Gerçek projelerde sürdürülebilir frontend yapıları",
    authors: [{ name: "Zeynep Baş", url: baseUrl }],
    creator: "Zeynep Baş",
    alternates: { canonical: `${baseUrl}/about` },
    robots: { index: true, follow: true },

    openGraph: {
      title: "Projelerim – Zeynep Baş",
      description:
        "Temiz mimari, Performanslı React uygulamaları, Gerçek projelerde sürdürülebilir frontend yapıları",
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
