const express = require('express');
const { sendContactEmail } = require('../controller/contact.controller.js');
const { contactRateLimiter } = require('../middleware/rateLimiter.middleware.js');

const router = express.Router();
router.post('/', contactRateLimiter, sendContactEmail);

module.exports = router;