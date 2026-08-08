"use client";

import { AboutCard } from "@/molecules";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-5">
      <section className="flex flex-col items-center mt-2 gap-6 md:flex-row ">
        <div className="relative shrink-0">
          <Image
            src="/images/profile.jpeg"
            alt="Zeynep Baş"
            width={128}
            height={128}
            className="
    h-[100px] w-[100px] rounded-full border border-gray-100 p-1 shadow-md object-cover
    dark:border-gray-900
    sm:h-[100px] sm:w-[100px]

  "
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h5 className="text-sm font-semibold md:text-xl">Zeynep Baş</h5>

          <p className="mt-0 text-sm text-gray-500 sm:text-base">
            React Frontend Developer | Architecture & Performance Focused
          </p>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-left text-gray-700 leading-7">
          <AboutCard
            baslik="Teknik Yaklaşım"
            paragraf="React ekosisteminde uzmanlaşan bir Frontend Developer olarak; Redux ve Zustand ile ölçeklenebilir state yönetimi çözümleri geliştiriyor, Tailwind CSS ile modern, duyarlı ve erişilebilir kullanıcı arayüzleri tasarlıyorum."
            paragrafOne={
              <>
                Temiz mimari prensiplerine uygun, yeniden kullanılabilir ve
                performans odaklı komponent yapıları oluşturmayı önemsiyorum.
                RESTful API entegrasyonlarında deneyimliyim ve Azure DevOps ile
                JIRA gibi araçları kullanarak Agile ekip süreçlerine aktif katkı
                sağlıyorum. Projelerimi incelemek için{" "}
                <a
                  href="https://github.com/zeynepbass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center dark:text-yellow-400  gap-1 font-bold text-gray-600 underline hover:text-gray-600"
                >
                  <FaGithub className="h-4 w-4" />
                  github
                </a>{" "}
                profilime, profesyonel bağlantılar için{" "}
                <a
                  href="https://linkedin.com/in/zeynepbasss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center dark:text-yellow-400  font-bold gap-1 text-gray-600 underline hover:text-gray-600"
                >
                  <FaLinkedin className="h-4 w-4" />
                  linkedIn
                </a>{" "}
                hesabıma veya doğrudan iletişim için{" "}
                <a
                  href="mailto:baszynpp@gmail.com"
                  className="inline-flex items-center gap-1 text-gray-600 underline font-bold hover:text-gray-600 dark:text-yellow-400"
                >
                  <FaEnvelope className="h-4 w-4" />
                  email
                </a>{" "}
                adresime ulaşabilirsiniz.
              </>
            }
            paragrafTwo="Analitik düşünme yaklaşımıyla, kullanıcı odaklı ve sürdürülebilir çözümler üretirken React ekosistemi ve modern frontend mimarileri alanında uzmanlığımı derinleştirmeyi amaçlıyorum."
          />
        </div>
      </section>
    </div>
  );
}
