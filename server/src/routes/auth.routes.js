const express = require("express");
const authController = require("../controllers/auth.controller");
const asyncHandler = require("../utils/asyncHandler");

const router = express.Router();

router.get("/demo-accounts", authController.getDemoAccounts);
router.post("/login", asyncHandler(authController.login));

module.exports = router;

