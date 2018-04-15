// Database dependency
const mysql = require('mysql');
// Establish connection to database
const connection = require('./connection.js');

const orm = {
  selectAll: () => {},
  insertOne: () => {},
  updateOne: () => {}
};

module.exports = orm;
