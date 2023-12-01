import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DB as string);

export { db };
