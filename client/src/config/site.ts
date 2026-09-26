export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "Zeynep Baş",
  role: "Frontend Developer",

  tagline: "Frontend Developer | React.js, Next.js | Architecture & Performance Focused",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.zeynepbas.dev").replace(/\/+$/, ""),
  description:
    "React, Next.js ve TypeScript ekosisteminde temiz kod prensipleri, yeniden kullanılabilir bileşenler ve ölçeklenebilir yazılım yaklaşımlarıyla modern web uygulamaları geliştiriyorum.",
  email: "baszynpp@gmail.com",
  github: "https://github.com/zeynepbass",
  linkedin: "https://linkedin.com/in/zeynepbasss",

  ground: "red" as "red" | "neutral",
} as const;

export const navItems: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "Projelerim", href: "/projects" },
  { label: "Hakkımda", href: "/about" },
  { label: "Deneyimler", href: "/experience" },
  { label: "Zeynep Zone", href: "/zone" },
];
