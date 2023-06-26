const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    path: {
        type: String,
        required: [true, 'Path is required'],
    },
    originalurl: {
        type: String,
        required: [true, 'Original URL is required'],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("logo", logoSchema);