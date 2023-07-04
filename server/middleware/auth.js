const jwt = require('jsonwebtoken');

exports.auth = async(req, res, next) => {
    const token = req.body.token || req.query.token ||  req.headers['authorization'];
    if(!token) {
        return res.status(401).send({ success: false, message: "A token is required for authentication!" });
    }
    try {
        const TokenArray = token.split(" ");
        const jwtdecode = TokenArray[1];
        const decode = jwt.verify(jwtdecode, process.env.SECRET_JWT);
        req.user = decode;
    } catch (error) {
        return res.status(403).send("Invalid Token")
    }
    return next();
}