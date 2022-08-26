'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('updateBlogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      corpo: {
        type: Sequelize.STRING
      },
      dataAtualizacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      blogId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'blogs',
          key: 'id',
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('updateBlogs');
  }
};