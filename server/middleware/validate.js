const mongoose = require("mongoose");

exports.cleanString = (value, max) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
};

exports.validObjectId = (param) => (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params[param])) {
    return res.status(404).json({ message: "Kaynak bulunamadı" });
  }
  next();
};

exports.httpError = (status, message) => Object.assign(new Error(message), { status, expose: true });

const SLUG_PATTERN = /^[a-z0-9-]{1,64}$/i;

exports.validObjectIdOrSlug = (param) => (req, res, next) => {
  const value = req.params[param];
  if (!mongoose.isValidObjectId(value) && !SLUG_PATTERN.test(value)) {
    return res.status(404).json({ message: "Kaynak bulunamadı" });
  }
  next();
};
