
import { useTranslations } from "next-intl";
export default function Services() {
  const t = useTranslations("Services");
  return (
  


            <div

              className="p-6 rounded-2xl shadow-md  dark:bg-zinc-800 bg-white justify-between  flex items-start gap-4"
            >
              <div>
                <h2 className="text-xl font-bold mb-1 dark:text-white">
                {t("title")}
                </h2>
                <p className="text-gray-600 dark:text-white">  {t("content")}</p>
              </div>
              <a href="https://bionluk.com/zeynepbass" target="_blank">
               <img
                  src="/images/icons/bionluk.png"
                  width="80"
                  height="80"
                  className="rounded-xl"
                />
         
              </a>
            </div>
    


  );
}
