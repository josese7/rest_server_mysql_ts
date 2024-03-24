"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
const User = config_1.default.define('users', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: 1
    }
});
exports.default = User;
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
//# sourceMappingURL=user.js.map