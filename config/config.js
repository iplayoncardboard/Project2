const fs = require('fs');
const dotenv = require('dotenv');

module.exports = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'fablib_db',
      host: process.env.DB_HOST,
      dialect: 'mysql'
    }
    
  };


