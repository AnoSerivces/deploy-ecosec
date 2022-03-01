const Sequelize = require('sequelize');

const sequelize = new Sequelize("anoservi_ecosec", "anoservi_ecosec", 'Anoservi_Ecosec',
  { host: "153.92.215.51", dialect: 'mysql', operatorsAliases: 0 });

try {
  sequelize.authenticate();
  console.log('Database connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


global.sequelize = sequelize;