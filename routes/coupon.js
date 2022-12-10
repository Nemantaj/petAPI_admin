const express = require("express");
const isAdmin = require("../middlewares/is-admin");
const couponsController = require("../controllers/coupon.controller");

const router = express.Router();

router.post("/create-coupon", isAdmin, couponsController.createCoupon);
router.post("/edit/:id", isAdmin, couponsController.editCoupon);
router.get("/delete/:id", isAdmin, couponsController.deleteCoupon);
router.get("/switch/:id", isAdmin, couponsController.switchCoupon);
router.get("/get-coupons", isAdmin, couponsController.getCoupons);

module.exports = router;
