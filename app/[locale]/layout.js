import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header, Footer } from "@/shared";
import "./globals.css";

export async function generateMetadata({ params: { locale } }) {
  const baseUrl = "https://zeynepbas.dev";
  const isTR = locale === "tr";

  return {
    metadataBase: new URL(baseUrl),

    alternates: isTR
      ? { canonical: `${baseUrl}/tr` }
      : undefined,

    robots: isTR
      ? { index: true, follow: true }
      : { index: false, follow: false },

    title: {
      template: "%s | Zeynep Baş",
      default: "Zeynep Baş - Mid Frontend Developer",
    },

    description:
      "React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiren Mid frontend geliştirici Zeynep Baş'ın portföy sitesi.",

    openGraph: isTR
      ? {
          title: "Zeynep Baş - Mid Frontend Developer",
          description:
            "React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiren Mid frontend geliştirici Zeynep Baş'ın portföy sitesi.",
          url: `${baseUrl}/tr`,
          siteName: "Zeynep Baş",
          type: "website",
        }
      : undefined,
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
