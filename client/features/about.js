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
        min-h-screen
        max-w-5xl
        px-4
        py-12
        sm:px-6
        lg:px-8
      "
    >

  
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


      
      <section className="mt-10 space-y-6">

        <InfoSection
          icon="🎯"
          title="İlgi Alanlarım"
          items={[
            "Modern frontend engineering ve ölçeklenebilir web mimarileri",
            "React ekosisteminde performans ve state management çözümleri geliştirme",
            "UI/UX tasarımlarını (Figma) production-ready React uygulamalarına dönüştürme",
            "Web performansı ve Core Web Vitals optimizasyonları",
          ]}
        />


        <InfoSection
          icon="🛠"
          title="Teknoloji ve Araçlar"
          items={[
            "Frontend Engineering: React, Next.js 14, TypeScript, Tailwind CSS",
            "State Management & Architecture: Zustand, Context API, scalable frontend architecture patterns",
            "Performance & UX: Core Web Vitals optimization, responsive & accessible UI development",
            "Backend Integration: Node.js, Express, MongoDB, RESTful API design & integration",
            "UI/UX: Figma → production-ready component design and implementation",
            "Tools & Workflow: Git, GitHub, VS Code, Postman, Agile (JIRA)",
          ]}
        />

      </section>




      <section className="mt-10">

        <AboutCard
          baslik="⚡ Modern Frontend Engineering: Architecture & Performance Focused"
          paragraf="Modern Frontend Engineering yaklaşımıyla ölçeklenebilir ve performans odaklı web uygulamaları geliştiriyorum. React ekosisteminde Redux ve Zustand kullanarak state management çözümleri tasarlıyor, Tailwind CSS ile modern, erişilebilir ve responsive arayüzler oluşturuyorum."
          paragrafOne="Temiz mimari prensiplerini (SOLID ve component-based architecture) dikkate alarak yeniden kullanılabilir, sürdürülebilir ve bakım kolaylığı yüksek kod yapıları kurmaya odaklanıyorum. RESTful API entegrasyonlarında deneyimliyim ve kullanıcı deneyimini performans metrikleri (Core Web Vitals) üzerinden optimize etmeyi önemsiyorum."
          paragrafTwo="Agile süreçlerinde JIRA kullanarak ekip içi iş akışlarına aktif katkı sağlıyorum. Analitik düşünme ve problem çözme becerilerimle, sadece UI geliştiren değil aynı zamanda sistem tasarımını da düşünen bir frontend engineer olarak sürekli kendimi geliştiriyorum."
        />

      </section>




      <section className="mt-10">
        <Skills />
      </section>




      <section className="mt-10">

        <OpenSource
          baslik="Proje Geliştirme Yaklaşımı"
          paragraf="Modern frontend yaklaşımlarını uygulamalı projelere dönüştürerek açık kaynak ekosistemine katkı sağlıyorum. Özellikle Next.js tabanlı boilerplate yapıları ve çeşitli yardımcı araçlar geliştirerek geliştiricilerin işini kolaylaştırmayı hedefliyorum."
          paragrafOne="Kişisel blogumda ise frontend teknikleri, pratik çözümler ve proje deneyimlerimi paylaşarak toplulukla bilgi ve deneyim alışverişinde bulunuyorum."
        />

      </section>




      <section className="mt-10">
        <Communication />
      </section>



      {/* Goals */}
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
            group
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            dark:border-gray-800
            dark:bg-zinc-900
          "
        >

          <MyGoal
            baslik="🎯 Hedeflerim"
            paragraf="Modern frontend engineering alanında uzmanlaşarak, ölçeklenebilir sistemler tasarlayan ve yüksek performanslı kullanıcı deneyimleri üreten ekiplerde aktif rol almayı; frontend mimarisi, performans optimizasyonu ve ürün ölçeklenebilirliği konularında derinleşmeyi hedefliyorum."
          />

        </div>



        <div
          className="
            group
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            dark:border-gray-800
            dark:bg-zinc-900
          "
        >

          <MyGoal
            baslik="🚀 Hizmetlerim"
            paragraf="React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyorum. Ürününüz için teknik katkı sağlamak veya yeni bir proje başlatmak isterseniz iletişim bölümünden bana ulaşabilirsiniz."
            baglanti={
              <a
                href="https://bionluk.com/zeynepbass"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bionluk profilimi yeni sekmede aç"
                className="
                  inline-flex
                  rounded-full
                  border
                  border-gray-200
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
                  alt="Bionluk"
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
