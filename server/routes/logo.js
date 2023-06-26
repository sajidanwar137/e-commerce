const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { multerFileStorage } = require("../middleware/utilities");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const upload = multerFileStorage('logo')



const {uploadLogo, updateLogo, getLogo} = require("../controllers/logo");

router.route("/create-logo").post(auth, upload.single('logo'), uploadLogo);
router.route("/update-logo").post(auth, upload.single('logo'), updateLogo);
router.route("/logo").get(getLogo);

module.exports = router;
