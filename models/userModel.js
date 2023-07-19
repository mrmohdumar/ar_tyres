const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: new Date()
    }
});

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
