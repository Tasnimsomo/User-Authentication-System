const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,   // 5 minute window
    max: 10,                    // 10 attempts
    message: {
        status: 'error',
        message: 'Too many attempts. Try again in 5 minutes'
    }
});

module.exports = loginLimiter;