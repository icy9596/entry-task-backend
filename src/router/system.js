const Router = require("@koa/router");

const { systemController } = require("../controller");

const router = new Router({
  prefix: "/system",
});

router.post("/upload", async (ctx) => {
  await systemController.upload(ctx);
});

module.exports = router;
