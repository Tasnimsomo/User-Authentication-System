const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register = async (req, res) => {
    const { firstname, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    // Check for existing user
    const user = await User.find(email);
    if (user) {
        return res.status(400).json({ message: 'User already exists, please login' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        });

        const user = await newUser.save();
    }
    catch (err) {
        res.status(500).json(err);
    }
}