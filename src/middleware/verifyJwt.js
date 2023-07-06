const jwt = require('koa-jwt');

const { JWT_SECRET } = require('../utils/jwt');

module.exports = jwt({
    secret: JWT_SECRET
}).unless({
    path: [
        /\/login/,
        /\/register/,
    ]
});