const jwt = require('jsonwebtoken');

const JWT_SECRET = "5db454c1";

const createJWT = (payload, options = { expiresIn: 60 }) => {
    return jwt.sign(payload, JWT_SECRET, options);
};

module.exports = {
    createJWT,
    JWT_SECRET,
};
