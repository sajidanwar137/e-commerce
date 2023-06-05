const Admin = require('../models/admin');
const randomstring = require('randomstring');
const { createToken, securePassword, comparePassword, sendResetPasswordMail } = require("../middleware/utilities");

exports.logoutAdmin = async(req, res) => {
    try {
        const admin_id = req.body.admin_id;
        const adminData = await Admin.findOne({ _id: admin_id });
        if(adminData){
            await Admin.findByIdAndUpdate({_id: admin_id}, {$set : {
                token: ''
            }})
            return res.json({ success: true, message: 'Logout successful!' });
        }
        else{
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
            return res.status(200).json({ success: false, message: "This email is already exists!" });
        }
        else{
            const adminData = await admin.save();
            return res.status(200).json({ success: true, data: adminData });
        }
        
    } catch (error) {
        res.status(400).json({success: false, error: error.message})
    }
};

exports.adminLogin = async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        let passwordMatch = null;
        const adminData = await Admin.findOne({email: email});
        if(adminData){
            passwordMatch = await comparePassword(password,adminData.password);
        }
        if(adminData && passwordMatch){
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
            return res.status(200).json(adminResponse);
        }
        else{
            return res.status(200).json({ success: false, message: "Login details are incorrect!"});
        }
    } catch (error) {
        return res.status(400).json({success: false, error: error.message})
    }
};

exports.updateAdminPassword = async(req, res) =>{
    try {
        const admin_id = req.body.admin_id;
        const password = req.body.password;
        const data = await Admin.findOne({_id: admin_id});
        let adminData = null;
        if(data){
            const newPassword = await securePassword(password);
            adminData = await Admin.findByIdAndUpdate({_id: admin_id}, {$set : {
                password: newPassword
            }})
        }
        else{
            return res.status(200).send({success: false, message: "Admin id not found!"});
        }
        if(adminData){
            return res.status(200).send({success: true, message: "Your password has been updated!"})
        }
    } catch (error) {
        return res.status(400).json({success: false, error: error.message})
    }
};
exports.forgetAdminPassword = async(req, res) =>{
    try {
        const email = req.body.email;
        const adminData = await Admin.findOne({email: email}); 
        let data = null;
        const randomString = await randomstring.generate();
        if(adminData){
            data = await Admin.updateOne({email: email}, {$set : {
                token: randomString
            }})
        }
        else{
            return res.status(200).send({success: false, message: 'This email does not exists!'})
        }
        if(data){
            sendResetPasswordMail(adminData.name, adminData.email, randomString);
            return res.status(200).send({success: true, message: 'Please check your inbox of mail and reset your password!', token: randomString})
        }
    } catch (error) {
        return res.status(400).send({success: false, error: error.message})
    }
};

exports.resetAdminPassword = async (req, res) =>{
    try {
        const token = req.query.token;
        const tokenData = await Admin.findOne({token: token});
        let resetData = null;
        if(tokenData){
            const password = req.query.password;
            const newPassword = await securePassword(password);
            resetData = await Admin.findByIdAndUpdate({_id: tokenData._id}, {
                $set : {
                    password : newPassword,
                    token: ''
                }
            }, {new: true})
        }
        else{
            return res.status(200).send({success: true, message: 'Invalid Token!'})
        }
        if(resetData) {
            return res.status(200).send({success: true, message: 'Password has been reset successfully!', data: resetData})
        }
    } catch (error) {
        return res.status(400).send({success: false, error: "error.message"})
    }
};