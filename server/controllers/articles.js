const Article = require("../models/Article");

// 📌 Tüm makaleleri listele (filtre: en yeni / en eski)
exports.getAllArticles = async (req, res) => {
  try {
    const sort = req.query.sort || "desc";
    const category = req.query.category;

    // SORT
    const sortOption =
      sort === "asc"
        ? { createdAt: 1 }
        : { createdAt: -1 };

    // FILTER
    const filter = {};

    if (category && category !== "all") {
      filter.category = category;
    }

    const articles = await Article.find(filter).sort(sortOption);

    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 Tek makale detay
exports.getArticleBySlug = async (req, res) => {
  try {
    const article = await Article.findOne({
      slug: req.params.slug,
    });

    if (!article) {
      return res.status(404).json({
        message: "Makale bulunamadı",
      });
    }

    const tableOfContents = article.sections.map((section, index) => ({
      index: index + 1,
      heading: section.heading,
    }));

    res.status(200).json({
      article,
      tableOfContents,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// 📌 Makale oluştur
exports.createArticle = async (req, res) => {
  try {
    const newArticle = await Article.create(req.body);
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};