const Logo = require('../models/logo');


exports.uploadLogo = async(req, res) => {
    try {
        const logo = new Logo({
            image: req.file.filename,
            path: req.file.destination,
            originalurl: `${process.env.CLIENT_IMG_PATH}logo/${req.file.filename}`
        });
        const logoData = await logo.save();
        return res.status(200).json({ success: true, data: logoData });
    } catch (error) {
        return console.log(error)
    }
};
exports.getLogo = async (req, res) => {
    try {
        const logo = await Logo.find();
        res.status(200).json({
            success: true,
            data: logo
        })
    }
    catch (error ) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}
exports.updateLogo = async(req, res) =>{
    try {
        const image_id = req.body.image_id;
        const image = req.file.filename;
        const data = await Logo.findOne({_id: image_id});
        let imageData = null;
        if(data){
            imageData = await Logo.findByIdAndUpdate({_id: image_id}, {
                $set : {
                    image: image,
                    originalurl: `${process.env.CLIENT_IMG_PATH}logo/${req.file.filename}`
                }
            }, {new: true})
        }
        if(imageData && data){
            return res.status(200).json({ 
                success: true,
                message: "Logo updated successfully!",
                data: [imageData] 
            });
        }
    } catch (error) {
        return res.status(400).json({success: false, error: error.message})
    }
};
