# Using this REST Countries API, create the functionality which will write 10 random countries to your database.

# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population. Changed in class to name,capital,flag_code,population

import random
import requests
import psycopg2


url = 'https://restcountries.com/v3.1/all'

response = requests.get(url)

random_countries = []

if response.status_code == 200:
    countries = response.json()

    for _ in range(10):
        random_country = random.choice(countries)
        random_countries.append(random_country)

connection = psycopg2.connect(
            database='countries',
            user='postgres',
            password='admin',
            host='localhost',
            port='5432'
)

cursor = connection.cursor()

insert_into_query = """
INSERT INTO random_countries (name,capital,flag_code,population)
VALUES (%s,%s,%s,%s)
"""

for country in random_countries:
    name = country['name']['common']
    capital = country['capital']
    flag_code = country['cca2']
    population = country['population']
    
    params = (name,capital,flag_code,population)
    cursor.execute(insert_into_query,params)
    connection.commit()