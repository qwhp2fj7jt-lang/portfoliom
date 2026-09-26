import type { Metadata } from "next";
import { AvailabilityBadge, ExperienceList } from "@/features/experience";
import { PageTemplate } from "@/components/templates";
import { ogImage } from "@/config/images";
import { site } from "@/config/site";

const lead =
  "Kariyer yolculuğum boyunca edindiğim deneyimler, kullandığım teknolojiler ve geliştirdiğim projeler.";

export const metadata: Metadata = {
  title: "Deneyimler",
  description: lead,
  keywords: [site.name, "deneyim", "kariyer", "frontend developer", "react", "next.js", "typescript"],
  creator: site.name,
  alternates: { canonical: "/experience" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: `Deneyimler – ${site.name}`,
    description: lead,
    url: "/experience",
    images: [ogImage],
  },
};

export default function ExperiencePage() {
  return (
    <PageTemplate eyebrow="Kariyer" title="Deneyimler" lead={lead} badge={<AvailabilityBadge />}>
      <ExperienceList />
    </PageTemplate>
  );
}
