const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const router = require('./routes/register_routes');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to database", error.message);
    })


// Middleware
app.use(express.json());
app.use(router);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
});


// Start server
app.listen(3000, (error) => {
    if (error) {
        console.log("Error occurred: ", error.message);
    }
    console.log("Server is running on port 3000");
});

