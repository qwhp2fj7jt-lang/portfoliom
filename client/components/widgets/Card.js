"use client";
import { useState } from "react";
import {AboutHeader} from "@/molecules";
import {Button} from "@/atoms"
export default function Card({ project }) {
  return (
    <>
      <AboutHeader
        baslik="Projelerim"
        paragraf={
          <>
            Projelerimi modern React mimarisi ve ölçeklenebilir state yönetimi
            yaklaşımlarıyla geliştiriyor, temiz ve sürdürülebilir kod
            prensiplerini ön planda tutuyorum. Tüm çalışmalarımı düzenli
            versiyon kontrolü ile yönetiyor ve{" "}
            <a
              href="https://github.com/zeynepbass"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              GitHub
            </a>{" "}
            üzerinden yayınlıyorum.
          </>
        }
      />

      <div className="mx-auto max-w-6xl  grid grid-cols-1  mt-5 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {project &&
          project.map((item, index) => <ProjectCard key={index} item={item} />)}
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
        <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">
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
          onClick={() => setOpen(!open)}
          text={open ? "Kapat" : "Devamını gör"}
        />

        <div className="flex items-center gap-3 mt-4">
          <img
            className="w-9 h-9 rounded-full"
            src="/images/avatar.png"
            alt="Avatar"
          />

          <div className="text-sm">
            <a
              href={item.adres}
              target="_blank"
              className="text-gray-700 dark:text-white font-medium hover:underline break-all"
            >
              {item.adres}
            </a>
            <p className="text-gray-500 text-xs">{item.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
