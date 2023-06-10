const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const multer  = require('multer');
const { auth } = require("../middleware/auth");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, `${process.env.IMG_PATH}/adminlogo`);
    },
    filename: function (req, file, cb) {
      return cb(null, `${file.originalname}`);
    }
  })
  
const upload = multer({ storage: storage })



const {uploadAdminLogo, updateAdminLogo, getAdminLogo} = require("../controllers/adminLogo");

router.route("/create-admin-logo").post(auth, upload.single('adminlogo'), uploadAdminLogo);
router.route("/update-admin-logo").post(auth, upload.single('adminlogo'), updateAdminLogo);
router.route("/adminlogo").get(getAdminLogo);

module.exports = router;
