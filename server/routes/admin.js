const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { multerFileStorage } = require("../middleware/utilities");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const upload = multerFileStorage('admin')

const {
  logoutAdmin,
  createAdmin,
  adminLogin,
  updateAdminPassword,
  forgetAdminPassword,
  resetAdminPassword,
  updateAdminProfile,
  updateAdminAvtar,
  getAdmin
} = require("../controllers/admin");

router.route("/adminlogin").post(adminLogin);
router.route("/admin-password-forget").post(forgetAdminPassword);
router.route("/admin-password-reset").get(resetAdminPassword);
router.route("/admin").post(createAdmin);
router.route("/update-admin-password").post(auth, updateAdminPassword);
router.route("/update-admin-profile").post(auth, updateAdminProfile);
router.route("/logout").post(auth, logoutAdmin);
router.route("/update-admin-avtar").post(auth, upload.single('adminavtar'), updateAdminAvtar);
router.route("/admin").get(auth,getAdmin);

module.exports = router;
