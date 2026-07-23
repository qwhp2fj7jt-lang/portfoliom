"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CustomButton } from "@/atoms";
import projects from "@/shared/json/project.json";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  return (
    <section className="mx-auto max-w-3xl px-4">

    <div className="mb-5 text-center">
    <h2 className="text-xl dark:text-gray-300 md:text-2xl font-semibold mb-5 text-center">
    Projelerim
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-2 leading-relaxed">
      Açık kaynak kodlu projelerim
      </p>


      </div>
      <div className="divide-y divide-gray-200 dark:divide-zinc-800">
        {projects.slice(0, 3).map((project) => (
          <Link
            key={project.id}
            href={project.adres}
            className="group flex items-center justify-between py-6 transition-all duration-300"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors  dark:text-white">
                  {project.baslik}
                </h3>

                {project.yakinda && (
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-300">
                    Yakında
                  </span>
                )}
              </div>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
            </div>

            <ChevronRight
              size={18}
              className="ml-6 shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-300"
            />
          </Link>
        ))}
              <div className="mb-0">
                <CustomButton
                  text="Tüm projeleri göster →"
                  onClick={() => router.push("/projects")}
                />
              </div>
      </div>
    </section>
  );
}