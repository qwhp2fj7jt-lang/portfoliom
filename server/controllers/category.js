const Category = require("../models/Category");
const { cleanString } = require("../middleware/validate");

const toSubCategory = (sub) => ({
  name: cleanString(sub?.name, 100),
  slug: cleanString(sub?.slug, 100),
  label: cleanString(sub?.label, 100),
  icon: cleanString(sub?.icon, 100) || undefined,
  image: cleanString(sub?.image, 500) || undefined,
  color: cleanString(sub?.color, 50) || undefined,
});

exports.createCategory = async (req, res) => {
  try {
    const title = cleanString(req.body?.title, 100);
    const slug = cleanString(req.body?.slug, 100);
    const subCategories = Array.isArray(req.body?.subCategories) ? req.body.subCategories.map(toSubCategory) : [];

    if (!title || !slug) {
      return res.status(400).json({ message: "Başlık ve slug gerekli" });
    }

    if (await Category.exists({ slug })) {
      return res.status(409).json({ message: "Bu slug zaten kullanılıyor" });
    }

    const category = await Category.create({
      title,
      slug,
      subCategories,
    });

    res.status(201).json(category);
  } catch (err) {
    const status = err.name === "ValidationError" ? 400 : 500;
    res.status(status).json({ message: status === 400 ? "Geçersiz kategori verisi" : "Sunucu hatası" });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 }).lean();

    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
};
