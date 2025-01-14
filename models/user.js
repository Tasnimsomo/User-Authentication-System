const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "firstName": {
        type: String,
        min: 2,
        max: 20
    },
    "lastName": {
        type: String,
        min: 2,
        max: 20
    },
    "email": {
        type: String,
        min: 6,
        max: 50,
        unique: true
    },
    "password": {
        type: String,
        min: 6,
        max: 12
    },

    "role": String
});

module.exports = mongoose.model('User', userSchema);