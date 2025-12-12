"use client";
import { useTranslations } from "next-intl";

export default function Fields() {
  const t = useTranslations("AboutSkills");

  return (
    <div className="pt-5">
      <div className="mb-6">
        <h3 className="dark:text-white text-xl md:text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          {t("interestsTitle")}
        </h3>
        <ul className="dark:text-white list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>{t("skills1")}</li>
          <li>{t("skills2")}</li>
          <li>{t("skills3")}</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="dark:text-white text-xl md:text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          {t("toolsTitle")}
        </h3>
        <ul className="dark:text-white list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>{t("tools1")}</li>
          <li>{t("tools2")}</li>
          <li>{t("tools3")}</li>
          <li>{t("tools4")}</li>
        </ul>
      </div>
    </div>
  );
}
