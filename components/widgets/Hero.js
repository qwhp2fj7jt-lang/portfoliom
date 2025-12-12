"use client"
import { useRouter } from "next/navigation";
import AboutCard from "./AboutCard";
import Button from "./Button"


import { useTranslations } from "next-intl";


export default function Hero({locale}) {
    const router=useRouter()
    const t = useTranslations("AboutCard");
  
  return (


    <div className="container mx-auto px-6 md:px-20 py-10">
      <div className="flex items-center gap-6">


        <div className="relative">
          <img
            src="/images/avatar.jpg"
            alt="Avatar"
            className="w-32 h-32 rounded-full"
          />
          <span className="absolute bottom-0 left-0 w-8 h-8 dark:bg-white bg-zinc-800
 rounded-full flex items-center justify-center text-white text-xs">
          😵‍💫 
          </span>
        </div>

   
        <div>
          <h1 className="text-3xl font-semibold">Zeynep Baş</h1>

          <p className="text-gray-500 mt-1">Frontend Developer</p>


          <div className="flex items-center space-x-4 mt-4 text-gray-600">
            <a href="https://github.com/zeynepbass" className="hover:text-black" target="_blank">
              🐙
            </a>
            <a
          href="mailto:baszynpp@gmail.com"
          target="_blank"
          className="hover:text-black" 
          rel="noopener noreferrer"
        >
              🔗
            </a>
            <a href="https://bionluk.com/zeynepbass" className="hover:text-black" target="_blank">
              🐦
            </a>
            <a href="https://www.linkedin.com/in/zeynep-ba%C5%9F-463a7b228/" className="hover:text-black" target="_blank">
              💼
            </a>
          </div>
        </div>
      </div>

      <div className=" mt-10 text-start text-gray-700 leading-relaxed">
     <AboutCard />

    <Button text={t("buttonAbout")}  onClick={() => router.push(`/${locale}/about`)}/>
      </div>
    </div>
  );
}
