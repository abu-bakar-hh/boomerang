const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Hero, Bom }) {
      this.belongsTo(Hero, { foreignKey: 'hero_id' });
      this.belongsTo(Bom, { foreignKey: 'bom_id' });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
    },
    scores: {
      type: DataTypes.INTEGER,
    },
    hero_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Heros',
        key: 'id',
      },
    },
    bom_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Boms',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
