# PART 1: Authentication CLI - login:
# Create a dictionary that contains users: each key will represent a username, and each value will represent that user’s password. 
# Initialize this dictionary with 3 users & passwords.
# Create a loop that does the following:
# If the user inputs “exit”, break out of the loop.
# If the user inputs “login”, ask them for their username and password.
# If the user’s details exist print “you are now logged in”.
# If the user is successfully logged in, store the username in a variable called logged_in so we can track it later.
# 
# Initialize the dictionary with users and passwords
# 
# PART 2 : Authentication CLI - signup:
# Continuation of the Exercise Above - Authentication CLI - login
# 
# If the user does not exist ask if they would like to sign up:
# Ask the user for a username and make sure it doesn’t exist as a key in our dictionary, if the username is not valid continue asking the user to input a username.
# Ask the user for a password. The password is the value.

# PART 3 : Database
# Replace the dictionary of users with a database table.
# 
# Create the functionality which will allow us to read and write users to and from the database.
# 
# Bonus: Try and encrypt the users password before storing it in the database.


import psycopg2
from psycopg2 import sql


# Function to create a connection to the PostgreSQL database

def create_connection():
    conn = psycopg2.connect(
        database='ExerciseXPGold_Python_SQL',
        user='postgres',
        password='admin',
        host='localhost',
        port='5432'
    )
    return conn

# Function to create the users table if it doesn't exist
def create_table():
    conn = create_connection()
    cursor = conn.cursor()
    
    # SQL query to create a users table if it doesn't exist
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    ''')
    
    conn.commit()
    conn.close()

# Function to check if a user exists in the database
def user_exists(username):
    conn = create_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
    user = cursor.fetchone()
    
    conn.close()
    return user is not None

# Function to insert a new user into the database
def insert_user(username, password):
    conn = create_connection()
    cursor = conn.cursor()
    
    cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
    conn.commit()
    conn.close()

# Function to check user credentials for login
def validate_user(username, password):
    conn = create_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()
    
    conn.close()
    return user is not None

def login():
    """Function to handle login"""
    global logged_in
    username = input("Username: ").strip()
    password = input("Password: ").strip()

    # Check if the username exists and the password is correct
    if validate_user(username, password):
        print("You are now logged in.")
        logged_in = username  # Store the logged-in username
        return True
    else:
        print("Invalid username or password. Try again.")
        return False

def signup():
    """Function to handle sign-up"""
    print("Would you like to sign up for an account?")
    signup_response = input("Enter 'yes' to sign up or 'no' to return: ").strip().lower()

    if signup_response == "yes":
        # Ask for a valid username that doesn't exist yet
        while True:
            new_username = input("Enter a new username: ").strip()
            if user_exists(new_username):
                print("Username already exists. Please choose another.")
            else:
                break  # Exit the loop when a valid username is entered

        # Ask for a password
        new_password = input("Enter a password: ").strip()

        # Insert the new user into the database
        insert_user(new_username, new_password)
        print(f"Account created successfully! You can now log in with {new_username}.")
    elif signup_response == "no":
        print("Returning to main menu.")
    else:
        print("Invalid response. Returning to main menu.")

def main():
    """Main function to drive the program"""
    global logged_in

    create_table()  

    while True:
        command = input("Enter a command ('login' to log in, 'signup' to create an account, or 'exit' to quit): ").strip().lower()

        if command == "exit":
            print("Exiting the program.")
            break

        elif command == "login":
            if login():
                break 

        elif command == "signup":
            signup()

        else:
            print("Invalid command. Please enter 'login', 'signup', or 'exit'.")

if __name__ == "__main__":
    main()
