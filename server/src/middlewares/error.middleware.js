function notFoundMiddleware(req, res) {
  res.status(404).json({
    message: "Route not found."
  });
}

function errorMiddleware(error, req, res, next) {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    message: error.message || "Internal server error."
  });
}

module.exports = {
  notFoundMiddleware,
  errorMiddleware
};

