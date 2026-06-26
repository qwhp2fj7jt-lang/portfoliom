import {
  InfoSection,
  AboutCard,
  AboutHeader,
  Skills,
  OpenSource,
  MyGoal,
} from "@/molecules";
import {Communication} from "@/widgets"
export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <AboutHeader
        baslik="Hakkımda"
        paragraf="Merhaba! Ben Zeynep, Yazılım Geliştiricisiyim. Kod ve tasarımı birleştirerek fikirleri hızlı ve etkili kullanıcı arayüzlerine dönüştürmeyi seviyorum."
      />
      <div className="pt-5">
        <InfoSection
          icon="🎯"
          title="İlgi Alanlarım"
          items={[
            "Kodlama ve yazılım geliştirme",
            "Figma ile prototipi React'ta geliştirmek",
          ]}
        />

        <InfoSection
          icon="🛠"
          title="Teknoloji ve Araçlar"
          items={[
            "Frontend: React, TypeScript, Next.js 14, Tailwind CSS, Zustand, Context API",
            "Backend: Node.js, Express, MongoDB",
            "Tasarım: Figma, UI/UX prototip tasarımı",
            "Araçlar: Git, GitHub, VS Code, Postman",
          ]}
        />
      </div>
      <AboutCard
        baslik="⚡ Frontend Engineer | React Specialist"
        paragraf="Modern Frontend Engineering yaklaşımıyla ölçeklenebilir ve performans odaklı web uygulamaları geliştiriyorum. React ekosisteminde Redux ve Zustand kullanarak state management çözümleri tasarlıyor, Tailwind CSS ile modern, erişilebilir ve responsive arayüzler oluşturuyorum."
        paragrafOne="Temiz mimari prensiplerini (SOLID ve component-based architecture) dikkate alarak yeniden kullanılabilir, sürdürülebilir ve bakım kolaylığı yüksek kod yapıları kurmaya odaklanıyorum. RESTful API entegrasyonlarında deneyimliyim ve kullanıcı deneyimini performans metrikleri (Core Web Vitals) üzerinden optimize etmeyi önemsiyorum."
        paragrafTwo="Agile süreçlerinde JIRA kullanarak ekip içi iş akışlarına aktif katkı sağlıyorum. Analitik düşünme ve problem çözme becerilerimle, sadece UI geliştiren değil aynı zamanda sistem tasarımını da düşünen bir frontend engineer olarak sürekli kendimi geliştiriyorum."
      />

      <Skills />
      <OpenSource
        baslik="Proje Geliştirme Yaklaşımı"
        paragraf="Modern frontend yaklaşımlarını uygulamalı projelere dönüştürerek açık kaynak ekosistemine katkı sağlıyorum. Özellikle Next.js tabanlı boilerplate yapıları ve çeşitli yardımcı araçlar geliştirerek geliştiricilerin işini kolaylaştırmayı hedefliyorum."
        paragrafOne="Kişisel blogumda ise frontend teknikleri, pratik çözümler ve proje deneyimlerimi paylaşarak toplulukla bilgi ve deneyim alışverişinde bulunuyorum."
      />
      <Communication />
      <div className="flex flex-col gap-4 md:flex-row">
  
  <div className="lg:p-6 p-4 rounded-2xl shadow-md dark:bg-zinc-900 bg-white flex items-start gap-4 dark:text-gray-300 text-gray-700 text-sm md:text-base">
    <MyGoal
      baslik="Hedeflerim"
      paragraf="Senior frontend geliştirici olarak ilerlemek, daha büyük ve ölçeklenebilir projelerde sorumluluk alarak kendimi sürekli geliştirmek istiyorum."
    />
  </div>

  <div className="lg:p-6 p-4 rounded-2xl shadow-md dark:bg-zinc-900 bg-white flex items-start gap-4 dark:text-gray-300 text-gray-700 text-sm md:text-base">
    <MyGoal
      baslik="Hizmetlerim"
      paragraf="React ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyorum. Ürününüz için teknik katkı sağlamak veya yeni bir proje başlatmak isterseniz iletişim bölümünden bana ulaşabilirsiniz"
      baglanti={
        <a href="https://bionluk.com/zeynepbass" target="_blank">
          <img
            src="/images/icons/bionluk.png"
            width="20"
            height="20"
            className="rounded-full"
          />
        </a>
      }
    />
  </div>

</div>
    </div>
  );
}
