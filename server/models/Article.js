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
const PdfSchema = new mongoose.Schema({
  url: String,
  name: String,
});
const SectionSchema = new mongoose.Schema({
  heading: String,
  subtitle: String,
  items: [ContentItemSchema],
});

// Blog sayfasının doğrudan render ettiği içerik blokları (başlık, paragraf, liste, kod, not).
const ContentBlockSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["heading", "paragraph", "list", "code", "note"], required: true },
    text: String,
    items: { type: [String], default: undefined },
    file: String,
    language: String,
    code: String,
  },
  { _id: false }
);

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true, sparse: true },
    subtitle: String,
    summary: String,
    readingTime: String,
    tags: [String],
    content: [ContentBlockSchema],
    category: {
      type: String,
      required: true,
      index: true,
    },

    pdf: PdfSchema, 
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