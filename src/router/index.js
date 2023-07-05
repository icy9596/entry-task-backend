const fs = require('fs');
const path = require('path')

function registerRouter(app) {
    fs.readdirSync(__dirname).forEach(filename => {
        if (filename !== 'index.js') {
            const router = require(`./${filename}`);
            const routeName = path.parse(filename).name;

            app.use(router.routes()).use(router.allowedMethods());
            console.log(`[app]: ${routeName} 路由注册完成`);
        }
    });
}

module.exports = registerRouter;