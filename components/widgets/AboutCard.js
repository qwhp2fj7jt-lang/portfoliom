"use client";

import { useTranslations } from "next-intl";

export default function AboutCard() {
  const t = useTranslations("AboutCard");

  return (
    <>
      <h3 className="text-xl dark:text-white md:text-2xl font-semibold mb-6 text-gray-800 flex items-center">
        {t("title")}
      </h3>
      <p className="text-gray-700 dark:text-white text-sm md:text-base mb-4 leading-relaxed">
        {t("paragraph1", { tech: "Redux, Zustand ve Tailwind CSS" })}
      </p>
      <p className="text-gray-700 dark:text-white text-sm md:text-base mb-4 leading-relaxed">
        {t("paragraph2", { tools: "Azure DevOps ve JIRA" })}
      </p>
      <p className="text-gray-700 dark:text-white text-sm md:text-base leading-relaxed">
        {t("paragraph3")}
      </p>
    </>
  );
}
