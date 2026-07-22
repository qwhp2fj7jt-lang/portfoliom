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
        max-w-3xl
        px-4
        py-12
        sm:px-6
        lg:px-8
      "
    >


        <AboutHeader
          baslik="Hakkımda"
          paragraf="Merhaba, ben Zeynep — Frontend Developer olarak modern web teknolojileriyle ölçeklenebilir, performans odaklı ve kullanıcı deneyimi yüksek arayüzler geliştiriyorum. Kod ve tasarımı bir araya getirerek fikirleri hızlı, etkili ve üretime hazır ürünlere dönüştürmeyi seviyorum."
        />



      
      <section className="mt-10 space-y-6">

        <InfoSection
          icon="🎯"
          title="İlgi Alanlarım"
          items={[
            "Modern frontend developer ve ölçeklenebilir web mimarileri",
            "React ekosisteminde performans ve state management çözümleri geliştirme",
            "UI/UX tasarımlarını (Figma) production-ready React uygulamalarına dönüştürme",
            "Web performansı ve Core Web Vitals optimizasyonları",
          ]}
        />


        <InfoSection
          icon="🛠"
          title="Teknoloji ve Araçlar"
          items={[
            "Frontend Developer: React, Next.js 14, TypeScript, Tailwind CSS",
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
          baslik="⚡ Modern Frontend Developer: Architecture & Performance Focused"
          paragraf="Modern Frontend Developer yaklaşımıyla ölçeklenebilir ve performans odaklı web uygulamaları geliştiriyorum. React ekosisteminde Redux ve Zustand kullanarak state management çözümleri tasarlıyor, Tailwind CSS ile modern, erişilebilir ve responsive arayüzler oluşturuyorum."
          paragrafOne="Temiz mimari prensiplerini (SOLID ve component-based architecture) dikkate alarak yeniden kullanılabilir, sürdürülebilir ve bakım kolaylığı yüksek kod yapıları kurmaya odaklanıyorum. RESTful API entegrasyonlarında deneyimliyim ve kullanıcı deneyimini performans metrikleri (Core Web Vitals) üzerinden optimize etmeyi önemsiyorum."
          paragrafTwo="Agile süreçlerinde JIRA kullanarak ekip içi iş akışlarına aktif katkı sağlıyorum. Analitik düşünme ve problem çözme becerilerimle, sadece UI geliştiren değil aynı zamanda sistem tasarımını da düşünen bir frontend developer olarak sürekli kendimi geliştiriyorum."
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


<div className="flex flex-col gap-4 md:flex-row">
            <div className="lg:p-6 p-4 rounded-2xl shadow-md dark:bg-zinc-900 bg-white flex items-start gap-4 dark:text-gray-300 text-gray-700 text-sm md:text-base"> 
            <MyGoal baslik="Hedeflerim" paragraf="Modern frontend developer alanında uzmanlaşarak, ölçeklenebilir sistemler tasarlayan ve yüksek performanslı kullanıcı deneyimleri üreten ekiplerde aktif rol almayı; frontend mimarisi, performans optimizasyonu ve ürün ölçeklenebilirliği konularında derinleşmeyi hedefliyorum." /> </div>
            <div className="lg:p-6 p-4 rounded-2xl shadow-md dark:bg-zinc-900 bg-white flex items-start gap-4 dark:text-gray-300 text-gray-700 text-sm md:text-base"> <MyGoal baslik="Hizmetlerim" paragraf="React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyorum. Ürününüz için teknik katkı sağlamak veya yeni bir proje başlatmak isterseniz iletişim bölümünden bana ulaşabilirsiniz" baglanti={ <a href="https://bionluk.com/zeynepbass" target="_blank" aria-label="Bionluk profilimi yeni sekmede aç"> <img src="/images/icons/bionluk.png" width="20" height="20" className="rounded-full" /> </a> } /> </div>  </div>


    </main>
  );
}
