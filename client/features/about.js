import {
  InfoSection,
  AboutCard,
  AboutHeader,
  Skills,
  OpenSource,
  MyGoal,
} from "@/molecules";

import { Communication } from "@/widgets";

export default function About() {
  return (
    <main
      className="
        mx-auto
        max-w-5xl
        px-4
        py-12
        sm:px-6
        lg:px-8
      "
    >

      {/* HEADER */}
      <section
        className="
          rounded-3xl
          border
          border-gray-200/70
          bg-gradient-to-b
          from-white
          to-gray-50
          p-6
          shadow-xl
          dark:border-gray-800
          dark:from-zinc-900
          dark:to-zinc-950
          sm:p-10
        "
      >

        <AboutHeader
          baslik="Hakkımda"
          paragraf="Merhaba, ben Zeynep — Frontend Engineer olarak modern web teknolojileriyle ölçeklenebilir, performans odaklı ve kullanıcı deneyimi yüksek arayüzler geliştiriyorum. Kod ve tasarımı bir araya getirerek fikirleri hızlı, etkili ve üretime hazır ürünlere dönüştürmeyi seviyorum."
        />

      </section>




      <div className="mt-10 space-y-6">

        <InfoSection
          icon="🎯"
          title="İlgi Alanlarım"
          items={[
            "Modern frontend engineering ve ölçeklenebilir web mimarileri",
            "React ekosisteminde performans ve state management çözümleri",
            "UI/UX tasarımlarını production-ready React uygulamalarına dönüştürme",
            "Web performansı ve Core Web Vitals optimizasyonları",
          ]}
        />


        <InfoSection
          icon="🛠"
          title="Teknoloji ve Araçlar"
          items={[
            "Frontend Engineering: React, Next.js 14, TypeScript, Tailwind CSS",
            "State Management & Architecture: Zustand, Context API",
            "Performance & UX: Core Web Vitals, responsive ve accessible UI",
            "Backend Integration: Node.js, Express, MongoDB, REST API",
            "UI/UX: Figma → production-ready component geliştirme",
            "Workflow: Git, GitHub, VS Code, Postman, Agile",
          ]}
        />

      </div>





      <section className="mt-10">

        <AboutCard
          baslik="⚡ Modern Frontend Engineering: Architecture & Performance Focused"
          paragraf="Modern frontend engineering yaklaşımıyla ölçeklenebilir ve performans odaklı web uygulamaları geliştiriyorum. React ekosisteminde Redux ve Zustand kullanarak state management çözümleri tasarlıyor, Tailwind CSS ile modern, erişilebilir ve responsive arayüzler oluşturuyorum."
          paragrafOne="Temiz mimari prensiplerini (SOLID ve component-based architecture) dikkate alarak yeniden kullanılabilir, sürdürülebilir ve bakım kolaylığı yüksek kod yapıları kurmaya odaklanıyorum."
          paragrafTwo="Agile süreçlerinde JIRA kullanarak ekip içi iş akışlarına katkı sağlıyor, performans metrikleri üzerinden kullanıcı deneyimini sürekli iyileştiriyorum."
        />

      </section>





      <section className="mt-10">
        <Skills />
      </section>





      <section className="mt-10">

        <OpenSource
          baslik="Proje Geliştirme Yaklaşımı"
          paragraf="Modern frontend yaklaşımlarını uygulamalı projelere dönüştürerek açık kaynak ekosistemine katkı sağlıyorum. Next.js tabanlı boilerplate yapıları ve geliştirici deneyimini artıran araçlar geliştiriyorum."
          paragrafOne="Kişisel blogumda frontend teknikleri, pratik çözümler ve proje deneyimlerimi paylaşarak toplulukla bilgi alışverişinde bulunuyorum."
        />

      </section>





      <section className="mt-10">
        <Communication />
      </section>

      <section
        className="
          mt-10
          grid
          gap-6
          md:grid-cols-2
        "
      >

        <div
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-lg
            transition
            hover:-translate-y-1
            hover:shadow-xl
            dark:border-gray-800
            dark:bg-zinc-900
          "
        >

          <MyGoal
            baslik="🎯 Hedeflerim"
            paragraf="Modern frontend engineering alanında uzmanlaşarak ölçeklenebilir sistemler tasarlayan ve yüksek performanslı kullanıcı deneyimleri üreten ekiplerde aktif rol almayı hedefliyorum."
          />

        </div>



        <div
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-lg
            transition
            hover:-translate-y-1
            hover:shadow-xl
            dark:border-gray-800
            dark:bg-zinc-900
          "
        >

          <MyGoal
            baslik="🚀 Hizmetlerim"
            paragraf="React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyorum. Yeni projeler veya teknik katkılar için iletişim bölümünden bana ulaşabilirsiniz."
            baglanti={
              <a
                href="https://bionluk.com/zeynepbass"
                target="_blank"
                aria-label="Bionluk profilimi aç"
                className="
                  inline-flex
                  rounded-full
                  border
                  p-1
                  transition
                  hover:scale-110
                  dark:border-gray-700
                "
              >
                <img
                  src="/images/icons/bionluk.png"
                  width="22"
                  height="22"
                  className="rounded-full"
                />
              </a>
            }
          />

        </div>


      </section>


    </main>
  );
}
