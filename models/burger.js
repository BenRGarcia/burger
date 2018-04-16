const orm = require('../config/orm.js');

const burger = {
  getAllBurgers: () => {
    return new Promise((resolve, reject) => {
      orm.selectAll()
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
  addNewBurger: () => { orm.insertOne() },
  updateBurger: () => { orm.updateOne() }
};

module.exports = burger;
