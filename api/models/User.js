const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String
    }},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
