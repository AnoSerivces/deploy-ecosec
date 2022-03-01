'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("orders", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      invoice: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      clothe: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER(12),
      },
      observation: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
      },
      clientId: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }).then(() => queryInterface.addConstraint('orders', ['userId'], {

      type: 'foreign key',

      name: 'user_foreign_key',

      references: { //Required field

        table: 'users',

        field: 'id'

      },

      onDelete: 'cascade',

      onUpdate: 'cascade'

    }),
      () => queryInterface.addConstraint('orders', ['userId'], {

        type: 'foreign key',

        name: 'client_foreign_key',

        references: { //Required field

          table: 'clients',

          field: 'id'

        },

        onDelete: 'cascade',

        onUpdate: 'cascade'

      })
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("orders")
  }
}
