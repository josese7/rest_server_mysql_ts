import { Sequelize } from "sequelize";



const db = new Sequelize('development', 'root', 'admin123.',{
    host: 'localhost',
    dialect:'mysql',
    //logging: false,
    port:3306
})

export default db;