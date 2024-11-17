/* Create a database called public.

CREATE DATABASE	public;

Add two tables:
items
customers.


CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
    name_item VARCHAR(40),
    price_item DECIMAL(10, 2)
);

CREATE TABLE customers (
	customers_id SERIAL PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR(40)
);


Follow the instructions below to determine which columns and data types to add to the two tables:

Add the following items to the items table:
1 - Small Desk – 100 (ie. price)
2 - Large desk – 300
3 - Fan – 80

Add 5 new customers to the customers table:
1 - Greg - Jones
2 - Sandra - Jones
3 - Scott - Scott
4 - Trevor - Green
5 - Melanie - Johnson

INSERT INTO items ( name_item, price_item ) VALUES
('Small Desk', 100.00),
('Large desk',300.00),
('Fan', 80.00);


INSERT INTO customers ( first_name, last_name ) VALUES
('Greg','Jones'),
('Sandra','Jones'),
('Scott','Scott'),
('Trevor','Green'),
('Melaine','Johnson');


Use SQL to fetch the following data from the database:
All the items.
All the items with a price above 80 (80 not included).
All the items with a price below 300. (300 included)
All customers whose last name is ‘Smith’ (What will be your outcome?).
All customers whose last name is ‘Jones’.
All customers whose firstname is not ‘Scott’.
*/

-- SELECT * FROM items;
-- SELECT * FROM items WHERE price_item > 80;
-- SELECT * FROM customers WHERE last_name = 'Smith';
-- SELECT * FROM customers WHERE last_name = 'Jones';
-- SELECT * FROM customers WHERE last_name != 'Scott';
