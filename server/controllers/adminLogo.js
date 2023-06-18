const AdminLogo = require('../models/adminLogo');


exports.uploadAdminLogo = async(req, res) => {
    try {
        const adminLogo = new AdminLogo({
            image: req.file.originalname,
            path: req.file.destination,
            originalurl: `${process.env.CLIENT_IMG_PATH}adminlogo/${req.file.originalname}`
        });
        const adminLogoData = await adminLogo.save();
        return res.status(200).json({ success: true, data: adminLogoData });
    } catch (error) {
        return console.log(error)
    }
};
exports.getAdminLogo = async (req, res) => {
    try {
        const adminLogo = await AdminLogo.find();
        res.status(200).json({
            success: true,
            data: adminLogo
        })
    }
    catch (error ) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}
exports.updateAdminLogo = async(req, res) =>{
    try {
        const image_id = req.body.image_id;
        const image = req.file.originalname;
        const data = await AdminLogo.findOne({_id: image_id});
        let imageData = null;
        if(data){
            imageData = await AdminLogo.findByIdAndUpdate({_id: image_id}, {
                $set : {
                    image: image,
                    originalurl: `${process.env.CLIENT_IMG_PATH}adminlogo/${req.file.originalname}`
                }
            }, {new: true})
        }
        if(imageData){
            const imageResult = [{
                _id : imageData._id,
                image : imageData.image,
                path : imageData.path,
                originalurl: imageData.originalurl
            }]
            return res.status(200).json({ 
                success: true,
                message: "Admin logo updated successfully!",
                data: imageResult 
            });
        }
    } catch (error) {
        return res.status(400).json({success: false, error: error.message})
    }
};
