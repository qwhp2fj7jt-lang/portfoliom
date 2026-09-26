const express = require("express");
const router = express.Router();
const { loginLimiter } = require("../middleware/rateLimits");

const { login } = require("../controllers/login");

router.post("/login", loginLimiter, login);

module.exports = router;
