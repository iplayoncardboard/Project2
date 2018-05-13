CREATE DATABASE fablib_db;

USE fablib_db;

CREATE TABLE user(
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    user_name VARCHAR(100),
    pw_hash VARCHAR(255)
);

CREATE TABLE libs(
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    author_id INTEGER(11)
    sentence_1 LONGTEXT,
    sentence_2 LONGTEXT,
    sentence_3 LONGTEXT,
    sentence_4 LONGTEXT,
    sentence_5 LONGTEXT
);