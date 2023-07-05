async function errorHandle(ctx, next) {
    try {
        await next();
    } catch(error) {
        ctx.status = error.status || 500;
        ctx.body = error.message || "服务器发生错误";
    }
}

module.exports = errorHandle;