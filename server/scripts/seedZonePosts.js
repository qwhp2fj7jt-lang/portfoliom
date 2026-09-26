require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const mongoose = require("mongoose");
const Post = require("../models/Post");

// Slug'lar client/src/features/zone/data/zone.ts içindeki id'lerle eşleşir.
const posts = [
  {
    slug: "z1",
    image: "/uploads/flowers.png",
    konum: "Kocaeli / Gölcük",
    description:
      "Çiçeklerle uğraşmak, renklerin içinde kaybolmak ve sadece anın tadını çıkarmak… Bazen hayatın koşuşturması arasında durup nefes almak gerekiyor. En sade anlar bile insanın içini en çok dolduran anlar oluyor.",
  },
  {
    slug: "z2",
    image: "/uploads/library.png",
    konum: "İstanbul / Salt Galata",
    description:
      "Bugün kütüphaneye gidip kendime güzel bir zaman ayırdım. Sessizliğin içinde kitap okuyup vakit geçirmek ruhuma iyi geldi. Bazen en güzel anlar, sade ve huzurlu geçen anlardır.",
  },
  {
    slug: "z3",
    image: "/uploads/camp.png",
    konum: "Bolu / Yedigöller",
    description: "Şehrin gürültüsünü geride bırakıp Bolu’nun doğasında kayboldum. Biraz huzur, biraz ben.",
  },
  {
    slug: "z4",
    image: "/uploads/travels.png",
    konum: "İstanbul / Beşiktaş",
    description:
      "Bugün şehirde biraz kaybolmaya, tarihin izlerini takip etmeye karar verdim. Her müze, geçmişten bugüne uzanan ayrı bir hikâye anlatıyor… Sessiz duvarların arasında dolaşırken zaman yavaşlıyor gibi. Yeni yerler görmek, farklı kültürlere dokunmak ve her adımda biraz daha öğrenmek iyi geliyor. Müze gezmek sadece görmek değil; hissetmek, anlamak ve düşünmek aslında.",
  },
];

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  await Post.syncIndexes();

  // Sadece eksik olanları ekler; mevcut beğeni ve yorumlara dokunmaz.
  const result = await Post.bulkWrite(
    posts.map((post) => ({
      updateOne: {
        filter: { slug: post.slug },
        update: {
          $setOnInsert: { ...post, name: "Zeynep Baş", nickname: "frontend engineer", likes: [], comments: [] },
        },
        upsert: true,
      },
    })),
  );

  console.log(`Eklenen: ${result.upsertedCount}, zaten var: ${posts.length - result.upsertedCount}`);
  await mongoose.disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
