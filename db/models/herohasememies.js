const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HeroHasEmemies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Hero, Enemies}) {
      this.belongsTo(Hero, { foreignKey: 'hero_id' });
      this.belongsTo(Enemies, { foreignKey: 'enemy_id' });
    }
  }
  HeroHasEmemies.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    hero_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Heros',
        key: 'id',
      },
    },
    enemy_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Enemies',
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
    modelName: 'HeroHasEmemies',
  });
  return HeroHasEmemies;
};
