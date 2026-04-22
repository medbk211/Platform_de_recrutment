const applications = [];

function findByOfferAndCandidate(offerId, candidateId) {
  return (
    applications.find(
      (application) =>
        application.offerId === Number(offerId) &&
        application.candidateId === Number(candidateId)
    ) || null
  );
}

function findByOfferId(offerId) {
  return applications.filter(
    (application) => application.offerId === Number(offerId)
  );
}

function create(payload) {
  const application = {
    id: applications.length + 1,
    status: "ENVOYEE",
    submittedAt: new Date().toISOString(),
    ...payload
  };

  applications.push(application);
  return application;
}

module.exports = {
  findByOfferAndCandidate,
  findByOfferId,
  create
};

