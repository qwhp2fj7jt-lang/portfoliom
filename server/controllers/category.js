const Category = require("../models/Category");

// CREATE
exports.createCategory = async (req, res) => {
  try {
    const { name,label, slug, icon } = req.body;

    const category = await Category.create({
      name,
      label,
      slug,
      icon,
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