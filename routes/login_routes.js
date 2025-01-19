const router = require('express').Router();
const { login } = require('../controllers/login');
const authenticateToken = require('../middleware/auth');
const rateLimiter = require('../middleware/rateLimiter');

router.post('/login', rateLimiter, login);
router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.email}` });
});

module.exports = router;