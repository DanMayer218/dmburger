DROP DATABASE IF EXISTS burger_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

-- Create the table tasks.
CREATE TABLE burger (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);




