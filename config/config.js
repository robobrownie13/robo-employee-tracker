const mysql = require("mysql2/promise");
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: process.env.DB_PASSWORD,
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

module.exports = db;
