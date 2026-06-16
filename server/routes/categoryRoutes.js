const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
} = require("../controllers/category");

router.post("/", createCategory);
router.get("/", getCategories);

module.exports = router;