/*

You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
Find out how many films there are for each rating.

SELECT * FROM film ORDER BY rating;

Get a list of all the movies that have a rating of G or PG-13.
Filter this list further: 
look for only movies that are under 2 hours long, and 
whose rental price (rental_rate) is under 3.00. 
Sort the list alphabetically.

SELECT * 
FROM film 
WHERE (rating = 'G' OR rating = 'PG-13')
AND length < 120
AND rental_rate < 3;

Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).

UPDATE customer
SET first_name = 'Jay Jonah', last_name = 'Jamersson'
WHERE customer_id = 1

SELECT * FROM customer WHERE customer_id = 1
*/



