const { successBody, failBody } = require("../utils/helper");
const { users } = require("../services");

class UserController {
  async getUsers(ctx) {
    const { page = 1, size = 20, username } = ctx.query;
    const usersData = await users.getUsers(page, size, username);
    ctx.body = successBody(usersData);
  }

  async addUser(ctx) {
    const ret = await users.addUser(ctx.request.body);
    ctx.body = ret ? failBody(ret) : successBody();
  }

  async updateUser(ctx) {
    const ret = await users.updateUser(ctx.request.body);
    ctx.body = ret ? failBody(ret) : successBody();
  }

  async register(ctx) {
    const ret = await users.register(ctx.request.body);
    ctx.body = ret ? failBody(ret) : successBody();
  }

  async login(ctx) {
    const ret = await users.login(ctx.request.body);
    ctx.body = typeof ret === 'string' ? failBody(ret) : successBody(ret);
  }

}

module.exports = new UserController();
