const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NextCart API Running",
  });
});

module.exports = app;