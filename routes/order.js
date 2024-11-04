// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { authenticate } = require("../middleware/auth");

// Define routes
router.post("/place-order", authenticate, orderController.placeOrder);
// router.post("/order", authenticate, orderController.productOrder);
router.post("/create-order", orderController.productOrder);
router.post("/verify-payment", authenticate, orderController.verifyPayment);
router.put("/:orderId/status", orderController.updateOrderStatusById);
router.get("/order-history/:customerId", orderController.getOrderHistory);
router.get("/", authenticate, orderController.getOrders);
router.get("/counts", orderController.getOrdersCounts);
router.post(
  "/checkout-session",
  authenticate,
  orderController.getCheckoutSession
);

router.post ("/:userId/:productId", orderController.creactOrder);

module.exports = router;
