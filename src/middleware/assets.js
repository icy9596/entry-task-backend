const static = require('koa-static');
const mount = require('koa-mount');

const { PUBLIC_PATH } = require('../utils/paths');

function assets() {
    return mount('/public', static(PUBLIC_PATH));
}

module.exports = assets;