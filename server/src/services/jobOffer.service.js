const jobOfferModel = require("../models/jobOffer.model");

function listOffers() {
  return jobOfferModel.findAll();
}

function createOffer(payload) {
  if (!payload.title || !payload.location || !payload.contractType) {
    const error = new Error("title, location and contractType are required.");
    error.statusCode = 400;
    throw error;
  }

  return jobOfferModel.create({
    title: payload.title,
    location: payload.location,
    contractType: payload.contractType,
    companyName: payload.companyName || "Entreprise a definir",
    status: payload.status || "EN_ATTENTE"
  });
}

module.exports = {
  listOffers,
  createOffer
};

