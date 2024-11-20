-- Create a table called product_orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.

-- There should be a one to many relationship between the product_orders table and the items table. An order can have many items, but an item can belong to only one order.

-- Create a function that returns the total price for a given order.

-- Bonus :
-- Create a table called users.
-- There should be a one to many relationship between the users table and the product_orders table.
-- Create a function that returns the total price for a given order of a given user.


-- -- Create the users table
-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL
-- );

-- -- Create the product_orders table
-- CREATE TABLE product_orders (
--     order_id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(user_id),
--     order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create the items table
-- CREATE TABLE items (
--     item_id SERIAL PRIMARY KEY,
--     order_id INT REFERENCES product_orders(order_id) ON DELETE CASCADE,
--     product_name VARCHAR(100) NOT NULL,
--     quantity INT NOT NULL,
--     price DECIMAL(10, 2) NOT NULL  -- Price of a single item
-- );

-- CREATE OR REPLACE FUNCTION get_total_price(order_id_param INT)
-- RETURNS DECIMAL(10, 2) AS $$
-- DECLARE
--     total_price DECIMAL(10, 2);
-- BEGIN
--     SELECT SUM(quantity * price) INTO total_price
--     FROM items
--     WHERE order_id = order_id_param;

--     RETURN COALESCE(total_price, 0);
-- END;
-- $$ LANGUAGE plpgsql;


-- CREATE OR REPLACE FUNCTION get_user_order_total(user_id_param INT, order_id_param INT)
-- RETURNS DECIMAL(10, 2) AS $$
-- DECLARE
--     total_price DECIMAL(10, 2);
-- BEGIN
--     SELECT SUM(items.quantity * items.price) INTO total_price
--     FROM items
--     INNER JOIN product_orders ON items.order_id = product_orders.order_id
--     WHERE product_orders.user_id = user_id_param AND product_orders.order_id = order_id_param;

--     RETURN COALESCE(total_price, 0);
-- END;
-- $$ LANGUAGE plpgsql;

