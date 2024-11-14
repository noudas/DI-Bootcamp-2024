# Building a Weather App
# The current weather data can be retrieved from OpenWeatherMap using the Observation module in PyOWM (Python OpenWeatherMap).
# Use this documentation for this Mini Project.
# 
# Get the current weather in Tel Aviv.
# Get current wind info of Tel Aviv.
# Get today’s sunrise and sunset times of Tel Aviv.
# Display all these information in a user friendly way.
# 
# Recreate these steps, but this time, ask the user for a location (display the information in a user friendly way).
# Instead of working with the name of the city, retrieve the id of the city.
# Check out the documentation section : “Identifying cities and places via city IDs”.
# 
# Retrieve weather forecasts : The OpenWeatherMap free tier gives you access to 5 day forecasts. The forecasts contain the weather data in three-hour intervals.
# The methods for retrieving the forecast are:
# forecast_at_place('Los Angeles, US', '3h')
# forecast_at_id(5391959, '3h')
# forecast_at_coords(lat=37.774929, lon=-122.419418, interval='3h')
# Forecasts are useful if you want to know what the weather conditions will be throughout the day/week.
# 
# Use this API to retrieve the Air Pollution in a specific city.
# Mini project : XP Ninja
# BONUS: Your goal is to produce a weather GUI that shows the three-day humidity forecast for a city of your choice.
# If you’ve never built a GUI with Python, don’t worry! We’ll be going through step by step how to build it. We will be using Matplotlib to
# plot the weather data. Matplotlib uses Tkinter behind the scenes to display the interactive GUI.
# 
# 
# 
# You have to reproduce this bar chart:
# 
# 
# 
# 
# 
# You will have to use :
# 
# the matplotlib module for the bar chart
# the pytz and datetime module for the date
# the pyowm module for the weather
# 
# 
# Instructions:
# 
# Start by updating the values for the ylabel and title by creating a function called init_plot().
# Create a function called plot_temperatures() to determine the details of the bar chart.
# Create a function called write_humidity_on_bar_chart() to display the % humidity in the bar chart.
# Style the bar chart