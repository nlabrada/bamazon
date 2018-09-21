DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("topo chico", "food/drink", 11, 7);

INSERT INTO products (flavor, price, quantity)
VALUES ("dominoes", "games", 2, 14);

INSERT INTO products (flavor, price, quantity)
VALUES ("smash bros", "games", 80, 1);

INSERT INTO products (flavor, price, quantity)
VALUES ("ny t-shirt", "apparel", 20, 22);

INSERT INTO products (flavor, price, quantity)
VALUES ("lone star light", "things that will eventually kill you" 5, 100);

INSERT INTO products (flavor, price, quantity)
VALUES ("camel jade", "things that will eventually kill you", 6, 26);

INSERT INTO products (flavor, price, quantity)
VALUES ("red wing boots", "apparel" 320, 10);

INSERT INTO products (flavor, price, quantity)
VALUES ("toothpaste", "personal care" 3, 3);

INSERT INTO products (flavor, price, quantity)
VALUES ("deodorant", "personal care", 3, 3);

INSERT INTO products (flavor, price, quantity)
VALUES ("life", "things that will eventually kill you" 7, 0);
