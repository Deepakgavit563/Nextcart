const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");

const errorMiddleware = require("./middleware/error.middleware");

const app = express();

const healthRoutes = require("./routes/health.routes");

// SECURITY MIDDLEWARE
app.use(helmet());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.use(mongoSanitize());

app.use(xss());

app.use(hpp());

app.use(compression());


// BASIC MIDDLEWARE
app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

app.use(cookieParser());


// ROUTES
app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/products", productRoutes);

app.use("/api/v1/orders", orderRoutes);

app.use("/api/v1/health", healthRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NextCart API Running",
  });
});


// GLOBAL ERROR HANDLER
app.use(errorMiddleware);

module.exports = app;