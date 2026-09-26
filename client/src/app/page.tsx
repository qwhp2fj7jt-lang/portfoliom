import { TechStack } from "@/features/about";
import { LatestPosts } from "@/features/blog";
import { Hero } from "@/features/home";
import { ProjectsPreview } from "@/features/projects";
import type { Metadata } from "next";
import { Container, JsonLd } from "@/components/atoms";
import { personJsonLd } from "@/config/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <Container>
        <Hero />
        <LatestPosts count={3} />
      </Container>
      <TechStack />
      <Container>
        <ProjectsPreview />
      </Container>
    </>
  );
}
