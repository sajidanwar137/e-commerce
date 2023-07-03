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
  updateUserPassword,
  getAllGuestUser,
  userEnableDisable,
  deleteUser,
  addUserAddress
} = require("../controllers/guestUser");

router.route("/getallguestuser").get(getAllGuestUser);
router.route("/createuser").post(createUser);
router.route("/userlogin").post(loginUser);
router.route("/userlogout").post(auth, logoutUser);
router.route("/upload-user-avtar").post(auth, upload.single('useravtar'), updateUserAvtar);
router.route("/update-user-profile").post(auth, updateUserProfile);
router.route("/update-user-password").post(auth, updateUserPassword);
router.route("/user-enable-disable").post(auth, userEnableDisable);
router.route("/user-delete/:id").delete(auth, deleteUser);
router.route("/user-addresses").post(auth, addUserAddress);

module.exports = router;
