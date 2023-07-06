const { successBody, failBody } = require("../utils/helper");
const { Users } = require("../services");

class UserController {
  async getUsers(ctx) {
    const { page = 1, size = 20 } = ctx.query;

    const usersData = await Users.getUsers(page, size);

    ctx.body = successBody(usersData);
  }

  async addUser(ctx) {
    const ret = await Users.addUser(ctx.request.body);
    ctx.body = ret ? failBody(ret) : successBody();
  }

  async updateUser(ctx) {
    const ret = await Users.updateUser(ctx.request.body);
    ctx.body = ret ? failBody(ret) : successBody();
  }

  async register(ctx) {
    const ret = await Users.register(ctx.request.body);
    ctx.body = ret ? failBody(ret) : successBody();
  }

  async login(ctx) {
    const ret = await Users.login(ctx.request.body);

    if (typeof ret === 'string') {
        ctx.body = failBody(ret);
    } else {
        ctx.body = successBody(ret);
    }
  }

}

module.exports = new UserController();
