const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { User } = require('./User');

class Owner extends Model {}

Owner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'firstName',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'lastName',
    },
    bio: {
      type: DataTypes.TEXT,
      defaultValue: 'bio',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'owner',
  }
);

module.exports = Owner;
