const jwt = require('jsonwebtoken');
const JWT_KEY = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

module.exports.getToken = (data) => {
    try {
        let token = jwt.sign(
            data,
            JWT_KEY,
            {expiresIn: "12h"}
        )
        return token;
    } catch (error) {
        return null;
    }
}

module.exports.checkAuth = (req, res, next) => {
    try {
        const verify = jwt.verify(req.headers.token, JWT_KEY)
        next();
    } catch (error) {
        console.log(error)
    }
};

module.exports.checkRole =(role) => {
    return async(req, res, next) => {
        const decoded = jwt.decode(req.headers.token)
        if(decoded.role === role){
            next();
        }
    }
}

