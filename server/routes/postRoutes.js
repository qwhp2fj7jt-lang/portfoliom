const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { interactionLimiter } = require("../middleware/rateLimits");
const { validObjectIdOrSlug } = require("../middleware/validate");
const { imageUpload } = require("../middlewares/upload");

const router = express.Router();

const {
  createPost,
  getPosts,
  likePost,
  addComment
} = require("../controllers/post");

router.post("/", authMiddleware, imageUpload.single("image"), createPost);
router.post("/like/:postId", interactionLimiter, validObjectIdOrSlug("postId"), likePost);
router.post("/comment/:postId", interactionLimiter, validObjectIdOrSlug("postId"), addComment);
router.get("/", getPosts);

module.exports = router;
