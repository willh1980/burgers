DROP DATABASE IF EXISTS burgers_DB;

CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
  item_id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(25) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (item_id)
);