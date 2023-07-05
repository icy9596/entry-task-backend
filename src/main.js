const Koa = require('koa');
const { koaBody } = require('koa-body');

const registerRouter = require('./router');
const errorHandle = require('./middleware/errorHandle');

const app = new Koa();

app.use(errorHandle);
app.use(koaBody());
registerRouter(app);

app.listen(8080, () => {
    console.log('server on 8080')
});