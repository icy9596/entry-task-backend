const { User } = require("../daos");
const { encryptPwd, validatePwd } = require("../utils/pwdEncryption");
const { createJWT } = require("../utils/jwt");

class Users {
  async getUsers(page, size) {
    const offset = (page - 1) * size;
    const limit = size;
    const { rows, count: total } = await User.findAndCountAll({
      offset,
      limit,
      attributes: ["id", "username", "nickname", "profile"],
    });
    const list = rows.map((item) => item.dataValues);

    return {
      list,
      total,
    };
  }

  getUserById(id) {
    return User.findByPk(id);
  }

  getUserByUsername(username) {
    return User.findOne({ where: { username } });
  }

  async addUser(userData) {
    const { username, password, nickname, profile } = userData;
    if (!username || !password) {
      return "用户名或密码不能为空";
    }

    const exist = await this.getUserByUsername(username);
    if (exist) {
      return "用户名已被使用";
    }

    const newUser = {
      username,
      password: encryptPwd(password),
      nickname: nickname ? nickname : `用户_${username}`,
      profile: profile ? profile : "/uploads/default_profile.jpg",
    };

    await User.create(newUser);
  }

  async updateUser(userData) {
    const { id } = userData;

    if (!id) {
      return "用户id不能为空";
    }
    
    const allowUpdateKeys = ["password", "nickname", "profile"];
    const updateData = allowUpdateKeys.reduce((memo, key) => {
      if (userData[key]) {
        switch (key) {
          case "password":
            memo[key] = encryptPwd(userData[key]);
            break;
          default:
            memo[key] = userData[key];
        }
      }
      return memo;
    }, {});
    if (!Object.keys(updateData).length) return;

    await User.update(updateData, {
      where: { id },
    });
  }

  async register(userData) {
    return this.addUser(userData);
  }

  async login(userData) {
    const { username, password: inputPwd } = userData;
    const errMsg = "用户不存在或密码错误";

    const user = await this.getUserByUsername(username);
    if (!user) return errMsg;

    const { id, password } = user.dataValues;
    if (!validatePwd(inputPwd, password)) return errMsg;

    const jwt = createJWT({ id, username });

    return {
      id,
      username,
      token: jwt,
    };
  }
}

module.exports = new Users();
