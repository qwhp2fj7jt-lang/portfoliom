const express = require("express");
const router = express.Router();

const {
  getAllArticles,
  getArticleBySlug,
  createArticle,
} = require("../controllers/articles");

// 📌 Liste + filtre
router.get("/", getAllArticles);

// 📌 Detay sayfa
router.get("/:slug", getArticleBySlug);

// 📌 Makale ekleme
router.post("/", createArticle);

module.exports = router;