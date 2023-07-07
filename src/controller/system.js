const { system } = require('../services');
const { failBody, successBody } = require('../utils/helper');

class SystemController {
    async upload(ctx) {
        const ret = await system.upload(ctx.request.files);
        ctx.body = typeof ret === 'string' ? failBody(ret) : successBody(ret.path);
    }
}

module.exports = new SystemController();