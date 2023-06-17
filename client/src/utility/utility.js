
export const IMG = (imgName) => {
    if(imgName){
        return require(`${process.env.REACT_APP_API_LOGO_PATH}${imgName}`);
    }
}
export const validEmail = (text) => {
    const regex = RegExp(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
    return !regex.test(text);
}
export const validateConfirmPassword = (password, confirmpassword) => {
    if (password !== confirmpassword) {
        return true;
    }
    return false;
}
export const passwordComplexity = (text) =>{
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;
    return !regex.test(text)
}
export const slugCreater = (text, id) =>{
    let slug = null
    if(id) slug = `${text.replace(/\s+/g, '-').toLowerCase()}-${id}`;
    else slug =  text.replace(/\s+/g, '-').toLowerCase();
    return slug;
}
export default {
    IMG,
    validEmail,
    validateConfirmPassword,
    passwordComplexity,
    slugCreater
};