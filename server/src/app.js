const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NextCart API Running",
  });
});

module.exports = app;