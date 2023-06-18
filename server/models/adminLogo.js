const mongoose = require("mongoose");

const adminLogoSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Admin image is required'],
    },
    path: {
        type: String,
        required: [true, 'Admin image is required'],
    },
    originalurl: {
        type: String,
        required: [true, 'Admin image is required'],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("adminlogo", adminLogoSchema);