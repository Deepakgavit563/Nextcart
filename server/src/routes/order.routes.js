const express = require("express");

const {
  createOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");

const {
  protect,
  authorize,
} = require("../middleware/auth.middleware");

const router = express.Router();


// user routes
router.post(
  "/new",
  protect,
  createOrder
);

router.get(
  "/me",
  protect,
  myOrders
);

router.get(
  "/:id",
  protect,
  getSingleOrder
);


// admin routes
router.get(
  "/admin/all",
  protect,
  authorize("admin"),
  getAllOrders
);

router.put(
  "/admin/:id",
  protect,
  authorize("admin"),
  updateOrder
);

router.delete(
  "/admin/:id",
  protect,
  authorize("admin"),
  deleteOrder
);

module.exports = router;