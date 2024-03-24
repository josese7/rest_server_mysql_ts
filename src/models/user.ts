import {  DataTypes } from "sequelize";
import db from "../../db/config";


const User = db.define('users',{
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    }
});

export default User;


/* 
class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  sequelize: db,
  modelName: 'users', // Nombre de la tabla en la base de datos
  timestamps: true // Si la tabla tiene timestamps (createdAt y updatedAt)
});

export default User; */