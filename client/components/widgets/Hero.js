"use client";

import { useRouter } from "next/navigation";
import { AboutCard } from "@/molecules";
import { CustomButton } from "@/atoms";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const router = useRouter();

  return (
    <>
      <section className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
        {/* Avatar */}
        <div className="relative shrink-0">
          <img
            src="/images/profile.jpeg"
            alt="Zeynep Baş"
            className="h-24 w-24 rounded-full border border-gray-100 p-1 shadow-md dark:border-gray-800
                       sm:h-28 sm:w-28
                       md:h-32 md:w-32"
          />

          <span
            className="absolute bottom-0 left-1 flex h-6 w-6 items-center justify-center
                       rounded-full bg-white shadow-md dark:bg-zinc-900"
          >
            <CodeBracketIcon className="h-4 w-4 text-primary dark:text-yellow-500" />
          </span>
        </div>

        {/* Bilgiler */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Zeynep Baş
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            React Frontend Engineer | Architecture & Performance Focused
          </p>

          <div className="mt-3 flex justify-center gap-5 text-xl md:justify-start">
            <a
              href="https://github.com/zeynepbass"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:scale-110"
            >
              🐙
            </a>

            <a
              href="mailto:baszynpp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="transition hover:scale-110"
            >
              📧
            </a>

            <a
              href="https://bionluk.com/zeynepbass"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bionluk"
              className="transition hover:scale-110"
            >
              🚀
            </a>

            <a
              href="https://www.linkedin.com/in/zeynepbasss/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:scale-110"
            >
              💼
            </a>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-left text-gray-700 leading-7">
          <AboutCard
            baslik="⚡ Teknik Yaklaşım"
            paragraf="React ekosisteminde uzmanlaşan bir Frontend Engineer olarak; Redux ve Zustand ile ölçeklenebilir state yönetimi çözümleri geliştiriyor, Tailwind CSS ile modern, duyarlı ve erişilebilir kullanıcı arayüzleri tasarlıyorum."
            paragrafOne="Temiz mimari prensiplerine uygun, yeniden kullanılabilir ve performans odaklı komponent yapıları oluşturmayı önemsiyorum. RESTful API entegrasyonlarında deneyimliyim ve Azure DevOps ile JIRA gibi araçları kullanarak Agile ekip süreçlerine aktif katkı sağlıyorum."
            paragrafTwo="Analitik düşünme yaklaşımıyla, kullanıcı odaklı ve sürdürülebilir çözümler üretirken React ekosistemi ve modern frontend mimarileri alanında uzmanlığımı derinleştirmeyi amaçlıyorum."
          />
        </div>

        <div className="mt-8 flex justify-center md:justify-start">
          <CustomButton
            text="Detaylı teknik bilgi →"
            onClick={() => router.push("/about")}
          />
        </div>
      </section>
    </>
  );
}
