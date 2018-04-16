const Sequelize = require('sequelize');
const db = require('../db')

const Game = db.define('game', {
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = Game
