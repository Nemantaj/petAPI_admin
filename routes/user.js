const express = require("express");
const isAdmin = require("../middlewares/is-admin");
const usersController = require("../controllers/user.controller");

const router = express.Router();

router.get("/get-users", isAdmin, usersController.getAllUsers);

module.exports = router;
