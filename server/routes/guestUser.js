const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser
} = require("../controllers/guestUser");

router.route("/createuser").post(createUser);
router.route("/userlogin").post(loginUser);

module.exports = router;
