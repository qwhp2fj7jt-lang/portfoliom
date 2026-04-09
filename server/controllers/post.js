const Post = require("../models/Post");
exports.createPost = async (req, res) => {
  try {
    const { description, konum } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const post = await Post.create({
      userId: req.user.id, // 👈 login user
      name: "Zeynep Baş",
      nickname: "frontend engineer",
      image: imageUrl,
      description,
      konum: konum,
      likes: [],
      comments: [],
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { nickname } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post bulunamadı" });
    }

    if (!nickname) {
      return res.status(400).json({ message: "Nickname gerekli" });
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
    return res.status(500).json({ message: "Server error", error });
  }
};
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
    console.log(req.json)
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
exports.addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { nickname, text } = req.body;

    if (!nickname) {
      return res.status(400).json({ message: "Nickname gerekli" });
    }

    if (!text) {
      return res.status(400).json({ message: "Yorum boş olamaz" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post bulunamadı" });
    }

    post.comments.push({
      text,
      nickname, // istersen schema’ya ekleyebilirsin
    });

    await post.save();

    return res.status(200).json(post.comments);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};