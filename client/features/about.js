import {
  InfoSection,
  AboutCard,
  AboutHeader,
  Skills,

  MyGoal,
} from "@/molecules";

import { Communication } from "@/widgets";

export default function About() {
  return (
    <main
      className="
        mx-auto
        min-h-screen
        max-w-5xl
        px-4
        py-12
        sm:px-6
        lg:px-8
      "
    >
  <div className="mx-auto max-w-3xl px-4 py-5">
        <AboutHeader
          baslik="Hakkımda"
          paragraf="Merhaba, ben Zeynep — Frontend Developer olarak modern web teknolojileriyle ölçeklenebilir, performans odaklı ve kullanıcı deneyimi yüksek arayüzler geliştiriyorum. Kod ve tasarımı bir araya getirerek fikirleri hızlı, etkili ve üretime hazır ürünlere dönüştürmeyi seviyorum."
        />

        <section className="mt-10 space-y-6">
          <InfoSection
            icon=""
            title="İlgi Alanlarım"
            items={[
              "Modern frontend developer ve ölçeklenebilir web mimarileri",
              "React ekosisteminde performans ve state management çözümleri geliştirme",
              "UI/UX tasarımlarını (Figma) production-ready React uygulamalarına dönüştürme",
              "Web performansı ve Core Web Vitals optimizasyonları",
            ]}
          />


        </section>

        <section className="mt-10">
          <AboutCard
            baslik="Modern Frontend Developer: Architecture & Performance Focused"
            paragraf="Modern Frontend Developer yaklaşımıyla ölçeklenebilir ve performans odaklı web uygulamaları geliştiriyorum. React ekosisteminde Redux ve Zustand kullanarak state management çözümleri tasarlıyor, Tailwind CSS ile modern, erişilebilir ve responsive arayüzler oluşturuyorum."
            paragrafOne="Temiz mimari prensiplerini (SOLID ve component-based architecture) dikkate alarak yeniden kullanılabilir, sürdürülebilir ve bakım kolaylığı yüksek kod yapıları kurmaya odaklanıyorum. RESTful API entegrasyonlarında deneyimliyim ve kullanıcı deneyimini performans metrikleri (Core Web Vitals) üzerinden optimize etmeyi önemsiyorum."
            paragrafTwo="Agile süreçlerinde JIRA kullanarak ekip içi iş akışlarına aktif katkı sağlıyorum. Analitik düşünme ve problem çözme becerilerimle, sadece UI geliştiren değil aynı zamanda sistem tasarımını da düşünen bir frontend developer olarak sürekli kendimi geliştiriyorum."
          />
        </section>

        <section className="mt-10">
          <Skills />
        </section>

 

      
      </div>

      <div className="relative py-10  px-4 sm:px-0 mx-auto sm:max-w-5xl  ">


        <section className="relative mb-10">
          <div className="absolute -left-[7px] sm:-left-[9px] top-2 h-4 w-4 rounded-full bg-blue-500 ring-8 ring-blue-500/10" />

          <p className="text-xs lowercase tracking-[0.25em] text-gray-500 dark:text-white">
            kariyer Vizyonu
          </p>

          <div className="mt-2">
            <MyGoal
              baslik="Hedeflerim"
              paragraf="Ölçeklenebilir sistemler tasarlayan ve yüksek performanslı kullanıcı deneyimleri üreten ekiplerde aktif rol almayı; frontend mimarisi, performans optimizasyonu ve ürün ölçeklenebilirliği konularında derinleşmeyi hedefliyorum."
            />
          </div>
        </section>

        <section className="relative">
          <div className="absolute -left-[7px] sm:-left-[9px] top-2 h-4 w-4 rounded-full bg-violet-500 ring-8 ring-violet-500/10" />

          <p className="text-xs lowercase tracking-[0.25em] text-gray-500  dark:text-white">
            hizmetler
          </p>

          <div className="mt-2">
            <MyGoal
              baslik="Neler Sunuyorum"
              paragraf="React, Next.js ve TypeScript kullanarak modern, performans odaklı ve ölçeklenebilir web uygulamaları geliştiriyorum."
            />
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Performance",
                "Responsive UI",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border text-gray-700 dark:text-gray-400 border-zinc-300 dark:border-gray-800 bg-zinc-50 dark:bg-zinc-900 py-1 px-2 text-sm font-medium transition "
                >
                  {item.toLowerCase()}
                </span>
              ))}
            </div>

            <a
              href="https://bionluk.com/zeynepbass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit mx-auto gap-3 rounded-xl border border-zinc-200  bg-white  text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-200"
            >
              <img
                src="/images/icons/bionluk.png"
                className="h-6 w-6 rounded-full "
                alt="Bionluk"
              />
              Bionluk Profilim → &nbsp;
            </a>
          </div>
        </section>
      </div>
      <section className="mx-auto max-w-3xl px-4 py-10">
          <Communication />
        </section>
    </main>
  );
}
