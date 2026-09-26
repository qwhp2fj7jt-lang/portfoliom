# Zeynep Baş — Portfolio (client)

Kişisel portfolyo sitesi — Next.js 16 + Tailwind CSS v4, Express + MongoDB API ile.

```bash
cp .env.example .env
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Mimari — Feature Based + Atomic Design

```
src/
├─ app/                      # Sadece rotalar + metadata; feature'ları birleştirir
│  └─ fonts/                 # Inter (Latin + Türkçe subset, tek 43KB woff2)
├─ components/               # Paylaşılan UI kütüphanesi (Atomic Design)
│  ├─ atoms/                 # Button, Input, Tag, Avatar, InitialAvatar, Heading, Text, Eyebrow, Container…
│  ├─ molecules/             # SearchField, SearchButton, NavLinks, PageHeader, SectionHeader, LikeButton…
│  ├─ organisms/             # SiteHeader, MobileMenu, SiteFooter, ContactSection
│  └─ templates/             # SiteTemplate, PageTemplate, ArticleTemplate
├─ features/                 # Her özellik kendi verisi, tipleri, mantığı ve bileşenleriyle
│  ├─ blog/                  # api/ data/ lib/filter-posts hooks/useSearchFocus components/{molecules,organisms}
│  ├─ zone/                  # yorumlar: CommentItem, CommentForm, ZoneInteractions, ZoneCard
│  ├─ experience/  projects/  about/  home/
│  └─ <feature>/index.ts     # Feature'ın public API'si
├─ config/                   # site.ts (menü, tagline, iletişim), images.ts
└─ lib/                      # cn, format, search-intent
public/assets/images/        # profile.jpeg, avatar.jpg, zone/*.jpg
```

Kurallar (`eslint.config.mjs` ile zorunlu):
- Rotalar feature'lara yalnızca `@/features/<ad>` üzerinden erişir.
- Feature'lar birbirini import etmez; ortak kod `components/` veya `lib/` altındadır.
- `components/` hiçbir feature'a bağımlı değildir; atom'lar yalnızca atom kullanır.

## Tailwind

Tasarım token'ları `src/app/globals.css` içindeki `@theme` bloğunda: `bg-surface`, `text-neutral-300`, `text-accent`, `bg-accent/12`, `max-w-page`, `px-gutter`, `nav:` (760px kırılımı) gibi. Tasarıma özgü `rule-top`, `lighten`, `stretched-link` birer `@utility`.

## Core Web Vitals

- Tüm sayfalar statik (SSG); client bileşenler yalnızca etkileşimli parçalarda.
- `next/image`: varsayılan **lazy loading**, AVIF/WebP, responsive `sizes`; ekranın üstündeki görseller `loading="eager"` + `fetchPriority="high"`, profil fotoğrafında blur placeholder.
- Sabit `aspect-ratio` kutuları → CLS 0. `next/font` ile self-hosted Inter, `inlineCss` ile render-blocking CSS yok.

## Erişilebilirlik (WCAG 2.2 AA)

Skip link, landmark'lar, sıralı başlıklar, ≥ 4.5:1 kontrast, `:focus-visible` halkası, disclosure menü (`aria-expanded`, Escape), `aria-current`, native radio filtre + `role="status"` duyurusu, `aria-pressed` beğeni, klavyeyle kaydırılabilir kod blokları, `prefers-reduced-motion`.
