const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = err.message || 'Server Error';

  /* =====================================
MONGODB INVALID OBJECT ID
===================================== */

  if (err.name === 'CastError') {
    statusCode = 400;

    message = 'Invalid ID';
  }

  /* =====================================
MONGODB DUPLICATE KEY
===================================== */

  if (err.code === 11000) {
    statusCode = 400;

    message = 'Duplicate field value entered';
  }

  /* =====================================
MONGODB VALIDATION ERROR
===================================== */

  if (err.name === 'ValidationError') {
    statusCode = 400;

    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(', ');
  }

  /* =====================================
JWT ERROR
===================================== */

  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;

    message = 'Invalid token';
  }

  /* =====================================
JWT EXPIRED
===================================== */

  if (err.name === 'TokenExpiredError') {
    statusCode = 401;

    message = 'Token expired';
  }

  /* =====================================
FINAL RESPONSE
===================================== */

  res.status(statusCode).json({
    success: false,

    message,

    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandler;
