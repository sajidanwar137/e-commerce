const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { multerFileStorage } = require("../middleware/utilities");

const upload = multerFileStorage('user')

const {
  createUser,
  loginUser,
  logoutUser,
  updateUserAvtar,
  updateUserProfile,
  updateUserPassword
} = require("../controllers/guestUser");

router.route("/createuser").post(createUser);
router.route("/userlogin").post(loginUser);
router.route("/userlogout").post(auth, logoutUser);
router.route("/upload-user-avtar").post(auth, upload.single('useravtar'), updateUserAvtar);
router.route("/update-user-profile").post(auth, updateUserProfile);
router.route("/update-user-password").post(auth, updateUserPassword);

module.exports = router;
