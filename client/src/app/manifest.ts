import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} – ${site.role}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#170a0a",
    theme_color: "#170a0a",
    lang: "tr",
    icons: [
      { src: "/icon.jpg", sizes: "256x256", type: "image/jpeg" },
      { src: "/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  };
}
