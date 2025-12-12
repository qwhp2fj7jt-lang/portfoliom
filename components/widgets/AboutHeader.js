"use client";

import { useTranslations } from "next-intl";

export default function AboutHeader() {
  const t = useTranslations("AboutMe"); 

  return (
    <>
      <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-8 text-gray-800">
        {t("about") }
      </h2>

      <p className="text-gray-700 dark:text-white text-sm md:text-base mb-10 leading-relaxed">
        {t("greeting")}
      </p>
    </>
  );
}
