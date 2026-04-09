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
        paragraf="Modern web uygulamaları geliştiren, React ekosisteminde uzmanlaşmış bir Frontend Engineer’ım. Redux ve Zustand ile ölçeklenebilir state yönetimi çözümleri geliştiriyor, Tailwind CSS ile performanslı ve responsive arayüzler tasarlıyorum."
        paragrafOne="Temiz, sürdürülebilir ve yeniden kullanılabilir kod yazımını önceliklendirerek yüksek performanslı kullanıcı deneyimleri oluşturuyorum. RESTful API entegrasyonlarında deneyimliyim ve Agile süreçlerde JIRA aracını etkin şekilde kullandım."
        paragrafTwo="Analitik düşünme ve problem çözme odaklıyım; kullanıcı dostu ve maintainable çözümler üretirken React ekosistemindeki en iyi pratikleri uygulamayı ve sürekli gelişmeyi hedefliyorum."
      />

      <Skills />
      <OpenSource
        baslik="Proje Geliştirme Yaklaşımı"
        paragraf="Modern frontend yaklaşımlarını uygulamalı projelere dönüştürerek açık kaynak ekosistemine katkı sağlıyorum. Özellikle Next.js tabanlı boilerplate yapıları ve çeşitli yardımcı araçlar geliştirerek geliştiricilerin işini kolaylaştırmayı hedefliyorum."
        paragrafOne="Kişisel blogumda ise frontend teknikleri, pratik çözümler ve proje deneyimlerimi paylaşarak toplulukla bilgi ve deneyim alışverişinde bulunuyorum."
      />
      <Communication />
      <div className="flex flex-col gap-4 md:flex-row">
  
  <div className="lg:p-6 p-4 rounded-2xl shadow-md dark:bg-zinc-900 bg-white flex items-start gap-4 dark:text-white text-gray-700 text-sm md:text-base">
    <MyGoal
      baslik="Hedeflerim"
      paragraf="Senior frontend geliştirici olarak ilerlemek, daha büyük ve ölçeklenebilir projelerde sorumluluk alarak kendimi sürekli geliştirmek istiyorum."
    />
  </div>

  <div className="lg:p-6 p-4 rounded-2xl shadow-md dark:bg-zinc-900 bg-white flex items-start gap-4 dark:text-white text-gray-700 text-sm md:text-base">
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
