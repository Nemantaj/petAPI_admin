const express = require("express");
const isAdmin = require("../middlewares/is-admin");
const breadsController = require("../controllers/bread.controller");
const ordersController = require("../controllers/orders.controller");

const router = express.Router();

router.post("/add-breeds", isAdmin, breadsController.createBreeds);
router.get("/delete/:id", isAdmin, breadsController.deleteBreed);
router.get("/get-breeds", isAdmin, breadsController.getBreeds);
router.get("/switch/:id", isAdmin, breadsController.switchBreed);
router.post("/edit/:id", isAdmin, breadsController.editBreed);
router.get("/get-orders", isAdmin, ordersController.getOrders);
router.get("/orders-by-pincode", isAdmin, ordersController.ordersByPincode);

module.exports = router;
