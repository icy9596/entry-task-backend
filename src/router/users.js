const Router = require("@koa/router");

const { usersController } = require("../controller");

const router = new Router({
  prefix: "/users",
});

router.get("/", async (ctx) => {
  await usersController.getUsers(ctx);
});

router.post("/add", async (ctx) => {
  await usersController.addUser(ctx);
});

router.post("/update", async (ctx) => {
  await usersController.updateUser(ctx);
});

router.post("/register", async (ctx) => {
  await usersController.register(ctx);
});

router.post("/login", async (ctx) => {
  await usersController.login(ctx);
});

module.exports = router;
