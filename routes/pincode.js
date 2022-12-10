const express = require("express");
const isAdmin = require("../middlewares/is-admin");
const pincodesController = require("../controllers/pincode.controller");

const router = express.Router();

router.post("/add-pincodes", isAdmin, pincodesController.addPincodes);
router.get("/switch-status/:id", isAdmin, pincodesController.switchPincode);
router.get("/delete/:id", isAdmin, pincodesController.deletePincode);
router.get("/get-pincodes", isAdmin, pincodesController.getPincodes);

module.exports = router;
