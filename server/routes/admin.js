const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { auth } = require("../middleware/auth");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const {
  logoutAdmin,
  createAdmin,
  adminLogin,
  updateAdminPassword,
  forgetAdminPassword,
  resetAdminPassword,
  updateAdminProfile,
} = require("../controllers/admin");

router.route("/adminlogin").post(adminLogin);
router.route("/admin-password-forget").post(forgetAdminPassword);
router.route("/admin-password-reset").get(resetAdminPassword);
router.route("/admin").post(createAdmin);
router.route("/update-admin-password").post(auth, updateAdminPassword);
router.route("/update-admin-profile").post(auth, updateAdminProfile);
router.route("/logout").post(auth, logoutAdmin);

module.exports = router;
