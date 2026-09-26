import type { Project } from "../types";

export const projects: Project[] = [
  {
    num: "01",
    name: "PDOS",
    subtitle: "Personal Data Operating System",
    url: "https://github.com/zeynepbass/personal-data-operating-system",
    description:
      "Görevleri, notları, hedefleri, dokümanları ve günlük aktiviteleri tek bir platformdan yönetmek için geliştirilmiş kişisel veri sistemi.",
    features: ["Görevler", "Notlar", "Hedefler", "Dokümanlar"],
  },
  {
    num: "02",
    name: "Milk",
    subtitle: "Yerel Pazar Platformu",
    url: "https://github.com/zeynepbass/milk",
    description:
      "Yerel üreticiler ile tüketicileri buluşturan, gerçek zamanlı mesajlaşma ve sosyal etkileşim özelliklerine sahip pazar yeri.",
    features: ["Gerçek zamanlı mesajlaşma", "Sosyal etkileşim", "Pazar yeri"],
  },
  {
    num: "03",
    name: "Hizmet Kap",
    subtitle: "Kişiye Özel Hizmet İlan Platformu",
    url: "https://github.com/zeynepbass/service-Port",
    description:
      "Kullanıcıların ihtiyaçlarına göre ilan oluşturup yönetebildiği ve hizmet değerlendirmesi yapabildiği platform.",
    features: ["İlan yönetimi", "Değerlendirme", "Kullanıcı profilleri"],
  },
  {
    num: "04",
    name: "Stack Diet",
    subtitle: "Kişiye Özel Hizmet İlan Platformu",
    url: "https://github.com/zeynepbass/stack-diet",
    description:
      "Stack Diet, kullanıcıların sağlıklı yaşam odaklı içerikler paylaşabildiği, gönderileri beğenip yorumlayabildiği, diğer kullanıcılarla etkileşim kurabildiği ve profillerini yönetebildiği sosyal bir web uygulamasıdır.",
    features: ["Gönderi paylaşımı", "Takipleşme", "Kullanıcı profilleri"],
  },
];
