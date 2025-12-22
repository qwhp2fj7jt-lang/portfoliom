import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header, Footer } from "@/shared";
import "./globals.css"; 


export const metadata = {
  metadataBase: new URL("https://zeynepbas.dev"),

  alternates: {
    canonical: "/tr",
  },

  title: {
    template: "%s | Zeynep Baş",
    default: "Zeynep Baş - Mid Frontend Developer",
  },

  description:
    "React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiren Mid frontend geliştirici Zeynep Baş'ın portföy sitesi.",

  openGraph: {
    title: "Zeynep Baş - Mid Frontend Developer",
    description:
      "React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiren Mid frontend geliştirici Zeynep Baş'ın portföy sitesi.",
    url: "https://zeynepbas.dev/tr",
    siteName: "Zeynep Baş",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};



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
