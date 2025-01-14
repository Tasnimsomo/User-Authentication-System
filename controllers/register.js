const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    // Check for existing user
    const user = await User.find(email);
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        const user = await newUser.save();
    }
    catch (err) {
        res.status(500).json(err);
    }
}