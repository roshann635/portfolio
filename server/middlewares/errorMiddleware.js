const { error } = require('../utils/apiResponse');

const notFound = (req, res, next) => {
  res.status(404).json(error(`Not Found - ${req.originalUrl}`));
};

const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json(error(
    process.env.NODE_ENV === 'production' ? 'Server Error' : err.message
  ));
};

module.exports = { notFound, errorHandler };
