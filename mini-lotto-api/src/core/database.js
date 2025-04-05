import mysql from 'mysql2/promise';

import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_HOST_MASTER)
console.log(process.env.DB_MASTER_PASSWORD)
console.log(process.env.DB_MASTER_USER)

const masterConnection = await mysql.createPool({
    host: process.env.DB_HOST_MASTER || "mysql_master",
    user: process.env.DB_MASTER_USER || "mydb_user",
    password: process.env.DB_MASTER_PASSWORD || "mydb_pwd",
    database: process.env.DB_NAME || "mini_lotto",
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0,
});


const slaveConnection = await mysql.createPool({
    host: process.env.DB_HOST_SLAVE || "mysql_slave",
    user: process.env.DB_SLAVE_USER || "mydb_slave_user",
    password: process.env.DB_SLAVE_PASSWORD || "mydb_slave_pwd",
    database: process.env.DB_NAME || "mini_lotto",
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0,
});

export { masterConnection, slaveConnection } 
