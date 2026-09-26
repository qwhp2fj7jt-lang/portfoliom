import type { Metadata } from "next";
import { ZoneGrid } from "@/features/zone";
import { PageTemplate } from "@/components/templates";
import { ogImage } from "@/config/images";
import { site } from "@/config/site";

const lead = "Paylaşımlarımı keşfedebileceğin ve etkileşime geçebileceğin dijital alan.";

const description = "Zeynep Baş’ın paylaşımlarını keşfedebileceğin ve etkileşime geçebileceğin dijital alan.";

export const metadata: Metadata = {
  title: "Zeynep Zone",
  description,
  keywords: [site.name, "zone", "frontend", "react", "next.js", "web development", "javascript"],
  creator: site.name,
  alternates: { canonical: "/zone" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: "Zeynep Zone",
    description: "Frontend projeleri, React uygulamaları ve kişisel içerikler. Zeynep Baş’ın dijital alanı.",
    url: "/zone",
    images: [{ ...ogImage, alt: "Zeynep Zone" }],
  },
};

export default function ZonePage() {
  return (
    <PageTemplate eyebrow="Zeynep Zone" title="Kodun dışındaki anlar" lead={lead}>
      <ZoneGrid />
    </PageTemplate>
  );
}
