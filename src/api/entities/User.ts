import { DataTypes, Model } from "sequelize";
import { db } from "../../database/sequelize";

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "user",
    tableName: "users",
  },
);
