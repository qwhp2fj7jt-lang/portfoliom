"use client"
import Image from "next/image";
import Card from "./Card";
import { useRouter } from "next/navigation";
import project from "@/shared/json/project";
import { MyGoal } from "@/molecules";
import { CustomButton } from "@/atoms";

export default function ProjectsAndExperience() {
  const router = useRouter();

  const renderTech = (
    items
  ) => (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="
          dark:bg-zinc-900 
          dark:text-gray-300 
          flex items-center gap-2 
          p-2 bg-zinc-50 rounded-xl
          "
        >
          <div className="w-4 h-4 shrink-0 flex items-center justify-center">
            <Image
              src={item.icon}
              alt={item.name}
              width={16}
              height={16}
              className="rounded-lg object-contain"
            />
          </div>

          <span className="text-gray-700 text-[12px] dark:text-gray-300">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );


  return (
    <>
      <Card project={project} />

      <div className="mb-0">
        <CustomButton
          text="Tüm projeleri göster →"
          onClick={() => router.push("/projects")}
        />
      </div>


      <div className="flex items-center flex-col md:flex-row justify-between mt-10 mb-6">

        <h2 className="text-2xl font-bold">
          Deneyim
        </h2>


        <div className="flex items-center gap-2 text-green-700 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"/>
          </span>

          Yeni fırsatlara açığım
        </div>

      </div>


      <div className="space-y-4">



        <div className="flex gap-4 p-2 rounded-xl">

          <div className="hidden md:flex w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/images/exadus_logo.jpeg"
              width={56}
              height={56}
              alt="Exadus Teknolojileri Logo"
              className="object-cover"
            />
          </div>


          <div>

            <MyGoal
              baslik="React Developer"
              paragraf="Exadus Teknolojileri A.Ş."
              paragrafOne="Eki 2024 – Şub 2025 · 5 ay"
            />


            {renderTech([
              {
                name:"Next.js 14",
                icon:"/images/icons/next.png"
              },
              {
                name:"State Yönetimi",
                icon:"/images/icons/state-management.jpeg"
              },
              {
                name:"API Entegrasyonu",
                icon:"/images/icons/api.png"
              },
              {
                name:"Responsive tasarım",
                icon:"/images/icons/mobile.png"
              },
              {
                name:"Material-UI",
                icon:"/images/icons/blog-mui.png"
              },
              {
                name:"Agile ve Scrum",
                icon:"/images/icons/agile.png"
              }
            ])}

          </div>

        </div>



        <hr className="border-gray-200 dark:border-gray-900"/>



    


        <div className="flex gap-4 p-4 rounded-xl">


          <div className="hidden md:flex w-14 h-14 rounded-lg overflow-hidden bg-gray-100">

            <Image
              src="/images/ferofen_biliim_a__logo.jpeg"
              width={56}
              height={56}
              alt="Ferofen Bilişim Logo"
              className="object-cover"
            />

          </div>


          <div>

            <MyGoal
              baslik="Frontend Developer"
              paragraf="Ferofen Bilişim A.Ş."
              paragrafOne="Ara 2021 – Ara 2023 · 2 yıl 1 ay"
            />


            {renderTech([
              {
                name:"React",
                icon:"/images/icons/react.svg"
              },
              {
                name:"JavaScript",
                icon:"/images/icons/javascript.png"
              },
              {
                name:"Bootstrap",
                icon:"/images/icons/bootstrap.png"
              },
              {
                name:"HTML5",
                icon:"/images/icons/html.webp"
              },
              {
                name:"CSS3",
                icon:"/images/icons/css.png"
              },
              {
                name:"Context API",
                icon:"/images/icons/contextApi.jpeg"
              }
            ])}


          </div>


        </div>



        <hr className="border-gray-200 dark:border-gray-900"/>






        <div className="flex gap-4 p-4 rounded-xl">


          <div className="hidden md:flex w-14 h-14 rounded-lg overflow-hidden bg-gray-100">

            <Image
              src="/images/1631302268256.jpeg"
              width={56}
              height={56}
              alt="Atak Domain Logo"
              className="object-cover"
            />

          </div>


          <div>

            <MyGoal
              baslik="Intern"
              paragraf="Atak Domain"
              paragrafOne="Tem 2020 – Eyl 2020 · 3 ay"
            />


            {renderTech([
              {
                name:"MySQL",
                icon:"/images/icons/mysql.png"
              },
              {
                name:"HTML5",
                icon:"/images/icons/html.webp"
              },
              {
                name:"CSS3",
                icon:"/images/icons/css.png"
              },
              {
                name:"Bootstrap",
                icon:"/images/icons/bootstrap.png"
              }
            ])}


          </div>


        </div>


      </div>

    </>
  );
}
