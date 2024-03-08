'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enemy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({HeroHasEnemies}) {
      this.hasMany(HeroHasEnemies, { foreignKey: 'enemy_id' });
    }
  }
  Enemy.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    skin: {
      type: DataTypes.TEXT
    },
    hp: {
      type: DataTypes.INTEGER
    },
    damage: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Enemy',
  });
  return Enemy;
};