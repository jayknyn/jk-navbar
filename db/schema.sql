DROP TABLE IF EXISTS products;

CREATE TABLE products (
  _id SERIAL PRIMARY KEY,
  productId INT,
  name VARCHAR(100),
  description VARCHAR(100),
  tag VARCHAR(100),
  price INT,
  images VARCHAR(500)
);

-- INSERT INTO products(_id,productId,name,description,tag,price,images) VALUES(1, 100,'Soul Flare', 'Palo santo mixtape occaecat sartorial. Cloud bread YOLO swag','throwing',499,'https://s3.us-east-2.amazonaws.com/axes/battle+axe/1.+battle-axe.jpg');
\copy products FROM './db/outputpg.csv' DELIMITER ',' CSV

-- $ psql -d navbar -U jayk <db/schema.sql

-- for ubuntu
-- $ sudo -u jayk psql -d navbar <schema.sql