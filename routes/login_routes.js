const router = require('express').Router();
const { login } = require('../controllers/login');
const authenticateToken = require('../middleware/auth');


router.post('/login', login);
router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the profile page' });
});

module.exports = router;