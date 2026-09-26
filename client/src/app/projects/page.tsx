import type { Metadata } from "next";
import { ProjectList } from "@/features/projects";
import { PageTemplate } from "@/components/templates";
import { ogImage } from "@/config/images";
import { site } from "@/config/site";

const lead =
  "Feature based mimari, ölçeklenebilir state yönetimi ve gerçek zamanlı etkileşim üzerine geliştirdiğim projeler.";

const description =
  "Modern frontend mimarileri, sistem tasarımı, performans mühendisliği ve kullanıcı odaklı web uygulamaları";

export const metadata: Metadata = {
  title: "Projelerim",
  description,
  keywords: [site.name, "proje", "frontend", "react", "next.js", "typescript", "web development", "javascript"],
  creator: site.name,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: `Projelerim – ${site.name}`,
    description,
    url: "/projects",
    images: [ogImage],
  },
};

export default function ProjectsPage() {
  return (
    <PageTemplate eyebrow="Projelerim" title="Açık kaynak projeler" lead={lead}>
      <ProjectList />
    </PageTemplate>
  );
}
