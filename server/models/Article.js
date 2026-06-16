const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  url: String,
  alt: String,
  caption: String,
});

const ContentItemSchema = new mongoose.Schema({
  text: String,
  subItems: [String],
});

const SectionSchema = new mongoose.Schema({
  heading: String,
  subtitle: String,
  items: [ContentItemSchema],
});

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    slug:String,
    subtitle: String,
    summary: String,
    category: {
      type: String,
      required: true,
      index: true,
    },

    image: ImageSchema,
    sections: [SectionSchema],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);