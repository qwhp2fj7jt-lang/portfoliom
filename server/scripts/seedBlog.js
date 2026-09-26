require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const path = require("path");
const { pathToFileURL } = require("url");
const mongoose = require("mongoose");
const Article = require("../models/Article");
const Category = require("../models/Category");

// Kaynak: sitedeki statik blog yazıları. `npm run seed:blog` ile çalıştırılır (TS dosyasını okur).
const POSTS_FILE = path.join(__dirname, "..", "..", "client", "src", "features", "blog", "data", "posts.ts");

const TR_MAP = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" };
const slugify = (text) =>
  text
    .toLocaleLowerCase("tr-TR")
    .replace(/[çğıöşü]/g, (ch) => TR_MAP[ch])
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

async function main() {
  const { posts } = await import(pathToFileURL(POSTS_FILE).href);
  await mongoose.connect(process.env.MONGO_URI);
  await Promise.all([Article.syncIndexes(), Category.syncIndexes()]);

  const titles = [...new Set(posts.map((p) => p.category))];
  const categories = await Category.bulkWrite(
    titles.map((title) => ({
      updateOne: {
        filter: { slug: slugify(title) },
        update: { $setOnInsert: { title, slug: slugify(title), subCategories: [] } },
        upsert: true,
      },
    }))
  );

  // Sadece eksik yazıları ekler; veritabanında düzenlenmiş yazıların üzerine yazmaz.
  const articles = await Article.bulkWrite(
    posts.map((post) => ({
      updateOne: {
        filter: { slug: post.slug },
        update: {
          $setOnInsert: {
            slug: post.slug,
            title: post.title,
            summary: post.excerpt,
            subtitle: post.lead,
            category: slugify(post.category),
            readingTime: post.readingTime,
            tags: post.tags ?? [],
            content: post.content ?? [],
            sections: [],
            createdAt: new Date(post.date),
            updatedAt: new Date(post.date),
          },
        },
        upsert: true,
      },
    })),
    { timestamps: false }
  );

  console.log(`Kategoriler: ${categories.upsertedCount} eklendi, ${titles.length - categories.upsertedCount} zaten vardı`);
  console.log(`Yazılar: ${articles.upsertedCount} eklendi, ${posts.length - articles.upsertedCount} zaten vardı`);
  await mongoose.disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
