const Koa = require('koa');

const { cors, errorHandle, verifyJwt, assets, body } = require('./middleware');
const registerRouter = require('./router');
const sequelize = require('./db');

const app = new Koa();

app.use(errorHandle);
app.use(assets());
app.use(cors);
app.use(body());
// app.use(verifyJwt);
registerRouter(app);

(async function() {
    await sequelize.sync({ force: false });
    app.listen(8080, () => {
        console.log('server on 8080')
    });
})();