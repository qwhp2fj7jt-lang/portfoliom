"use client";

import Card from "./Card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {project} from "../shared"
import Button from "./Button"
import { useTranslations } from "next-intl";
export default function ProjectsAndExperience({locale}) {
  const router = useRouter();
  const t = useTranslations("Projects");
  return (
    <section className="w-full mt-20">
        <div className="container mx-auto px-6 md:px-20 py-10">
  


          <Card project={project}/>


        <div className="mt-0">
          <Button text={t("allProject")}  onClick={() => router.push(`/${locale}/projects`)}/>
        </div>

        <div className="flex items-center justify-between mt-10 mb-6">
          <h2 className="text-2xl font-bold">{t("experience")}</h2>

          <div className="flex items-center gap-2 text-green-600 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            {t("openToWork")} 
        
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex  gap-4 p-4 rounded-xl  transition cursor-pointer">
            <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex  justify-center">
              <Image
                src="/images/exadus_logo.jpeg"
                width={56}
                height={56}
                alt="Exadus Logo"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-medium text-lg">React Developer</h3>
              <p className="text-gray-500 text-sm">Exadus Teknolojileri A.Ş.</p>
              <p className="text-gray-400 text-xs mt-1">
                Eki 2024 – Şub 2025 · 5 ay
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { name: "Next.js 14", icon: "/images/icons/next.png" },
                  { name: "State Yönetimi", icon: "/images/icons/state-management.jpeg" },
                  { name: "API Entegrasyonu", icon: "/images/icons/api.png" },
                  { name: "Responsive tasarım", icon: "/images/icons/mobile.png" },
                  { name: "Material-UI", icon: "/images/icons/blog-mui.png" },
                  { name: "Agile ve Scrum", icon: "/images/icons/agile.png" },
                ].map((item, index) => (
                  <div key={index} className=" dark:bg-zinc-800  dark:text-white flex items-center gap-2 p-2 bg-zinc-50 rounded-xl">
                  <img src={item.icon} alt={item.name} className="w-4 h-4 rounded-lg" />
                  <span className="text-gray-700 text-[12px] dark:text-white">{item.name}</span>
                </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-800 " />

          <div className="flex  gap-4 p-4 rounded-xl  transition cursor-pointer">
            <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex  justify-center">    <Image
                src="/images/ferofen_biliim_a__logo.jpeg"
                width={56}
                height={56}
                alt="Ferofen Logo"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-medium text-lg">Frontend Developer</h3>
              <p className="text-gray-500 text-sm">Ferofen Bilişim A.Ş.</p>
              <p className="text-gray-400 text-xs mt-1">
                Ara 2021 – Ara 2023 · 2 yıl 1 ay
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { name: "React", icon: "/images/icons/react.svg" },
                  { name: "JavaScript", icon: "/images/icons/javascript.png" },
                  { name: "Bootstrap", icon: "/images/icons/bootstrap.png" },
                  { name: "HTML5", icon: "/images/icons/html.webp" },
                  { name: "CSS3", icon: "/images/icons/css.png" },
                  { name: "Context API", icon: "/images/icons/contextApi.jpeg" },
                ].map((item, index) => (
                       <div key={index} className=" dark:bg-zinc-800  dark:text-white flex items-center gap-2 p-2 bg-zinc-50 rounded-xl">
                    <img src={item.icon} alt={item.name} className="w-4 h-4 rounded-lg" />
                    <span className="text-gray-700 text-[12px] dark:text-white">{item.name}</span>
                  </div>
                  ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-800 " />

          <div className="flex  gap-4 p-4 rounded-xl  transition cursor-pointer">
            <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex  justify-center">    <Image
                src="/images/1631302268256.jpeg"
                width={56}
                height={56}
                alt="Atak Domain Logo"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-medium text-lg">Intern</h3>
              <p className="text-gray-500 text-sm">Atak Domain</p>
              <p className="text-gray-400 text-xs mt-1">
                Tem 2020 – Eyl 2020 · 3 ay
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { name: "MySQL", icon: "/images/icons/mysql.png" },

                  { name: "HTML5", icon: "/images/icons/html.webp" },
                  { name: "CSS3", icon: "/images/icons/css.png" },
                  { name: "bootstrap", icon: "/images/icons/bootstrap.png" },
                ].map((item, index) => (
                  <div key={index} className=" dark:bg-zinc-800  dark:text-white flex items-center gap-2 p-2 bg-zinc-50 rounded-xl">
                  <img src={item.icon} alt={item.name} className="w-4 h-4 rounded-lg" />
                  <span className="text-gray-700 text-[12px] dark:text-white">{item.name}</span>
                </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
