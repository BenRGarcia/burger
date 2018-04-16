const orm = require('../config/orm.js');

const burger = {
  getAllBurgers: () => {
    return new Promise((resolve, reject) => {
      orm.selectAll()
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
  addNewBurger: burger => {
    return new Promise((resolve, reject) => {
      orm.insertOne(burger)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
  eatBurger: () => { orm.updateOne() }
};

module.exports = burger;
