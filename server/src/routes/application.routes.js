const express = require("express");
const applicationController = require("../controllers/application.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const asyncHandler = require("../utils/asyncHandler");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["candidat"]),
  asyncHandler(applicationController.submitApplication)
);

router.get(
  "/offer/:offerId",
  authMiddleware,
  roleMiddleware(["recruteur", "admin"]),
  applicationController.listApplicationsByOffer
);

module.exports = router;

