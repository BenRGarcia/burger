// Environment variables
require('dotenv').config()
// Database dependency
const mysql = require('mysql');
// Set database connection's .env credentials
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

module.exports = connection;