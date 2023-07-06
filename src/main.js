const Koa = require('koa');
const { koaBody } = require('koa-body');

const { cors, errorHandle, verifyJwt } = require('./middleware');
const registerRouter = require('./router');
const sequelize = require('./db');

const app = new Koa();

app.use(errorHandle);
app.use(cors);
app.use(koaBody());
// app.use(verifyJwt);
registerRouter(app);

(async function() {
    await sequelize.sync({ force: false });
    app.listen(8080, () => {
        console.log('server on 8080')
    });
})();