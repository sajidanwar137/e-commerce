const User = require('../models/user');
const { securePassword} = require("../middleware/utilities");

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
