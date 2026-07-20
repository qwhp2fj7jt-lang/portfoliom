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


        <AboutHeader
          baslik="Hakkımda"
          paragraf="Merhaba, ben Zeynep — Frontend Engineer olarak modern web teknolojileriyle ölçeklenebilir, performans odaklı ve kullanıcı deneyimi yüksek arayüzler geliştiriyorum. Kod ve tasarımı bir araya getirerek fikirleri hızlı, etkili ve üretime hazır ürünlere dönüştürmeyi seviyorum."
        />



      
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



<section
  className="
    mt-12
    grid
    gap-6
    md:grid-cols-2
  "
>

  <div
    className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-gray-200/80
      bg-gradient-to-br
      from-white
      via-white
      to-blue-50
      p-1
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-2xl
      dark:border-gray-800
      dark:from-zinc-900
      dark:via-zinc-900
      dark:to-blue-950/20
    "
  >

    <div
      className="
        relative
        h-full
        rounded-[22px]
        bg-white
        p-6
        dark:bg-zinc-900
      "
    >

      <div
        className="
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-blue-500/10
          blur-2xl
          transition
          group-hover:bg-blue-500/20
        "
      />


      <div className="relative">

        <div
          className="
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-blue-50
            text-2xl
            shadow-sm
            dark:bg-blue-950/40
          "
        >
          🎯
        </div>


        <MyGoal
          baslik="Hedeflerim"
          paragraf="Modern frontend engineering alanında uzmanlaşarak, ölçeklenebilir sistemler tasarlayan ve yüksek performanslı kullanıcı deneyimleri üreten ekiplerde aktif rol almayı; frontend mimarisi, performans optimizasyonu ve ürün ölçeklenebilirliği konularında derinleşmeyi hedefliyorum."
        />

      </div>

    </div>

  </div>





  <div
    className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-gray-200/80
      bg-gradient-to-br
      from-white
      via-white
      to-purple-50
      p-1
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-2xl
      dark:border-gray-800
      dark:from-zinc-900
      dark:via-zinc-900
      dark:to-purple-950/20
    "
  >

    <div
      className="
        relative
        h-full
        rounded-[22px]
        bg-white
        p-6
        dark:bg-zinc-900
      "
    >

      <div
        className="
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-purple-500/10
          blur-2xl
          transition
          group-hover:bg-purple-500/20
        "
      />


      <div className="relative">

        <div
          className="
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-purple-50
            text-2xl
            shadow-sm
            dark:bg-purple-950/40
          "
        >
          🚀
        </div>


        <MyGoal
          baslik="Hizmetlerim"
          paragraf="React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyorum. Ürününüz için teknik katkı sağlamak veya yeni bir proje başlatmak isterseniz iletişim bölümünden bana ulaşabilirsiniz."
          baglanti={
            <a
              href="https://bionluk.com/zeynepbass"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bionluk profilimi yeni sekmede aç"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-gray-200
                bg-white
                px-3
                py-2
                text-sm
                font-medium
                text-gray-700
                transition-all
                hover:-translate-y-1
                hover:border-purple-400
                hover:text-purple-600
                hover:shadow-md
                dark:border-gray-700
                dark:bg-zinc-900
                dark:text-gray-300
                dark:hover:border-purple-500
                dark:hover:text-purple-400
              "
            >
              <img
                src="/images/icons/bionluk.png"
                width="22"
                height="22"
                alt="Bionluk"
                className="rounded-full"
              />

              Profilimi Gör
            </a>
          }
        />

      </div>

    </div>

  </div>

</section>


    </main>
  );
}
