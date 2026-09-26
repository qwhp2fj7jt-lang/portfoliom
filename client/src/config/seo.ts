import { images } from "./images";
import { site } from "./site";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}${images.avatar.src}`,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
  knowsAbout: ["React", "Next.js", "TypeScript", "Frontend Architecture", "Web Performance", "Accessibility"],
};
