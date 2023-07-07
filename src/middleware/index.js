const errorHandle = require('./errorHandle');
const cors = require('./cors');
const verifyJwt = require('./verifyJwt');
const assets = require('./assets');
const body = require('./body');

module.exports = {
    errorHandle,
    cors,
    verifyJwt,
    assets,
    body,
};