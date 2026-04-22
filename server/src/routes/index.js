const express = require("express");
const authRoutes = require("./auth.routes");
const jobOfferRoutes = require("./jobOffer.routes");
const applicationRoutes = require("./application.routes");

const router = express.Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "platform-de-recruitment-api"
  });
});

router.use("/auth", authRoutes);
router.use("/offres", jobOfferRoutes);
router.use("/candidatures", applicationRoutes);

module.exports = router;

