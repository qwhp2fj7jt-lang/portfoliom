const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");


const router = express.Router();
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const {
  createPost,
  getPosts,
  likePost,
  addComment
} = require("../controllers/post");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

router.post("/", authMiddleware,upload.single("image"),createPost);
router.post("/like/:postId", likePost);
router.post("/comment/:postId", addComment);
router.get("/", getPosts);

module.exports = router;