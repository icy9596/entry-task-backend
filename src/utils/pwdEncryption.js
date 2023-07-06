const crypto = require('crypto');

const PASS_SECRET = "8bf2ebad";

const encryptPwd = (pwd) => {
    return crypto.createHash('md5').update(`${PASS_SECRET}${pwd}`).digest('hex');
};

const validatePwd = (unverifiedPwd, encryptedPwd) => {
    return encryptPwd(unverifiedPwd) === encryptedPwd;
};

module.exports = {
    encryptPwd,
    validatePwd
}