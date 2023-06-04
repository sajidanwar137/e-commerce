const Admin = require('../models/admin');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');

const sendResetPasswordMail = async (name, email, token) => {
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
        res.status(400).send({success: false, message: error.message})
    }
};

const createToken = async(id) =>{
    try {
        const token = await jwt.sign({_id: id}, process.env.SECRET_JWT);
        return token;
    } catch (error) {
        res.status(400).send(error.message)
    }
};

const securePassword = async (password) => {
    try {
        const passwordHash = await bcryptjs.hash(password, 10);
        return passwordHash;
    } catch (error) {
        res.status(400).json({success: false, error: error.message})
    }
};
exports.logoutAdmin = async(req, res) => {
    try {
        const admin_id = req.body.admin_id;
        const adminData = await Admin.findOne({ _id: admin_id });
        if(adminData){
            await Admin.findByIdAndUpdate({_id: admin_id}, {$set : {
                token: ''
            }})
            return res.json({ success: true, message: 'Logout successful' });
        }
        else{
            console.error('Error during logout:', error);
            return res.status(500).json({ success: true, message: 'Internal Server Error' });
        }
    } catch (error) {
        return res.status(400).json({success: false, error: error.message})
    }
};
exports.createAdmin = async(req, res) => {
    try {
        const password = await securePassword(req.body.password);
        const admin = new Admin({
            name: req.body.name,
            email: req.body.email,
            password: password
        });
        const checkEmail = await Admin.findOne({email: req.body.email});
        if(checkEmail) {
            res.status(200).json({ success: false, message: "This email is already exists!" });
        }
        else{
            const adminData = await admin.save();
            res.status(200).json({ success: true, data: adminData });
        }
        
    } catch (error) {
        res.status(400).json({success: false, error: error.message})
    }
};

exports.adminLogin = async(req, res) => {
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const adminData = await Admin.findOne({email: email}); 
        if(adminData){
            const passwordMatch = await bcryptjs.compare(password, adminData.password);
            if(passwordMatch){
                const tokenData = await createToken(adminData._id);
                const adminResult = {
                    _id : adminData._id,
                    name : adminData.name,
                    email : adminData.email,
                    password : adminData.password,
                    token : tokenData
                }
                const adminResponse = {
                    success : true,
                    data : adminResult
                }
                res.status(200).send(adminResponse);
            }
            else{
                res.status(200).json({ success: false, message: "Login details are incorrect!"});
            }
        }
        else{
            res.status(200).json({ success: false, message: "Login details are incorrect!"});
        }
    } catch (error) {
        res.status(400).json({success: false, error: error.message})
    }
};

exports.updateAdminPassword = async(req, res) =>{
    try {
        const admin_id = req.body.admin_id;
        const password = req.body.password;
        const data = await Admin.findOne({_id: admin_id});
        if(data){
            const newPassword = await securePassword(password);
            const adminData = await Admin.findByIdAndUpdate({_id: admin_id}, {$set : {
                password: newPassword
            }})
            if(adminData){
                res.status(200).send({success: true, message: "Your password has been updated!"})
            }
        }
        else{
            res.status(200).send({success: false, message: "Admin id not found!"});
        }
        
    } catch (error) {
        res.status(400).json({success: false, error: error.message})
    }
};
exports.forgetAdminPassword = async(req, res) =>{
    try {
        const email = req.body.email;
        const adminData = await Admin.findOne({email: email}); 
        if(adminData){
            const randomString = randomstring.generate();
            const data = await Admin.updateOne({email: email}, {$set : {
                token: randomString
            }})
            sendResetPasswordMail(adminData.name, adminData.email, randomString);
            res.status(200).send({success: true, message: 'Please check your inbox of mail and reset your password!', token: randomString})
        }
        else{
            res.status(200).send({success: true, message: 'This email does not exists!'})
        }
        
    } catch (error) {
        res.status(400).send({success: false, error: error.message})
    }
};

exports.resetAdminPassword = async (req, res) =>{
    try {
        const token = req.query.token;
        const tokenData = await Admin.findOne({token: token}); 
        if(tokenData){
            const password = req.body.password;
            const newPassword = await securePassword(password);
            const resetData = await Admin.findByIdAndUpdate({_id: tokenData._id}, {
                $set : {
                    password : newPassword,
                    token: ''
                }
            }, {new: true})
            res.status(200).send({success: true, message: 'Password has been reset successfully!', data: resetData})
        }
        else{
            res.status(200).send({success: true, message: 'Invalid Token!'})
        }
        
    } catch (error) {
        res.status(400).send({success: false, error: "error.message"})
    }
};