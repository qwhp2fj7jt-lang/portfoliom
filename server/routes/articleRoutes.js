const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.js");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  getAllArticles,
  getArticleBySlug,
  createArticle,
} = require("../controllers/articles");

router.get("/", getAllArticles);

router.get("/:slug", getArticleBySlug);

router.post(
  "/",
  authMiddleware,
  upload.single("pdf"),
  createArticle
);

module.exports = router;
