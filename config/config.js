const fs = require('fs');

module.exports = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'fablib_db',
      host: process.env.DB_HOST,
      port: 3306,
      dialect: 'mysql',
      define: {timestamps: false}
    }
    
  };