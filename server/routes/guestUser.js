const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

const {
  createUser,
  loginUser,
  logoutUser
} = require("../controllers/guestUser");

router.route("/createuser").post(createUser);
router.route("/userlogin").post(loginUser);
router.route("/userlogout").post(auth, logoutUser);

module.exports = router;
