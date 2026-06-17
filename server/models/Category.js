const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
      required: true,
    },

    subCategories: [
      {
        name: {
          type: String,
          required: true,
        },
        slug: {
          type: String,
          required: true,
        },
        label: {
          type: String,
          required: true,
        },
        icon: String,
        image: String,
        color: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);