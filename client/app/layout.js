
import { Header, Footer } from "@/components/layouts";
import "./globals.css";

export async function generateMetadata() {
  const baseUrl = "https://zeynepbas.dev";

  return {
    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `${baseUrl}/about`,
    },


    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },


    title: {
      default: "Zeynep Baş – Frontend Engineer",
      template: "%s | Zeynep Baş",
    },


    description:"React konusunda uzmanlaşmış bir Frontend geliştiricisiyim ve Redux, Zustand ve Tailwind CSS konularında deneyim sahibiyim. Temiz ve yeniden kullanılabilir kodlarla yüksek performanslı, responsive ve erişilebilir kullanıcı arayüzleri oluşturuyorum.",


    authors: [
      {
        name: "Zeynep Baş",
        url: baseUrl,
      },
    ],
    creator: "Zeynep Baş",


    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },

    openGraph: {
      title: "Zeynep Baş – Frontend Engineer",
      description:
"React konusunda uzmanlaşmış bir Frontend geliştiricisiyim ve Redux, Zustand ve Tailwind CSS konularında deneyim sahibiyim. Temiz ve yeniden kullanılabilir kodlarla yüksek performanslı, responsive ve erişilebilir kullanıcı arayüzleri oluşturuyorum.",
      url: `${baseUrl}`,
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

    metadataBaseJSONLD: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zeynep Baş",
      url: baseUrl,
      image: `${baseUrl}/images/avatar.png`,
      sameAs: [
        "https://www.linkedin.com/in/zeynepbass",
        "https://github.com/zeynepbasss"
      ],
      jobTitle: "Frontend Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Zeynep Baş",
      },
    },
  };
}




export default async function LocaleLayout({ children}) {

  return (
    <html>
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white">



          <Header  />
          <main className="min-h-screen">{children}</main>
          <Footer />

      </body>
    </html>
  );
}
