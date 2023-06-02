const User = require('../models/user');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        })
    }
    catch (error ) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.createUser = async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.getSingleUser = async (req, res) => {
    try {
        const user = await User.find({_id : req.params.id});
        if(!user) {
            return res.status(400).json({
                success: false,
                data: `User not found for id ${req.params.id}`
            })
        }
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

exports.updateUser = async (req, res) => {
    try {
        let updatedUser = await User.find({_id : req.params.id});
        if(!updatedUser) {
            return res.status(400).json({
                success: false,
                data: `User not found for id ${req.params.id}`
            })
        }
        updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators: true});
        res.status(200).json({
            success: true,
            data: updatedUser
        })
    }
    catch (error ) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let user = await User.find({_id : req.params.id});
        if(!user) {
            return res.status(400).json({
                success: false,
                data: `User not found for id ${req.params.id}`
            })
        }
        user = await User.findByIdAndDelete(req.params.id);
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