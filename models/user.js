const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "name": String,
    "email": String,
    "password": {
        type: String,
        min: 6,
        max: 12
    },

    "role": String
});

module.exports = mongoose.model('User', userSchema);