const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,   // 5 minute window
    max: 5,                    // 5 attempts
    message: {
        status: 'error',
        message: 'Too many attempts. Try again in 5 minutes'
    }
});

module.exports = loginLimiter;