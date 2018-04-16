// Database dependency
const mysql = require('mysql');
// Establish connection to database
const connection = require('./connection.js');

const orm = {
  // Get all burgers from database
  selectAll: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM burgers', (err, res, fields) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  },
  // Add new burger to database
  insertOne: ({ burger_name }) => {
    return new Promise((resolve, reject) => {
      const queryString = 'INSERT INTO burgers SET ?';
      connection.query(queryString, { burger_name }, (err, res, fields) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  },
  // Change burger from 'devoured: 0' to 'devoured: 1'
  updateOne: () => {},
  // Delete all burgers from the database
  deleteAll: () => {}
};

module.exports = orm;
