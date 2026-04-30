// const rateLimit = require('express-rate-limit');

// const contactRateLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 5,
//   message: { message: 'Too many requests from this IP, please try again later.' }
// });

// module.exports = { contactRateLimiter };


const rateLimit = require('express-rate-limit');

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Too many requests, please try later.",
});

module.exports = { contactRateLimiter };