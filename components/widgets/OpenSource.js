"use client";
import { useTranslations } from "next-intl";

export default function OpenSource() {
  const t = useTranslations("ProjectApproach"); 
  return (
    <>
      <h2 className="dark:text-white text-2xl font-bold mb-4 text-gray-800 underline decoration-gray-100">
        {t("title")}
      </h2>

      <p className="dark:text-white text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
        {t("paragraph1")}
      </p>
      <p className="dark:text-white text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
        {t("paragraph2")}
      </p>

      <img src="/images/openSource.png" width="100%" height="40" />
    </>
  );
}
