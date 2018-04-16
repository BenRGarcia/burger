// Database dependency
const mysql = require('mysql');
// Establish connection to database
const connection = require('./connection.js');

const orm = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM burgers', (err, res, fields) => {
        if (err) reject(err);
        console.log(res);
        resolve(res);
      });
    });
  },
  insertOne: () => {},
  updateOne: () => {}
};

module.exports = orm;
