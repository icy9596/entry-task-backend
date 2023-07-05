const Router = require('@koa/router');

const router = new Router({
    prefix: '/users'
});

router.get('/', async () => {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject(new Error('test error'));
        }, 1000);
    })
});

module.exports = router;