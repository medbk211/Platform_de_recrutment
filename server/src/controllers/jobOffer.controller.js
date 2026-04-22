const jobOfferService = require("../services/jobOffer.service");

function listOffers(req, res) {
  res.status(200).json(jobOfferService.listOffers());
}

function createOffer(req, res) {
  const offer = jobOfferService.createOffer(req.body);
  res.status(201).json(offer);
}

module.exports = {
  listOffers,
  createOffer
};

