const mongoose = require("mongoose");

const userAddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  default: {
    type: Boolean,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    image: {
        type: String,
        required: false,
    },
    path: {
        type: String,
        required: false,
    },
    originalurl: {
        type: String,
        required: false,
    },
    addresses: [userAddressSchema],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
