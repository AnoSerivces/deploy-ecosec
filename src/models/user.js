const Sequelize = require('sequelize');


module.exports = global.sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
  },
  firstname: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM(["gestor", "operador"]),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});