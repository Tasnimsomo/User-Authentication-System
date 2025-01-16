const authenticateToken = require('../middleware/authenticateToken');

const router = require('express').Router();
const { loginController } = require('../controllers/loginController');

router.post('/', loginController);
router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the profile page' });
});
