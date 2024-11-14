# Building a Weather App
# The current weather data can be retrieved from OpenWeatherMap using the Observation module in PyOWM (Python OpenWeatherMap).
# Use this documentation for this Mini Project.
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

# Get the current weather in Tel Aviv.
# Get current wind info of Tel Aviv.
# Get today’s sunrise and sunset times of Tel Aviv.
# Display all these information in a user friendly way.

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

import pyowm
import matplotlib.pyplot as plt
import pytz
from datetime import datetime

# Initialize API Key
owm = pyowm.OWM("c315264e560ff0461323fb5e81ab7f3a")

# Initialize Weather Manager
weather_mgr = owm.weather_manager()

# Function to initialize the plot with labels and title
def init_plot():
    plt.xlabel('Time (3-hour intervals)', fontsize=12)
    plt.ylabel('Humidity (%)', fontsize=12)
    plt.title('3-Day Humidity Forecast', fontsize=14)

# Function to plot humidity over time on the bar chart
def plot_temperatures(forecast_data):
    times = []
    humidity_values = []

    # Get the 3-hour interval forecasts
    for weather in forecast_data:
        timestamp = weather.reference_time()  # Get the timestamp for the 3-hour interval
        time = datetime.utcfromtimestamp(timestamp).strftime('%H:%M')
        times.append(time)
        humidity_values.append(weather.humidity)  # Get the humidity for that interval

    # Create the bar chart
    plt.bar(times, humidity_values, color='skyblue')

# Function to write the humidity percentage on each bar in the chart
def write_humidity_on_bar_chart(forecast_data):
    times = []
    humidity_values = []

    # Extract data for annotations
    for weather in forecast_data:
        timestamp = weather.reference_time()
        time = datetime.utcfromtimestamp(timestamp).strftime('%H:%M')
        times.append(time)
        humidity_values.append(weather.humidity)

    # Add the humidity values on top of each bar
    for i, v in enumerate(humidity_values):
        plt.text(i, v + 2, f'{v}%', ha='center', va='bottom', fontsize=10)

# Main function to retrieve weather forecast and plot the chart
def plot_weather_forecast(location):
    try:
        # Get the 5-day weather forecast in 3-hour intervals
        forecast = weather_mgr.forecast_at_place(location, interval='3h')
        forecast_data = forecast.forecast.weathers[:8]  # Get the first 3-day forecast (24 hours, 3-hour intervals)

        # Initialize plot
        init_plot()

        # Plot temperatures (humidity values)
        plot_temperatures(forecast_data)

        # Annotate bars with humidity values
        write_humidity_on_bar_chart(forecast_data)

        # Display the plot
        plt.xticks(rotation=45)
        plt.tight_layout()  # To make sure everything fits
        plt.show()

    except pyowm.commons.exceptions.NotFoundError:
        print("The location entered is not found. Please try again with a valid city and country code.")
    except pyowm.commons.exceptions.UnauthorizedError:
        print("Invalid API key. Please check your API key.")

# Prompt the user to enter a location
location = input("Enter a city and country code (e.g., 'Tel Aviv,IL'): ")

# Plot the weather forecast for the user-specified location
plot_weather_forecast(location)