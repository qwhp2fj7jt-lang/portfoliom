"use client"
import { useRouter } from "next/navigation";
import {AboutCard} from "@/molecules";
import {CustomButton} from "@/atoms"
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Hero() {
    const router=useRouter()
  
  
  return (
    <>

      <div className="flex items-center gap-6">


        <div className="relative">
          <img
            src="/images/profile.jpeg"
            alt="Avatar"
            className="w-32 h-32 shadow-md rounded-full  p-1  border border-gray-100 dark:border-gray-800"
          />
          <span className="absolute bottom-0 left-2 w-6 h-6 p-1 bg-white shadow-md dark:bg-zinc-900 
 rounded-full flex items-center justify-center text-white dark:text-gray-300 text-xs">
<CodeBracketIcon className="dark:text-yellow-500 text-primary w-4 h-4" />

          </span>
        </div>

   
        <div>
          <h1 className="text-3xl font-semibold">Zeynep Baş</h1>

          <p className="text-gray-500 mt-1">React Frontend Engineer | Architecture & Performance Focused</p>


          <div className="flex items-center space-x-4 mt-4 text-gray-600">
            <a href="https://github.com/zeynepbass" className="hover:text-black" target="_blank"         aria-label="github">>
              🐙
            </a>
            <a
          href="mailto:baszynpp@gmail.com"
          target="_blank"
          className="hover:text-black" 
          rel="noopener noreferrer"
              aria-label="e-Mail">
        >
              🔗
            </a>
            <a href="https://bionluk.com/zeynepbass" className="hover:text-black" target="_blank" aria-label="Bionluk">
              🐦
            </a>
            <a href="https://www.linkedin.com/in/zeynepbasss/" className="hover:text-black" target="_blank" aria-label="Linkedin">
              💼
            </a>
          </div>
        </div>
      </div>

      <div className=" mt-10 text-start text-gray-700 leading-relaxed">
     <AboutCard  baslik="⚡ Teknik Yaklaşım" 
     paragraf="React ekosisteminde uzmanlaşan bir Frontend Engineer olarak; Redux ve Zustand ile ölçeklenebilir state yönetimi çözümleri geliştiriyor, Tailwind CSS ile modern, duyarlı ve erişilebilir kullanıcı arayüzleri tasarlıyorum." 
     paragrafOne="Temiz mimari prensiplerine uygun, yeniden kullanılabilir ve performans odaklı komponent yapıları oluşturmayı önemsiyorum. RESTful API entegrasyonlarında deneyimliyim ve Azure DevOps ile JIRA gibi araçları kullanarak Agile ekip süreçlerine aktif katkı sağlıyorum."
     paragrafTwo="Analitik düşünme yaklaşımıyla, kullanıcı odaklı ve sürdürülebilir çözümler üretirken React ekosistemi ve modern frontend mimarileri alanında uzmanlığımı derinleştirmeyi amaçlıyorum."
     />

    <CustomButton text="Detaylı teknik bilgi &nbsp;→"  onClick={() => router.push(`/about`)}/>
      </div>    </>

  );
}
