import type { Project } from "../types";

export const projects: Project[] = [
  {
    num: "01",
    name: "PDOS",
    subtitle: "Kişisel Veri ve Verimlilik Yönetim Sistemi",
    url: "https://github.com/zeynepbass/personal-data-operating-system",
    description:
      "Görevleri, notları, hedefleri, dokümanları ve günlük aktiviteleri tek bir çalışma alanında toplayan kişisel verimlilik uygulaması. Component-driven development, temiz kod prensipleri ve ölçeklenebilir bir frontend mimarisi üzerine kurgulandı.",
    features: ["Görev yönetimi", "Not ve doküman yönetimi", "Hedef takibi", "Aktivite geçmişi"],
  },
  {
    num: "02",
    name: "Milk",
    subtitle: "Yerel Üretici ve Tüketici Pazar Platformu",
    url: "https://github.com/zeynepbas/milk",
    description:
      "Yerel üreticileri tüketicilerle doğrudan buluşturan pazar platformu. Gerçek zamanlı mesajlaşma ve sosyal etkileşim özellikleriyle alıcı ile satıcı arasındaki iletişimi aracısız ve anlık hale getirir.",
    features: ["Gerçek zamanlı mesajlaşma", "Ürün listeleme", "Sosyal etkileşim"],
  },
  {
    num: "03",
    name: "Workist",
    subtitle: "Freelance Hizmet ve İlan Platformu",
    url: "https://github.com/zeynepbas/workist",
    description:
      "Kullanıcıların freelance hizmet ilanı oluşturup yönetebildiği, hizmet verenlerle doğrudan yazışabildiği ve aldıkları hizmeti değerlendirebildiği uçtan uca bir freelance platformu.",
    features: ["İlan yönetimi", "Kullanıcılar arası sohbet", "Hizmet değerlendirme"],
  },
  {
    num: "04",
    name: "Hizmet Kap",
    subtitle: "Kişiye Özel Hizmet İlan Platformu",
    url: "https://github.com/zeynepbas/service-Port",
    description:
      "İhtiyaca göre hizmet ilanı oluşturma, ilanları yönetme ve hizmet sağlayıcıları değerlendirme süreçlerini tek bir akışta birleştiren web uygulaması.",
    features: ["İlan oluşturma", "İlan yönetimi", "Değerlendirme sistemi"],
  },
  {
    num: "05",
    name: "Stack Diet",
    subtitle: "Sağlıklı Yaşam Odaklı Sosyal Platform",
    url: "https://github.com/zeynepbas/stack-diet",
    description:
      "Sağlıklı yaşam içeriklerinin paylaşıldığı sosyal platform. Kullanıcılar gönderi paylaşabilir, içerikleri beğenip yorumlayabilir, birbirini takip edebilir ve profillerini yönetebilir.",
    features: ["Gönderi paylaşımı", "Beğeni ve yorum", "Takip sistemi", "Profil yönetimi"],
  },
];
