const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.js");
const {
  getAllArticles,
  getArticleBySlug,
  createArticle,
} = require("../controllers/articles");


router.get("/", getAllArticles);


router.get("/:slug", getArticleBySlug);

router.post(
  "/",
  upload.single("pdf"),
  createArticle
);

module.exports = router;