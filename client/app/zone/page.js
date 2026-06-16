
import { postService } from "@/shared/services/postServices";
import Zone from "@/features/zone"
export async function generateMetadata() {
  const baseUrl = "https://portfoliom-4p84.onrender.com";

  return {

    metadataBase: new URL(baseUrl),

    title: {
      default: "Zeynep Zone",
      template: "%s | Zeynep Zone",
    },

    description:
      "Zeynep Baş’ın paylaşımlarını keşfedebileceğin ve etkileşime geçebileceğin dijital alan.",

    authors: [{ name: "Zeynep Baş", url: baseUrl }],
    creator: "Zeynep Baş",

    alternates: {
      canonical: `${baseUrl}/zone`,
    },

    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "Zeynep Baş",
      "zone",
      "frontend",
      "react",
      "next.js",
      "web development",
      "javascript",
    ],
    openGraph: {
      title: "Zeynep Zone",
      description:
        "Frontend projeleri, React uygulamaları ve kişisel içerikler. Zeynep Baş’ın dijital alanı.",
      url: `${baseUrl}/zone`,
      siteName: "Zeynep Zone",
      type: "website",
      locale: "tr_TR",
      images: [
        {
          url: `${baseUrl}/images/avatar.png`,
          width: 1200,
          height: 630,
          alt: "Zeynep Zone",
        },
      ],
    },
  };
 
}

export default async function Projects() {
  const posts = await postService.postGet();
  return <Zone product={posts}/>
}