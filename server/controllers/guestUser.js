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
            if(userData?.isActive){
                const tokenData = await createToken(userData._id);
                userData.token = tokenData;
                const userResponse = {
                    success : true,
                    data : userData,
                    message : 'Login Successfully!'
                }
                return res.status(200).json(userResponse);
            }
            else{
                return res.status(200).json({ 
                    success: false, 
                    data: null,
                    message: "Your account is suspended. please contact your administrator!"
                });
            }
            
        }
        else{
            return res.status(200).json({ 
                success: false, 
                data: null,
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

exports.getUserById = async(req, res) => {
    const userId = req.params.id;
    try {
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
    } catch (error) {
        console.error('Error getting user by ID:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getAllGuestUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json({
            success: true,
            data: user
        })
    }
    catch (error ) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.updateUserAvtar = async(req, res) =>{
    try {
        const user_id = req.body.user_id;
        const avtarName = req.file.filename;
        const avtarPath = req.file.destination;
        const data = await User.findOne({_id: user_id});
        let userData = null;
        if(data){
            userData = await User.findByIdAndUpdate({_id: user_id}, {
                $set : {
                    avtarName: avtarName,
                    avtarPath: avtarPath,
                    avtarOriginalurl: `${process.env.CLIENT_IMG_PATH}user/${avtarName}`
                }
            }, {new: true})
        }
        if(userData){
            const userResponse = {
                success : true,
                data : userData,
                message: "Avtar updated successfully!"
            }
            return res.status(200).json(userResponse);
        }
    } catch (error) {
        return res.status(400).json({success: false, error: error.message})
    }
};

exports.updateUserProfile = async(req, res) =>{
    try {
        const user_id = req.body.user_id;
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const data = await User.findOne({_id: user_id});
        let userData = null;
        if(data){
            userData = await User.findByIdAndUpdate({_id: user_id}, {
                $set : {
                    name: name,
                    email: email,
                    phone: phone,
                }
            }, {new: true})
        }
        if(userData){
            const userResponse = {
                success : true,
                data : userData,
                message: "Profile updated successfully!"
            }
            return res.status(200).json(userResponse);
        }
    } catch (error) {
        return res.status(400).json({success: false, error: error.message})
    }
};

exports.updateUserPassword = async(req, res) =>{
    try {
        const user_id = req.body.user_id;
        const password = req.body.password;
        const data = await User.findOne({_id: user_id});
        let userData = null;
        if(data){
            const newPassword = await securePassword(password);
            userData = await User.findByIdAndUpdate({_id: user_id}, {$set : {
                password: newPassword
            }})
        }
        else{
            return res.status(200).send({
                success: false, 
                message: "User ID not found!"
            });
        }
        if(userData){
            return res.status(200).send({
                success: true, 
                message: "Your password has been updated!"
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false, 
            error: error.message
        })
    }
};
