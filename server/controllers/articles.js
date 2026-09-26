const Article = require("../models/Article");

exports.getAllArticles = async (req, res) => {
  try {
    const { sort = "desc", category, subCategory } = req.query;

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

    const articles = await Article.find(filter).sort(sortOption);

    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
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
    const articleData = {
      ...req.body,
    };

    if (req.file) {
      articleData.pdf = {
        url: `/uploads/pdfs/${req.file.filename}`,
        name: req.file.originalname,
      };
    }

    const newArticle = await Article.create(articleData);

    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};