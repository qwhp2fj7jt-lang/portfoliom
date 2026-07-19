"use client";
import { useState } from "react";
import {AboutHeader} from "@/molecules";
import {Button} from "@/atoms"
import Image from "next/image"
export default function Card({ project }) {
  return (
    <>
      <AboutHeader
        baslik="Projelerim"
        paragraf={
          <>
     Projelerimde modern React mimarisi ve ölçeklenebilir durum yönetimi yaklaşımlarını kullanarak, temiz,
          sürdürülebilir ve yeniden kullanılabilir kod yapıları oluşturuyorum.
          <br/>
          Geliştirme süreçlerimi Git ile versiyonlayarak <a href="https://github.com/zeynepbass" target="_blank" aria-label="github" className="underline" ><b>GitHub</b> </a>üzerinden düzenli şekilde yayınlıyor
          ve sürekli iyileştirme prensibiyle ilerliyorum.
  
            üzerinden yayınlıyorum.
          </>
        }
      />

      <div className="mx-auto max-w-4xl  grid grid-cols-1  mt-5 lg:grid-cols-2 gap-6">
        {project &&
          project.map((item, index) => <ProjectCard key={item._id} item={item} />)}
      </div>
    </>
  );
}

function ProjectCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800">
      <div
        className="h-56 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${item.icon})` }}
      />

      <div className="p-4">
        <h2 className="text-gray-900 dark:text-gray-300 font-bold text-lg mb-2">
          {item.baslik}
        </h2>

        <p
          className={`text-sm leading-relaxed ${
            open
              ? "text-gray-700 dark:text-gray-300"
              : "text-gray-700 dark:text-gray-300 line-clamp-2"
          }`}
        >
          {item.description}
        </p>

        <Button
           className="hover:text-yellow-400"
          onClick={() => setOpen(!open)}
              aria-label="Açıklamamın devamını gör"
          text={open ? "Kapat" : "Devamını gör"}
        />

        <div className="flex items-center gap-3 mt-4">

              <Image
  src="/images/avatar.png"
  alt="Avatar"
  width={36}
  height={36}
  className="w-9 h-9 rounded-full object-cover"
/>
          

          <div className="text-sm">
            <a
              href={item.adres}
              target="_blank"
    aria-label="açık kaynak adresim"
              className="text-gray-900 dark:text-gray-300 font-medium hover:underline break-all"
            >
              Proje Linki
            </a>
            <p className="text-gray-500 text-xs">{item.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
