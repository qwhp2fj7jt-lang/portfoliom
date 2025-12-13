import { useTranslations } from "next-intl";
export default function Footer() {
  const nowYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  return (
    <>

    <hr className="border-t border-gray-50"/>
    <div className="container mx-auto px-5 lg:px-10 py-10  text-gray-500">
        <p>{t("footerParagraf1")}</p>
        <p className="flex items-center gap-2">
          {t("footerParagraf2")}

          <img
            src="/images/footer/latte.png"
            width="18"
            height="18"
            className="animate-bounce ml-1 dark:bg-text"
            alt="latte"
          />
        </p>

        <p>© {nowYear} | Zeynep Baş</p>
        </div>    </>
  
  );
}
