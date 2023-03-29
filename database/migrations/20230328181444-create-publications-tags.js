
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('publications_tags', {
        tag_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,             
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'tags',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
        },
        publication_id: {
          type: Sequelize.UUID,
          primaryKey: true,             
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'publications',
            key: 'id'
          },
          onUpdate: 'CASCADE', 
          onDelete: 'RESTRICT'
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'created_at'
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'updated_at'
        }
      }, { transaction })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  down: async (queryInterface, /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('publications_tags', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}