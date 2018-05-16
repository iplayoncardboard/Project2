CREATE DATABASE fablib_db;

USE fablib_db;

CREATE TABLE user(
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    user_name VARCHAR(100),
    pw_hash VARCHAR(255)
);

