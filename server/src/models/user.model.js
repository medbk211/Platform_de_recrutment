const bcrypt = require("bcryptjs");

const rawUsers = [
  {
    id: 1,
    fullName: "Candidat Demo",
    email: "candidate@example.com",
    password: "password123",
    role: "candidat"
  },
  {
    id: 2,
    fullName: "Recruteur Demo",
    email: "recruiter@example.com",
    password: "password123",
    role: "recruteur"
  },
  {
    id: 3,
    fullName: "Admin Demo",
    email: "admin@example.com",
    password: "password123",
    role: "admin"
  }
];

const demoUsers = rawUsers.map((user) => ({
  ...user,
  passwordHash: bcrypt.hashSync(user.password, 10)
}));

function findByEmail(email) {
  return demoUsers.find((user) => user.email === email) || null;
}

function listDemoAccounts() {
  return demoUsers.map(({ password, passwordHash, ...user }) => ({
    ...user,
    demoPassword: "password123"
  }));
}

module.exports = {
  findByEmail,
  listDemoAccounts
};

