/*
We want to encourage families and kids to enjoy our movies.

Retrieve all films with a rating of G or PG, which are are not currently rented (they have been returned/have never been borrowed).

SELECT film.* 
FROM film
INNER JOIN inventory ON inventory.film_id = film.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
WHERE (film.rating = 'G' or film.rating = 'PG')
AND rental.return_date IS NOT NULL

Create a new table which will represent a waiting list for children’s movies. 
This will allow a child to add their name to the list until the DVD is available (has been returned). 
Once the child takes the DVD, their name should be removed from the waiting list (ideally using triggers, but we have not learned about them yet. 
Let’s assume that our Python program will manage this). Which table references should be included?

CREATE TABLE waiting_list (
    waiting_list_id SERIAL PRIMARY KEY,
    child_name VARCHAR(100) NOT NULL,
    film_id INT REFERENCES film(film_id),
    join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'Waiting'
);

Retrieve the number of people waiting for each children’s DVD. Test this by adding rows to the table that you created in question 2 above.

SELECT 
    film.title,
    COUNT(waiting_list.waiting_list_id) AS number_of_people_waiting
FROM 
    waiting_list
INNER JOIN 
    film ON waiting_list.film_id = film.film_id
WHERE 
    film.rating IN ('G', 'PG')
GROUP BY 
    film.title;


INSERT INTO waiting_list (child_name, film_id)
VALUES 
('John Doe', 1), 
('Jane Smith', 1),
('Billy Brown', 2);
*/




