const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/EricSite");

const Inventory = db.define("inventory", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  wood1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  wood2: {
    type: Sequelize.STRING
  },
  wood3: {
    type: Sequelize.STRING
  }
});

db.sync();

module.exports = db;
