const static = require('koa-static');
const mount = require('koa-mount');
const path = require('path');

function assets() {
    return mount('/public', static(path.resolve(__dirname, '../../public')));
}

module.exports = assets;