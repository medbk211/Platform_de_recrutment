const applicationModel = require("../models/application.model");
const jobOfferModel = require("../models/jobOffer.model");

function submitApplication(payload, candidateId) {
  const offer = jobOfferModel.findById(payload.offerId);

  if (!offer) {
    const error = new Error("Offer not found.");
    error.statusCode = 404;
    throw error;
  }

  const existingApplication = applicationModel.findByOfferAndCandidate(
    payload.offerId,
    candidateId
  );

  if (existingApplication) {
    const error = new Error("Application already exists for this offer.");
    error.statusCode = 409;
    throw error;
  }

  return applicationModel.create({
    offerId: Number(payload.offerId),
    candidateId: Number(candidateId),
    motivation: payload.motivation || ""
  });
}

function listApplicationsByOffer(offerId) {
  return applicationModel.findByOfferId(offerId);
}

module.exports = {
  submitApplication,
  listApplicationsByOffer
};
