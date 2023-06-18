const mongoose = require("mongoose");

const userAddressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addressPrimary: {
    type: String,
    required: true,
  },
  addressSecondary: {
    type: String,
    required: true,
  },
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
  isDefault: {
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
      default: ''
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
    addresses: [userAddressSchema],
    wishlists: [],
    orders: [],
    returns: [],
    rewardpoints: [],
    transactions: [],
    downloads: [],
    subscriptions: [],
    newsletters: [],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
