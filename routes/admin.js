const express = require("express");
const adminController = require("../controllers/admin.controller");

const router = express.Router();

router.post("/admin-login", adminController.adminLogin);
router.get("/request-otp/:email", adminController.sendRecoveryCodes);
router.post("/submit-otp", adminController.validateCode);
router.post("/change-password", adminController.changePassword);

module.exports = router;
