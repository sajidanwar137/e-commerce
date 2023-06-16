const User = require('../models/guestUser');
const { securePassword, comparePassword, createToken} = require("../middleware/utilities");

exports.createUser = async(req, res) => {
    try {
        const password = await securePassword(req.body.password);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: password
        });
        const checkEmail = await User.findOne({email: req.body.email});
        if(checkEmail) {
            return res.status(200).json({ 
                success: false, 
                message: "This email is already exists!" 
            });
        }
        else{
            const userData = await user.save();
            return res.status(200).json({ 
                success: true, 
                data: userData 
            });
        }
        
    } catch (error) {
        res.status(400).json({
            success: false, 
            error: error.message
        })
    }
}

exports.loginUser = async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        let passwordMatch = null;
        const userData = await User.findOne({email: email});
        if(userData){
            passwordMatch = await comparePassword(password,userData.password);
        }
        if(userData && passwordMatch){
            const tokenData = await createToken(userData._id);
            const userResult = {
                _id : userData._id,
                name : userData.name,
                email : userData.email,
                password : userData.password,
                profileImageName : userData.profileImageName,
                profileImagePath : userData.profileImagePath,
                profileImageOriginalurl: userData.profileImageOriginalurl,
                token : tokenData
            }
            const userResponse = {
                success : true,
                data : userResult
            }
            return res.status(200).json(userResponse);
        }
        else{
            return res.status(200).json({ 
                success: false, 
                message: "Login details are incorrect!"
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false, 
            error: error.message
        })
    }
};

exports.logoutUser = async(req, res) => {
    try {
        const user_id = req.body.user_id;
        const userData = await User.findOne({ _id: user_id });
        if(userData){
            await User.findByIdAndUpdate({_id: user_id}, {$set : {
                token: ''
            }})
            return res.json({ 
                success: true, 
                message: 'Logout successful!' 
            });
        }
        else{
            return res.status(500).json({ 
                success: true, 
                message: 'Internal Server Error' 
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false, 
            error: error.message
        })
    }
};
