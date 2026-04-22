const applicationService = require("../services/application.service");

function submitApplication(req, res) {
  const application = applicationService.submitApplication(req.body, req.user.sub);
  res.status(201).json(application);
}

function listApplicationsByOffer(req, res) {
  const applications = applicationService.listApplicationsByOffer(
    req.params.offerId
  );
  res.status(200).json(applications);
}

module.exports = {
  submitApplication,
  listApplicationsByOffer
};

