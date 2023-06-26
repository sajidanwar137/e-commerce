const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    avtarName: {
        type: String,
        default: ''
    },
    avtarPath: {
        type: String,
        default: ''
    },
    avtarOriginalurl: {
        type: String,
        default: ''
    },
    token : {
        type: String,
        default: ''
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("admin", adminSchema);