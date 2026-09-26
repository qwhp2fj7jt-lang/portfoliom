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
