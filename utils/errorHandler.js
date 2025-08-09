const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message, { stack: err.stack });

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
