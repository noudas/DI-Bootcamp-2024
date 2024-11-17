/*Add two more female actors in the table actors. Add them one by one
Add three more actors, add all of them in one query !
Retrieve everything from the table actors

-- Adding first female actor
INSERT INTO actors (first_name, last_name, age, number_of_oscars) 
VALUES ('Scarlett', 'Johansson', '1984-11-22', 1);

-- Adding second female actor
INSERT INTO actors (first_name, last_name, age, number_of_oscars) 
VALUES ('Natalie', 'Portman', '1981-06-09', 1);

INSERT INTO actors (first_name, last_name, age, number_of_oscars) 
VALUES 
    ('Leonardo', 'DiCaprio', '1974-11-11', 1),
    ('Tom', 'Hanks', '1956-07-09', 2),
    ('Brad', 'Pitt', '1963-12-18', 2);

*/


--In this exercise we will be using the actors table from todays lesson.
--1. Count how many actors are in the table.

-- SELECT * FROM actors

-- There are 7 actors

--2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- It will raise a syntax error an error

/*
INSERT INTO actors (first_name, last_name, age, number_of_oscars) 
VALUES ();

*/

