
import Abouts from "@/features/about";
export async function generateMetadata() {
  const baseUrl = "https://zeynepbas.dev";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Hakkımda",
      template: "%s | Zeynep Baş",
    },
    description:"Merhaba! Ben Zeynep, Frontend Engineer olarak projeler geliştiriyorum. Kod ve tasarımı birleştirerek fikirleri hızlı ve etkili kullanıcı arayüzlerine dönüştürmeyi seviyorum.",
    authors: [{ name: "Zeynep Baş", url: baseUrl }],
    creator: "Zeynep Baş",
    alternates: { canonical: `${baseUrl}/projects` },
    robots: { index: true, follow: true },

    openGraph: {
      title: "Hakkımda – Zeynep Baş",
      description:
        "Merhaba! Ben Zeynep, Frontend Engineer olarak projeler geliştiriyorum. Kod ve tasarımı birleştirerek fikirleri hızlı ve etkili kullanıcı arayüzlerine dönüştürmeyi seviyorum.",
      url: `${baseUrl}/about`,
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

export default function About() {
  return <Abouts/>
}
