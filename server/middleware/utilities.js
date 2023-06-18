const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const nodemailer = require('nodemailer');
const multer  = require('multer');

// Token creater
exports.createToken = async(id) =>{
    try {
        return await jwt.sign({_id: id}, process.env.SECRET_JWT);
    } catch (error) {
        return res.status(400).send(error.message)
    }
};
// Password secure bcrypt
exports.securePassword = async (password) => {
    try {
        return await bcryptjs.hash(password, 10);
    } catch (error) {
        return res.status(400).json({success: false, error: error.message})
    }
};
// Password compare by bcrypt
exports.comparePassword = async (password, comparePassword) => {
    return bcryptjs.compare(password, comparePassword)
};
// Reset password mail handler
exports.sendResetPasswordMail = async (name, email, token) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'For reset password',
            html: `<p>Hi ${name}, Please copy the link and <a href="http://localhost:5000/api/v1/admin-password-reset?token=${token}">reset your password</a></p>`
        }
        transporter.sendMail(mailOptions, (error, info) =>{
            if(error){
                console.log('Error in sending email  ' + error);
                return true;
            }
            else{
                console.log('Email sent: ' + info.response);
                return false;
            }
        });
    } catch (error) {
        return res.status(400).send({success: false, message: error.message})
    }
};
//Multer file upload handler
exports.multerFileStorage =  folderName => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        return cb(null, `${process.env.IMG_PATH}/${folderName}`);
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        return cb(null,  uniqueSuffix + '-' + file.originalname)
      }
    })
    return multer({ storage: storage });
}