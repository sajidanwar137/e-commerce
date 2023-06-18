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
export const isValidPhoneNumber = (text) =>{
    const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return !regex.test(text)
}
export default {
    validEmail,
    validateConfirmPassword,
    passwordComplexity,
    slugCreater,
    isValidPhoneNumber
};