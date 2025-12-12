"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
export default function Card({ project }) {
  const t = useTranslations("Projects");
  return (
    <>

        <h2 className="text-3xl font-bold mb-6">{t("projectTitle")}</h2>
        <div className="grid md:grid-cols-2 gap-4 ">
        {project &&
          project.map((item, index) => <ProjectCard key={index} item={item} />)}
      </div>
    </>
  );
}

function ProjectCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
        <div className="grid grid-cols-1 gap-4">
      <div className="max-full w-full dark:bg-zinc-800  bg-white rounded-lg shadow-md overflow-hidden">
        <div
          className="h-56 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${item.icon})` }}
        ></div>

        <div className="p-4">
          <h2 className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
            {item.baslik}
          </h2>

          <p
            className={
              open
                ? "text-gray-700 text-sm leading-relaxed"
                : "text-gray-700 dark:text-white text-sm leading-relaxed line-clamp-1"
            }
          >
            {item.description}
          </p>

          <button
            onClick={() => setOpen(!open)}
            className="dark:text-white text-gray-500 text-sm mt-2 hover:underline"
          >
            {open ? "Kapat " : "Devamını gör "}
          </button>

          <div className="flex items-center gap-2 mt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="/images/avatar.jpg"
              alt="Avatar"
            />

            <div className="text-sm">
              <a
                href={item.adres}
                target="_blank"
                className="text-gray-700 font-medium hover:underline break-all"
              >
                {item.adres}
              </a>
              <p className="text-gray-500 text-xs">{item.date}</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
