const express = require("express");
const jobOfferController = require("../controllers/jobOffer.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const asyncHandler = require("../utils/asyncHandler");

const router = express.Router();

router.get("/", jobOfferController.listOffers);
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["recruteur", "admin"]),
  asyncHandler(jobOfferController.createOffer)
);

module.exports = router;

