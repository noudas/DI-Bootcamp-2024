# Hint: For this exercise, check out the documentation of the Giphy API
# 
# You will work with this part of the documention
# 
# You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
# Explanation of the Gif URL
# 
# q Request Paramater: Search query term or phrase. We are searching for “hilarious” gifs
# 
# rating Request Paramater: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation
# 
# api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
# Fetch the giphs from the Gif URL provided above.
# 
# Use f-strings and variables to build the URL string we’re using for the fetch.
# If the status code is 200 return the result as a JSON object.
# Only return gifs which have a height bigger then 100.
# Return the length of the object you received in the previous question.
# Only return the first 10 gifs. Hint: In the Giphy Documentation, check out the relevant Request Parameters.
# 
# 
# Exercise 3 : Giphy API #2
# Instructions
# Hint: For this exercise, You will work with this part of the documention
# You will use this API KEY : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
# 
# Create a small Python program which asks the user for a term or phrase and returns all the relevant gifs. (Example: all the “hilarious” gifs)
# If the term or phrase doesn’t exist or if the user didn’t enter a correct term or phrase, return the trending gifs of the day and a message stating that you couldn’t find the requested term or phrase.
# Note from the documentation : GIPHY Trending returns a list of the most relevant and engaging content each and every day.