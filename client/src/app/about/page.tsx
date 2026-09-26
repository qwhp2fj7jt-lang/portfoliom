import type { Metadata } from "next";
import { AboutProfile, TechStack } from "@/features/about";
import { Container, JsonLd } from "@/components/atoms";
import { ogImage } from "@/config/images";
import { personJsonLd } from "@/config/seo";
import { site } from "@/config/site";

const description =
  "Merhaba! Ben Zeynep, ölçeklenebilir frontend mimarileri tasarlayan ve modern web uygulamaları geliştiren bir Frontend Engineer'ım. Next.js, React ve TypeScript ekosisteminde performans, erişilebilirlik (A11y), kullanıcı deneyimi ve temiz yazılım prensiplerini odağıma alarak sürdürülebilir dijital ürünler geliştiriyorum.";

export const metadata: Metadata = {
  title: "Hakkımda",
  description,
  keywords: [site.name, "hakkımda", "frontend", "react", "next.js", "typescript", "web development", "javascript"],
  creator: site.name,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    locale: "tr_TR",
    siteName: site.name,
    title: `Hakkımda – ${site.name}`,
    description,
    url: "/about",
    images: [ogImage],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: personJsonLd }} />
      <Container>
        <AboutProfile />
      </Container>
      <TechStack />
    </>
  );
}
