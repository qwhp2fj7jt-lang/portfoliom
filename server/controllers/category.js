const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const { title, slug,subCategories } = req.body;

    const category = await Category.create({
      title,
      slug,
      subCategories,
    });

    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getCategories = async (req, res) => {
    try {
      const categories = await Category.find().sort({ createdAt: -1 });
  
      res.json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };