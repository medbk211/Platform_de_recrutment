const offers = [
  {
    id: 1,
    title: "Developpeur Full Stack React / Node.js",
    location: "Tunis",
    contractType: "CDI",
    status: "PUBLIEE",
    companyName: "Nouveau Talent"
  },
  {
    id: 2,
    title: "Charge de recrutement",
    location: "Sfax",
    contractType: "CDD",
    status: "PUBLIEE",
    companyName: "RH Connect"
  }
];

function findAll() {
  return offers;
}

function findById(id) {
  return offers.find((offer) => offer.id === Number(id)) || null;
}

function create(payload) {
  const nextOffer = {
    id: offers.length + 1,
    ...payload
  };

  offers.push(nextOffer);
  return nextOffer;
}

module.exports = {
  findAll,
  findById,
  create
};

