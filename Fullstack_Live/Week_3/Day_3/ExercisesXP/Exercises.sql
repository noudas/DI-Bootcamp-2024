/*Exercise 1

Get a list of all the languages, from the language table.

-- SELECT * from language

Get a list of all films joined with their languages – 
select the following details : film title, description, and language name.

-- SELECT film.title, language.name as language, film.description
-- FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id


Get all languages, even if there are no films in those languages – 
select the following details : film title, description, and language name.

-- SELECT film.title, language.name AS language, film.description
-- FROM language
-- LEFT JOIN film 
-- ON language.language_id = film.language_id;

Create a new table called new_film with the following columns : id, name. 
Add some new films to the table.

-- CREATE TABLE new_film(
-- film_id SERIAL PRIMARY KEY,
-- film_name VARCHAR(40) NOT NULL
-- )

-- INSERT INTO new_film (film_name) 
-- VALUES 
-- ('Pick of Destiny'),
-- ('The Quest for the Holy Grail'),
-- ('Life of Brian: The Sequel'),
-- ('The Ministry of Silly Walks'),
-- ('The D War: Tribute to Tenacity'),
-- ('Spinal Tap and the Holy Grail'),
-- ('The Knights Who Say Ni: Return'),
-- ('Rock of Destiny'),
-- ('Monty Python’s Flying Circus: The Movie'),
-- ('The Meaning of Life... and Rock');

Create a new table called customer_review, which will contain film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
It should have the following columns:
review_id – a primary key, non null, auto-increment.
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review.
score – the rating of the review (1-10).
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.

-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY,
-- film_id INT REFERENCES new_film(film_id) ON DELETE CASCADE,
-- language_id INT REFERENCES language(language_id),
-- title VARCHAR(80) NOT NULL,
-- score DECIMAL(3,2) NOT NULL,
-- review_text VARCHAR,
-- last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- ) 


Add 2 movie reviews. 
Make sure you link them to valid objects in the other tables.

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- SELECT 
--     (SELECT film_id FROM new_film WHERE film_name = 'Pick of Destiny'),
--     language.language_id,
--     'BRUTAL!',
--     9.5,
--     'This movie was amazing and full of adventure.', 
--     CURRENT_TIMESTAMP
-- FROM 
--     language
-- WHERE 
--     language.language_id = 1;


-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- SELECT 
--     (SELECT film_id FROM new_film WHERE film_name = 'Life of Brian: The Sequel'),
--     language.language_id,
--     'BLASFEMY!',
--     1.5,
--     'WHAT LOAD OF BAFFOONERY.', 
--     CURRENT_TIMESTAMP
-- FROM 
--     language
-- WHERE 
--     language.language_id = 1;



Delete a film that has a review from the new_film table, what happens to the customer_review table?

-- DELETE FROM new_film WHERE film_name = 'Pick of Destiny'

-- select * from new_film;
-- select * from customer_review

*/


/*
Exercise 2

Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE language SET name = 'Portuguese BR' WHERE language_id = 5

Which foreign keys (references) are defined for the customer table?
store_id, address_id

How does this affect the way in which we INSERT into the customer table?
We need to call the tables that they are associated and can only be removed if it is removed in the opther tables as well.
It ensures that the values for store_id and address_id already exist in the respective tables.


We created a new table called customer_review. 
Drop this table. Is this an easy step, or does it need extra checking?
-- DROP TABLE customer_review

Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- select COUNT(return_date is NULL) from rental

Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT rental.*,payment.amount FROM rental
-- INNER JOIN payment
-- ON payment.rental_id = rental.rental_id
-- WHERE rental.return_date is NULL
-- ORDER BY payment.amount DESC 
-- LIMIT 30

Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, 
but he can’t remember their names. Can you help him find which movies he wants to rent?
The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- SELECT film.*
-- FROM film
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id
-- INNER JOIN actor ON actor.actor_id = film_actor.actor_id
-- WHERE (actor.first_name = 'Penelope' AND actor.last_name = 'Monroe') 
-- 	AND film.description ILIKE '%sumo wrestler%';

The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT *
-- FROM film
-- WHERE (length < 60) 
-- AND (description ILIKE '%documentary%')
-- AND rating = 'R'

The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between
the 28th of July and the 1st of August, 2005.
-- SELECT film.*
-- FROM film
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- WHERE (customer.first_name = 'Matthew' AND customer.last_name = 'Mahan')
-- AND (rental.return_date BETWEEN '2005-07-28' and '2005-08-01')
-- AND film.rental_rate > 4


The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description,
and it looked like it was a very expensive DVD to replace.

SELECT film.*
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE (customer.first_name = 'Matthew' AND customer.last_name = 'Mahan')
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC


*/