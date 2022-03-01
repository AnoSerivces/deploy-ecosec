const Sequelize = require('sequelize');


module.exports = global.sequelize.define('client', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  phoneNumber: {
    allowNull: false,
    type: Sequelize.INTEGER(12),
  },
  reference: {
    type: Sequelize.STRING(20),
    allowNull: false,
    unique: true,
  },
  clientType: Sequelize.ENUM(["Empresa", "Individual"]),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});