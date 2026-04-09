require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const postRoutes = require("./routes/postRoutes");
const userRoutes=require("./routes/userRoutes")
const app = express();
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 5000;

/**
 * DB CONNECT
 */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

/**
 * STATIC FILES
 */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/**
 * ROUTES
 */
app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.get("/test", (req, res) => {
    console.log("TEST ROUTE HIT");
    res.send("OK");
  });
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});