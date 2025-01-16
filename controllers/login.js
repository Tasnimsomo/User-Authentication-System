const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        // get email and password from request body
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });

        // if user does not exist, return error
        if (!user) {
            res.status(400).json({ message: "user not found" });
        }

        // check if password is valid
        const isPasswordValid = bcrypt.compare(user.pasword, password);
        if (!isPasswordValid) {
            res.status(400).json({ message: "invalid password" });
        }

        // create token
        const token = jwt.sign(
            {
                email: user.email,
                userId: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Successfully logged in",
            token,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}