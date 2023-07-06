const Sequelize = require('sequelize');

const db = require('../db');

const User = db.define('test_users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    profile: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = User;