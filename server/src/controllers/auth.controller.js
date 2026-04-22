const authService = require("../services/auth.service");

async function login(req, res) {
  const result = await authService.login(req.body);
  res.status(200).json(result);
}

function getDemoAccounts(req, res) {
  const accounts = authService.getDemoAccounts();
  res.status(200).json(accounts);
}

module.exports = {
  login,
  getDemoAccounts
};

