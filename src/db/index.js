const Sequelize = require("sequelize");
const dbConf = require("../config/db");

const sequelize = new Sequelize(
  dbConf.DB_NAME,
  dbConf.DB_USER,
  dbConf.DB_PASS,
  {
    host: dbConf.DB_HOST,
    dialect: "postgres",
  }
);

(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports = sequelize;
