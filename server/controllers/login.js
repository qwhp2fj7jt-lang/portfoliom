const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { cleanString } = require("../middleware/validate");

const HASH_PREFIX = "scrypt";
const KEY_LENGTH = 64;

const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, KEY_LENGTH).toString("hex");
  return `${HASH_PREFIX}$${salt}$${hash}`;
};

const safeEqual = (a, b) => {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && crypto.timingSafeEqual(left, right);
};

const verifyPassword = (password, stored) => {
  if (!stored) return false;
  const [prefix, salt, hash] = stored.split("$");
  if (prefix === HASH_PREFIX && salt && hash) {
    const candidate = crypto.scryptSync(password, salt, KEY_LENGTH).toString("hex");
    return safeEqual(candidate, hash);
  }
  return safeEqual(password, stored);
};

exports.login = async (req, res) => {
  try {
    const email = cleanString(req.body?.email, 254);
    const password = typeof req.body?.password === "string" ? req.body.password.slice(0, 256) : "";

    if (!email || !password) {
      return res.status(400).json({ message: "E-posta ve şifre gerekli" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !verifyPassword(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (!user.password.startsWith(`${HASH_PREFIX}$`)) {
      user.password = hashPassword(password);
      await user.save();
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d", algorithm: "HS256" }
    );

    res.json({ token, user: { _id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
};
