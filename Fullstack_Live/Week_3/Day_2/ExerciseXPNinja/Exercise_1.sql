/*

Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
SELECT first_name, last_name
FROM customers
ORDER BY last_name ASC, first_name ASC
LIMIT 2 OFFSET (SELECT COUNT(*) FROM customers) - 2;

Use SQL to delete all purchases made by Scott.
DELETE FROM purchases
WHERE purchases.customer_id = (SELECT customers_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott');


Does Scott still exist in the customers table, even though he has been deleted? Try and find him.
SELECT * 
FROM customers 
WHERE first_name = 'Scott' AND last_name = 'Scott';

Use SQL to find all purchases. 
Join purchases with the customers table, so that Scott’s order will appear,
although instead of the customer’s first and last name, you should only see empty/blank. 
(Which kind of join should you use?).

SELECT 
    COALESCE(customers.first_name, '') AS first_name,
    COALESCE(customers.last_name, '') AS last_name,
    purchases.item_id,
    purchases.quantity_purchased
FROM purchases
LEFT JOIN customers ON purchases.customer_id = customers.customers_id;


Use SQL to find all purchases. 
Join purchases with the customers table, so that Scott’s order will NOT appear. 
(Which kind of join should you use?)

SELECT 
    customers.first_name,
    customers.last_name,
    purchases.item_id,
    purchases.quantity_purchased
FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customers_id;


*/



