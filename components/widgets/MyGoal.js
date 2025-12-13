
import { useTranslations } from "next-intl";
export default function MyGoal() {
  const t = useTranslations("MyGoal");
  return (



            <div

              className="lg:p-6 p-4 rounded-2xl shadow-md  dark:bg-zinc-800 bg-white justify-between  flex items-start gap-4 dark:text-white text-gray-700 text-sm md:text-base "
            >
              <div>
                <h2 className="text-xl font-bold mb-1 dark:text-white">
                {t("title")}
                </h2>
                <p className="text-gray-600 dark:text-white">         {t("content")}</p>
              </div>
           
            </div>
    


  );
}
