# Using the requests and time modules, create a function which returns the amount of time it takes a webpage to load 
# (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.

import requests
import time

sites = ['https://www.google.com','https://www.ynetnews.com/','https://www.imdb.com','https://www.pokemonbattlearena.net']


for i in sites:
    try:
        start = time.time()
        requests.get(i)
        end_time = time.time() - start

        print(f"To reach {i} it took {end_time:.4f} seconds")

    except requests.ConnectionError:
        print(f"Failed to reach {i}")
    