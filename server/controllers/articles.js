const Article = require("../models/Article");
const { cleanString } = require("../middleware/validate");

const parseJson = (value) => {
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return undefined;
  }
};

const toItem = (item) => ({
  text: cleanString(item?.text, 5000),
  subItems: Array.isArray(item?.subItems) ? item.subItems.map((s) => cleanString(s, 2000)).filter(Boolean) : [],
});

const toSection = (section) => ({
  heading: cleanString(section?.heading, 300),
  subtitle: cleanString(section?.subtitle, 1000),
  items: Array.isArray(section?.items) ? section.items.map(toItem) : [],
});

const toImage = (image) =>
  image && typeof image === "object"
    ? { url: cleanString(image.url, 500), alt: cleanString(image.alt, 300), caption: cleanString(image.caption, 500) }
    : undefined;

exports.getAllArticles = async (req, res) => {
  try {
    const sort = req.query.sort === "asc" ? "asc" : "desc";
    const category = cleanString(req.query.category, 100);
    const subCategory = cleanString(req.query.subCategory, 100);

    const filter = {};

    if (category && category !== "all") {
      filter.category = category;
    }

    if (subCategory && subCategory !== "all") {
      filter.subCategory = subCategory;
    }

    const sortOption =
      sort === "asc"
        ? { createdAt: 1 }
        : { createdAt: -1 };

    const articles = await Article.find(filter).sort(sortOption).lean();

    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
};

exports.getArticleBySlug = async (req, res) => {
  try {
    const slug = cleanString(req.params.slug, 200);
    const article = await Article.findOne({ slug }).lean();

    if (!article) {
      return res.status(404).json({
        message: "Makale bulunamadı",
      });
    }

    const tableOfContents = (article.sections ?? []).map((section, index) => ({
      index: index + 1,
      heading: section.heading,
    }));

    res.status(200).json({
      article,
      tableOfContents,
    });
  } catch (err) {
    res.status(500).json({
      message: "Sunucu hatası",
    });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const body = req.body ?? {};
    const sections = parseJson(body.sections);

    const articleData = {
      title: cleanString(body.title, 300),
      slug: cleanString(body.slug, 200).toLowerCase(),
      subtitle: cleanString(body.subtitle, 500),
      summary: cleanString(body.summary, 1000),
      category: cleanString(body.category, 100),
      image: toImage(parseJson(body.image)),
      sections: Array.isArray(sections) ? sections.map(toSection) : [],
    };

    if (!articleData.title || !articleData.category || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(articleData.slug)) {
      return res.status(400).json({ message: "Başlık, kategori ve geçerli bir slug gerekli" });
    }

    if (await Article.exists({ slug: articleData.slug })) {
      return res.status(409).json({ message: "Bu slug zaten kullanılıyor" });
    }

    if (req.file) {
      articleData.pdf = {
        url: `/uploads/pdfs/${req.file.filename}`,
        name: cleanString(req.file.originalname, 200),
      };
    }

    const newArticle = await Article.create(articleData);

    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({
      message: "Sunucu hatası",
    });
  }
};
