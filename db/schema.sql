CREATE DATABASE fablib_db;

USE fablib_db;

CREATE TABLE user(
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    user_name VARCHAR(100),
    pw_hash VARCHAR(255)
);

CREATE TABLE category(
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    category VARCHAR(100)
);

CREATE TABLE libs(
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    category_id INTEGER(11),
    phrase_1 LONGTEXT,
    phrase_2 LONGTEXT,
    phrase_3 LONGTEXT,
    phrase_4 LONGTEXT,
    phrase_5 LONGTEXT,
    phrase_6 LONGTEXT,
    phrase_7 LONGTEXT,
    phrase_8 LONGTEXT,
    phrase_9 LONGTEXT,
    phrase_10 LONGTEXT,
    phrase_11 LONGTEXT,
    phrase_12 LONGTEXT,
    phrase_13 LONGTEXT,
    phrase_14 LONGTEXT,
    phrase_15 LONGTEXT
);

CREATE TABLE entries(
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    author_id INTEGER(11),
    lib_id INTEGER(11),
    word_1 LONGTEXT,
    word_2 LONGTEXT,
    word_3 LONGTEXT,
    word_4 LONGTEXT,
    word_5 LONGTEXT,
    word_6 LONGTEXT,
    word_7 LONGTEXT,
    word_8 LONGTEXT,
    word_9 LONGTEXT,
    word_10 LONGTEXT,
    word_11 LONGTEXT,
    word_12 LONGTEXT,
    word_13 LONGTEXT
);