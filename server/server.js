require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const crypto = require("crypto");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");

const categoryRoutes = require("./routes/categoryRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

process.env.JWT_SECRET ||= crypto.randomBytes(48).toString("hex");

mongoose.set("sanitizeFilter", true);
mongoose.set("strictQuery", true);

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://www.zeynepbas.dev",
  "https://zeynepbas.dev",
  "http://localhost:3000",
];

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

app.use(
  cors({
    origin: (origin, cb) => cb(null, !origin || allowedOrigins.includes(origin)),
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    maxAge: 600,
  })
);

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 600,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  })
);

app.use(express.json({ limit: "200kb" }));

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    dotfiles: "deny",
    index: false,
    maxAge: "7d",
    setHeaders: (res) => res.setHeader("X-Content-Type-Options", "nosniff"),
  })
);

app.use("/articles", articleRoutes);
app.use("/category", categoryRoutes);
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.get("/test", (req, res) => {
  res.send("OK");
});

app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT);
  })
  .catch(() => {
    process.exit(1);
  });
