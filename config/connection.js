// Environment variables
require('dotenv').config()
// Database dependency
const mysql = require('mysql');

// 
if (process.env.JAWSDB_URL) {
  // Set database connection's deployed .env credentials
  const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Set database connection's local .env credentials
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
}

connection.connect();
module.exports = connection;
