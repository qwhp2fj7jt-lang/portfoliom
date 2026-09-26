const { rateLimit } = require("express-rate-limit");

const limiter = (windowMs, limit, message) =>
  rateLimit({
    windowMs,
    limit,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: { message },
  });

exports.loginLimiter = limiter(15 * 60 * 1000, 10, "Çok fazla giriş denemesi, lütfen daha sonra tekrar deneyin");
exports.interactionLimiter = limiter(60 * 1000, 30, "Çok fazla istek, lütfen biraz bekleyin");
