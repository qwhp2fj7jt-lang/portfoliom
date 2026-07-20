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
    <div className="group 
    rounded-2xl border border-gray-200/70
    p-1 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:from-zinc-900 dark:to-zinc-950">
  <div className="overflow-hidden rounded-[14px] border border-gray-200 bg-white dark:border-gray-800 dark:bg-zinc-900">
    <div
      className="h-56 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
      style={{ backgroundImage: `url(${item.icon})` }}
    />

    <div className="p-5">
<div className="flex items-center justify-between gap-3">
  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
    {item.baslik}
  </h2>

{item.yakinda && (
  <span
    className="
      inline-flex
      items-center
      gap-1.5
      rounded-full
      border
      border-amber-200
      bg-amber-50
      px-3
      py-1
      text-xs
      font-semibold
      text-amber-700
      dark:border-amber-900/50
      dark:bg-amber-950/30
      dark:text-amber-400
    "
  >
    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
    {item.yakinda}
  </span>
)}
 

      <p
        className={`text-sm leading-7 text-gray-600 dark:text-gray-300 ${
          open ? "" : "line-clamp-2"
        }`}
      >
        {item.description}
      </p>

      <Button
        className="mt-3 hover:text-yellow-400"
        onClick={() => setOpen(!open)}
        aria-label="Açıklamanın devamını gör"
        text={open ? "Kapat" : "Devamını Gör"}
      />

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={36}
            height={36}
            className="rounded-full object-cover ring-2 ring-white dark:ring-zinc-800"
          />

          <div>
            <a
              href={item.adres}
              target="_blank"
              aria-label="Açık kaynak proje adresi"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 hover:underline dark:text-gray-100 dark:hover:text-gray-400"
            >
              Proje Linki
            </a>

            <p className="text-xs text-gray-500">{item.date}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
