const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        unique: true,
      },
  
      icon: String,
      image: String,
      color: String,
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Category", CategorySchema);