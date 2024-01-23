// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',  // or 'postgres', 'sqlite', 'mssql'
  username: 'root',
  password: 'test@123',
  database: 'grocery_booking_db',
  host: 'localhost',
  port: 3306,
  logging: true,
});

module.exports = sequelize;
