const mongoose = require("mongoose");
const Post = require("../models/Post");
const { cleanString } = require("../middleware/validate");

const NICKNAME_MAX = 40;
const COMMENT_MAX = 280;

// Paylaşım hem Mongo _id'si hem de slug (ör. "z1") ile bulunabilir.
const findPost = (ref) =>
  mongoose.isValidObjectId(ref) ? Post.findById(ref) : Post.findOne({ slug: String(ref) });

exports.createPost = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const post = await Post.create({
      userId: req.user.id,
      name: "Zeynep Baş",
      nickname: "frontend engineer",
      image: `/uploads/${req.file.filename}`,
      description: cleanString(req.body?.description, 2000),
      konum: cleanString(req.body?.konum, 120),
      likes: [],
      comments: [],
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const nickname = cleanString(req.body?.nickname, NICKNAME_MAX);

    if (!nickname) {
      return res.status(400).json({ message: "Nickname gerekli" });
    }

    const post = await findPost(postId);

    if (!post) {
      return res.status(404).json({ message: "Post bulunamadı" });
    }

    const alreadyLiked = post.likes.includes(nickname);

    if (alreadyLiked) {
      post.likes = post.likes.filter((n) => n !== nickname);
    } else {
      post.likes.push(nickname);
    }

    await post.save();

    return res.status(200).json({
      likesArray: post.likes,
      likes: post.likes.length,
      liked: !alreadyLiked,
    });
  } catch (error) {
    return res.status(500).json({ message: "Sunucu hatası" });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).lean();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const nickname = cleanString(req.body?.nickname, NICKNAME_MAX);
    const text = cleanString(req.body?.text, COMMENT_MAX);

    if (!nickname) {
      return res.status(400).json({ message: "Nickname gerekli" });
    }

    if (!text) {
      return res.status(400).json({ message: "Yorum boş olamaz" });
    }

    const post = await findPost(postId);

    if (!post) {
      return res.status(404).json({ message: "Post bulunamadı" });
    }

    post.comments.push({
      text,
      nickname,
    });

    await post.save();

    return res.status(200).json(post.comments);
  } catch (error) {
    return res.status(500).json({ message: "Sunucu hatası" });
  }
};
