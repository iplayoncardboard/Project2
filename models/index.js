"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var dotenv = require('dotenv');
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.js")[env];
var db = {};

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL, {
    username: 'ymsbpotb9m57vbub',
    password: 'qn5brnwxbepw8f4t',
    database: 'vkgwji8j1io4bwj2',
    dialect:  'mysql',
    port:     '3306',
    host:     's0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
    // logging:  true //false
  })
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
//Returns: <string[]> An array of filenames excluding '.' and '..'.
  .readdirSync(__dirname)
  //Runs through arrray of files returned by readdirSynch
  .filter(function(file) {
    //returns array of files with:  file with a name (does not start with dot) && file name not = basename && file extension is .js
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  ////For each file in array  of files returned by filter
  .forEach(function(file) {
    //model is set equel to 
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
