/*
Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?

-- SELECT * FROM rental WHERE return_date IS NULL

Get a list of all customers who have not returned their rentals. Make sure to group your results.

-- SELECT customer.* 
-- FROM customer
-- INNER JOIN rental
-- ON rental.customer_id = customer.customer_id
-- WHERE rental.return_date IS NULL

Get a list of all the Action films with Joe Swank.
Before you start, could there be a shortcut to getting this information? Maybe a view?

-- SELECT film.* 
-- FROM film
-- INNER JOIN film_category ON film_category.film_id = film.film_id
-- INNER JOIN category ON category.category_id = film_category.category_id
-- INNER JOIN film_actor ON film_actor.film_id = film.film_id
-- INNER JOIN actor ON actor.actor_id = film_actor.actor_id
-- WHERE (actor.first_name = 'Joe' AND actor.last_name = 'Swank')
-- AND category.name = 'Action'
*/



/*
There is a zombie plague approaching! 
The DVD rental company is offering to lend all of its DVDs to the local shelters, 
so that the citizens can watch the movies together in the shelters until the zombies are destroyed by the armed forces. Prepare tables with the following data:

How many stores there are, and in which city and country they are located.
-- SELECT COUNT(store.store_id) AS store_count, address.address, city.city, country.country
-- FROM store
-- INNER JOIN address ON address.address_id = store.address_id
-- INNER JOIN city ON city.city_id = address.city_id
-- INNER JOIN country ON country.country_id = city.country_id
-- GROUP BY address.address, city.city, country.country;

How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.
-- SELECT SUM(film.length) AS viewing_time, store.store_id AS store
-- FROM film
-- INNER JOIN inventory ON inventory.film_id = film.film_id
-- INNER JOIN store ON store.store_id = inventory.store_id
-- GROUP BY store.store_id

Make sure to exclude any inventory items which are not yet returned. (Yes, even in the time of zombies there are people who do not return their DVDs)
-- SELECT * FROM film
-- INNER JOIN inventory ON inventory.film_id = film.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- WHERE rental.return_date IS NOT NULL

A list of all customers in the cities where the stores are located.
-- SELECT DISTINCT customer.*
-- FROM customer
-- INNER JOIN address ON customer.address_id = address.address_id
-- INNER JOIN city ON address.city_id = city.city_id
-- INNER JOIN store ON store.address_id = address.address_id;


A list of all customers in the countries where the stores are located.
SELECT DISTINCT customer.*
FROM customer
INNER JOIN address ON customer.address_id = address.address_id
INNER JOIN city ON address.city_id = city.city_id
INNER JOIN country ON country.country_id = city.country_id
INNER JOIN store ON store.address_id = address.address_id;

Some people will be frightened by watching scary movies while zombies walk the streets. 
Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or 
contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… Get the sum of their viewing time (length).
Hint : use the CHECK contraint
SELECT SUM(film.length) AS total_safe_viewing_time
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON category.category_id = film_category.category_id
WHERE category.name != 'Horror'
AND film.title NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
AND film.description NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%']);


For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).
SELECT SUM(film.length) AS total_minutes,
       SUM(film.length) / 60 AS total_hours,
       SUM(film.length) / 1440 AS total_days
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON category.category_id = film_category.category_id
WHERE category.name != 'Horror'
AND film.title NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
AND film.description NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%']);

*/





