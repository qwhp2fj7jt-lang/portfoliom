import { useTranslations } from "next-intl";

export default function Blog(){
    const t=useTranslations("Blog")
    return(
        <p className="text-center text-gray-400">{t("loading")}</p>
    )
}