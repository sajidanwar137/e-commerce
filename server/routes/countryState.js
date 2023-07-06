const express = require("express");
const router = express.Router();

const {
  getCountrystate
} = require("../controllers/countryState");

router.route("/countrystate").get(getCountrystate);

module.exports = router;
