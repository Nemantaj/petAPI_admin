const express = require("express");
const isAdmin = require("../middlewares/is-admin");
const detailsController = require("../controllers/details.controller");

const router = express.Router();

router.post("/create-size", isAdmin, detailsController.createSize);
router.get("/switch/:id", isAdmin, detailsController.switchSize);
router.get("/delete/:id", isAdmin, detailsController.removeSize);
router.post("/edit/:id", isAdmin, detailsController.editSize);
router.get("/get-sizes", isAdmin, detailsController.getSizes);

module.exports = router;
