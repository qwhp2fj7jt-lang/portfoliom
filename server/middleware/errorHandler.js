const multer = require("multer");

exports.notFound = (req, res) => {
  res.status(404).json({ message: "Kaynak bulunamadı" });
};

exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  if (err instanceof multer.MulterError) {
    const message = err.code === "LIMIT_FILE_SIZE" ? "Dosya boyutu çok büyük" : "Geçersiz dosya yüklemesi";
    return res.status(400).json({ message });
  }

  if (err.type === "entity.parse.failed" || err.type === "entity.too.large") {
    return res.status(err.status || 400).json({ message: "Geçersiz istek" });
  }

  if (err.expose && err.status && err.status < 500) {
    return res.status(err.status).json({ message: err.message });
  }

  res.status(500).json({ message: "Sunucu hatası" });
};
