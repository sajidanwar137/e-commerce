const mongoose = require("mongoose");
const adminAvtarSchema = new mongoose.Schema({
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
});
const adminLogoSchema = new mongoose.Schema({
    logoName: {
        type: String,
        default: ''
    },
    logoPath: {
        type: String,
        default: ''
    },
    logoOriginalurl: {
        type: String,
        default: ''
    },
});
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
    token : {
        type: String,
        default: ''
    },
    adminAvtar: [adminAvtarSchema],
    adminLogo: [adminLogoSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model("admin", adminSchema);