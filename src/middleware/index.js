const errorHandle = require('./errorHandle');
const cors = require('./cors');
const verifyJwt = require('./verifyJwt');
const assets = require('./assets');

module.exports = {
    errorHandle,
    cors,
    verifyJwt,
    assets,
};