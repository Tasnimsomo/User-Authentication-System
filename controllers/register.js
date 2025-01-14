const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // validate input fields 
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists, please login' });
    }


    // hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user and save to database 
    try {


        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        res.status(201).json({
            message: 'User created successfully',
            user
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}