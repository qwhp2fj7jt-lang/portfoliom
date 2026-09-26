const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, sparse: true },
    name: String,
    nickname: String,
    image: String,
    description: String,
    konum:String,
    likes: {
      type: [String], 
      default: [],
    },
    comments: [
      {
        text: String,
        nickname:String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);