const mongoose = require("mongoose");

const countryStateSchema = new mongoose.Schema({
    country: {
        type: String,
        required: [true, 'Country is required'],
    },
    states: []
}, {
    timestamps: true
});

module.exports = mongoose.model("Countrystate", countryStateSchema);