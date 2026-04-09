const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
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