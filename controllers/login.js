const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

exports.login = async (req, res) => {
    try {
        // get email and password from request body
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });

        // if user does not exist, return error
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // check if password is valid
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
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

        // send response with token
        res.status(200).json({
            message: "Successfully logged in",
            token,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
