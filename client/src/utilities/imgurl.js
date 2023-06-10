
export const IMG = (imgFolder, imgName) => {
    if(imgFolder && imgName){
        return require(`${process.env.REACT_APP_API_LOGO_PATH}${imgFolder}${imgName}`);
    }
}
export default {
    IMG
};