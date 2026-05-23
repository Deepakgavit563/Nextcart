const express = require("express");

const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/product.controller");

const {
  protect,
  authorize,
} = require("../middleware/auth.middleware");

const router = express.Router();


// public routes
router.get("/", getProducts);

router.get("/:id", getSingleProduct);


// admin routes
router.post(
  "/admin/create",
  protect,
  authorize("admin"),
  createProduct
);

router.put(
  "/admin/:id",
  protect,
  authorize("admin"),
  updateProduct
);

router.delete(
  "/admin/:id",
  protect,
  authorize("admin"),
  deleteProduct
);

router.put(
  "/review",
  protect,
  createProductReview
);

router.get(
  "/reviews",
  getProductReviews
);

router.delete(
  "/reviews",
  protect,
  authorize("admin"),
  deleteReview
);
module.exports = router;