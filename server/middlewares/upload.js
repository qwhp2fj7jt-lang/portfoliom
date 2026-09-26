const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { httpError } = require("../middleware/validate");

const uploadsRoot = path.join(__dirname, "..", "uploads");
const pdfDir = path.join(uploadsRoot, "pdfs");

fs.mkdirSync(pdfDir, { recursive: true });

const IMAGE_TYPES = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/avif": ".avif",
};

const storageFor = (dir, extensionOf) =>
  multer.diskStorage({
    destination: (req, file, cb) => cb(null, dir),
    filename: (req, file, cb) => cb(null, `${crypto.randomUUID()}${extensionOf(file)}`),
  });

const pdfUpload = multer({
  storage: storageFor(pdfDir, () => ".pdf"),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf" && path.extname(file.originalname).toLowerCase() === ".pdf") {
      cb(null, true);
    } else {
      cb(httpError(400, "Sadece PDF dosyası yüklenebilir"), false);
    }
  },
  limits: { fileSize: 60 * 1024 * 1024, files: 1 },
});

const imageUpload = multer({
  storage: storageFor(uploadsRoot, (file) => IMAGE_TYPES[file.mimetype]),
  fileFilter: (req, file, cb) => {
    if (IMAGE_TYPES[file.mimetype]) {
      cb(null, true);
    } else {
      cb(httpError(400, "Sadece JPG, PNG, WebP veya AVIF görsel yüklenebilir"), false);
    }
  },
  limits: { fileSize: 10 * 1024 * 1024, files: 1 },
});

module.exports = pdfUpload;
module.exports.imageUpload = imageUpload;
