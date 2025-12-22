import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header, Footer } from "@/shared";
import "./globals.css";


export async function generateMetadata({ params: { locale } }) {
  const baseUrl = "https://zeynepbas.dev";

  return {
    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `/${locale}`,
      languages: {
        tr: `${baseUrl}/tr`,
        en: `${baseUrl}/en`,
      },
    },

    title: {
      template: "%s | Zeynep Baş",
      default: "Zeynep Baş - Mid Frontend Developer",
    },

    description:
      "React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiren Mid frontend geliştirici Zeynep Baş'ın portföy sitesi.",

    authors: [{ name: "Zeynep Baş", url: baseUrl }],
    creator: "Zeynep Baş",

    openGraph: {
      title: "Zeynep Baş - Mid Frontend Developer",
      description:
        "React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiren Mid frontend geliştirici Zeynep Baş'ın portföy sitesi.",
      url: `${baseUrl}/${locale}`,
      siteName: "Zeynep Baş",
      type: "website",
      images: [
        {
          url: "/images/avatar.jpg", 
          width: 1200,
          height: 630,
          alt: "Zeynep Baş - Mid Frontend Developer",
        },
      ],
    },

    icons: {
      icon: "/favicon.ico",
    },
  };
}


export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="min-h-screen">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
