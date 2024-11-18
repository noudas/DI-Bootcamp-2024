/*
We will work on the public database that we created yesterday.

Part I

Create a table named purchases. It should have 3 columns :
id : the primary key of the table
customer_id : this column references the table customers
item_id : this column references the table items
quantity_purchased : this column is the quantity of items purchased by a certain customer

CREATE TABLE purchases(
purchase_id SERIAL PRIMARY KEY,
customer_id INT REFERENCES customers (customers_id),
item_id INT REFERENCES items (item_id),
quantity_purchased INT
);


Insert purchases for the customers, use subqueries:
Scott Scott bought one fan
Melanie Johnson bought ten large desks
Greg Jones bougth two small desks
The table purchases should look like this:

id	customer_id	item_id	quantity_purchased
1	3	3	1
2	5	2	10
3	1	1	2


Here is the explanation of the first row:

id = 1, this is the auto-incrementing primary key
customer_id = 3, because the id of Scott Scott in the customers table is 3
item_id = 3, because the id of a fan in the items table is 3
quantity_purchased = 1, because Scott Scott bought one fan



-- Insert for Scott Scott buying one fan
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customers_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT item_id FROM items WHERE name_item = 'fan'),
    1
);

-- Insert for Melanie Johnson buying ten large desks
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customers_id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT item_id FROM items WHERE name_item = 'large desk'),
    10
);

-- Insert for Greg Jones buying two small desks
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customers_id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT item_id FROM items WHERE name_item = 'small desk'),
    2
);


*/



/*
Part II

Use SQL to get the following from the database:
All purchases. Is this information useful to us?
All purchases, joining with the customers table.
Purchases of the customer with the ID equal to 5.
Purchases for a large desk AND a small desk

Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
Customer first name
Customer last name
Item name

Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?

SELECT * FROM purchases;

SELECT purchases.id, customers.first_name, customers.last_name, purchases.item_id, purchases.quantity_purchased
FROM purchases
JOIN customers ON purchases.customer_id = customers.id;

SELECT * FROM purchases
WHERE customer_id = 5;

SELECT * FROM purchases
WHERE item_id IN (
    (SELECT id FROM items WHERE name_item = 'large desk'),
    (SELECT id FROM items WHERE name_item = 'small desk')
);

SELECT customers.first_name, customers.last_name, items.name_item
FROM purchases
JOIN customers ON purchases.customer_id = customers.id
JOIN items ON purchases.item_id = items.id;

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (1, NULL, 5);

*/



