const Countrystate = require('../models/countryState');

exports.getCountrystate = async (req, res) => {
  try {
      const countrystateList = await Countrystate.find();
      res.status(200).json({
          success: true,
          data: countrystateList
      })
  }
  catch (error ) {
      res.status(400).json({
          success: false,
          error: error.message
      })
  }
}