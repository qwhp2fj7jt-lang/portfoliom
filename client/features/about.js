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



        <AboutHeader
          baslik="Hakkımda"
          paragraf="Merhaba, ben Zeynep — Frontend Engineer olarak modern web teknolojileriyle ölçeklenebilir, performans odaklı ve kullanıcı deneyimi yüksek arayüzler geliştiriyorum. Kod ve tasarımı bir araya getirerek fikirleri hızlı, etkili ve üretime hazır ürünlere dönüştürmeyi seviyorum."
        />




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

<div className="flex flex-col gap-4 md:flex-row"> 
            <div className="lg:p-6 p-4 rounded-2xl shadow-md dark:bg-zinc-900 bg-white flex items-start gap-4 dark:text-gray-300 text-gray-700 text-sm md:text-base"> 
            <MyGoal baslik="Hedeflerim" paragraf="Modern frontend engineering alanında uzmanlaşarak, ölçeklenebilir sistemler tasarlayan ve yüksek performanslı kullanıcı deneyimleri üreten ekiplerde aktif rol almayı; frontend mimarisi, performans optimizasyonu ve ürün ölçeklenebilirliği konularında derinleşmeyi hedefliyorum." /> 
            </div> 
            <div className="lg:p-6 p-4 rounded-2xl shadow-md dark:bg-zinc-900 bg-white flex items-start gap-4 dark:text-gray-300 text-gray-700 text-sm md:text-base">
            <MyGoal baslik="Hizmetlerim" paragraf="React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyorum. Ürününüz için teknik katkı sağlamak veya yeni bir proje başlatmak isterseniz iletişim bölümünden bana ulaşabilirsiniz" baglanti={ <a href="https://bionluk.com/zeynepbass" target="_blank" aria-label="Bionluk profilimi yeni sekmede aç">
            <img src="/images/icons/bionluk.png" width="20" height="20" className="rounded-full" /> </a> } /> </div> 
            </div>


    </main>
  );
}
