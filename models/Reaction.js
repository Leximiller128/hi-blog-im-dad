
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Reaction extends Model {}

Reaction.init(
  {
    id: DataTypes.INTEGER,
    allowNull: true
  }
)

// there is probably more that goes in here, will do more research. 

//save for after mvp

