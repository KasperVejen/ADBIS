//Purpose: Connect to the database configDB
//import dotenv module
require("dotenv").config({ path: "../.env" });

//import mysql2 module
const mysql = require("mysql2/promise");

//use the process.env variables to configure the connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
});

//test connection to database
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    connection.release();
    console.log("Database connected");
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

module.exports = {
  pool,
  testConnection,
};
