def exercise_1():
    import datetime
    
    today = datetime.datetime.now()
    print(f"Today's date: {today.strftime('%B %d, %Y')}")
    
    holidays = [
        {"name": "New Year's Eve", "date": datetime.datetime(today.year, 12, 31)},
        {"name": "Christmas", "date": datetime.datetime(today.year, 12, 25)},
    ]
    
    holidays_time_left = []
    for holiday in holidays:
        if holiday['date'] > today:
            time_left = holiday['date'] - today
            holidays_time_left.append({"name": holiday['name'], "time_left": time_left})
    
    holidays_time_left.sort(key=lambda x: x['time_left'])
    
    if holidays_time_left:
        next_holiday = holidays_time_left[0]
        print(f"The next holiday is {next_holiday['name']} in {next_holiday['time_left'].days} days.")
    else:
        print("No upcoming holidays for this year.")

def exercise_2():
    # Exercise 2 : How Old Are You On Jupiter?
    # Instructions
    # Given an age in seconds, calculate how old someone would be on all those planets :
    age = 93600
    age_on_earth = age/3600
    print(f"Your age on Earth: {age_on_earth:.2f} years")
    print("""1. Earth
2. Mercury
3. Venus
4. Mars
5. Jupiter
6. Saturn
7. Uranus
8. Neptune""")
    choose_your_planet = int(input("Choose you Planet: "))
    match choose_your_planet:
        case 1:
            print(f"{age_on_earth:.2f} years old!")
        case 2:
            print(f"{(age_on_earth / 0.2408467):.2f} years old!")
        case 3:
            print(f"{(age_on_earth / 0.61519726):.2f} years old!")
        case 4:
            print(f"{(age_on_earth / 1.8808158):.2f} years old!")
        case 5:
            print(f"{(age_on_earth / 11.862615):.2f} years old!")
        case 6:
            print(f"{(age_on_earth / 29.447498):.2f} years old!")
        case 7:
            print(f"{(age_on_earth / 84.016846):.2f} years old!")
        case 8:
            print(f"{(age_on_earth / 164.79132):.2f} years old!")

    # 
    # Earth: orbital period 365.25 Earth days, or 31557600 seconds
    # Example : if someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.
    # Mercury: orbital period 0.2408467 Earth years
    # Venus: orbital period 0.61519726 Earth years
    # Mars: orbital period 1.8808158 Earth years
    # Jupiter: orbital period 11.862615 Earth years
    # Saturn: orbital period 29.447498 Earth years
    # Uranus: orbital period 84.016846 Earth years
    # Neptune: orbital period 164.79132 Earth years

def exercise_3():
    import re
    # Exercise 3 : Regular Expression #1
    # Instructions
    # Hint: Use the RegEx (module)
    # 
    def return_numbers(string):
        string = re.sub("[^0-9]","",string)
        print(string)
    # Use the regular expression module to extract numbers from a string.
    # 
    # Example
    # 
    return_numbers('k5k3q2g5z6x9bn') 
    # // Excepted output : 532569

def exercise_4():
    import re
    # Exercise 4 : Regular Expression #2
    # Instructions
    # Hint: Use the RegEx (module)
    # 
    pattern = r'^[A-Z][a-z]+ [A-Z][a-z]+$'

    # Explanation:
    # ^         : Start of the string
    # [A-Z]     : First letter of the first name should be uppercase
    # [a-z]+    : The rest of the first name should contain lowercase letters only
    # ' '       : Single space between first and last name
    # [A-Z]     : First letter of the last name should be uppercase
    # [a-z]+    : The rest of the last name should contain lowercase letters only
    # $         : End of the string

    name = input("Write your name: ")
    if re.match(pattern,name):
        print("Good name!")
    else:
        print("Wrong name, try again")

    
    # Ask the user for their full name (example: “John Doe”), and check the validity of their answer:
    # The name should contain only letters.
    # The name should contain only one space.
    # The first letter of each name should be upper cased.
    # 

def exercise_5():
    import re
    import random
    import string
    # Exercise 5: Python Password Generator
    # Instructions
    # Create a Python program that will generate a good password for you.
    # 
    # Program flow:
    # 
    # Ask the user to type in the number of characters that the password should have (password length) – between 6 and 30 characters.
    # Validate the input. Make sure the user is inputing a number between 6 to 30. 
    # Create a loop which will continue to ask the user for an input until they enter a valid one.
    #def password_length():
    #    length = 0
    #    while length < 6 or length > 30:
    #        length = int(input("Type how long the password is going to be (between 6 - 30): "))
    #        if length < 6 or length > 30:
    #            print("Password too short or too long")
    #    return length

    #length = password_length()

    length = random.randrange(6,30)

    password = ''

    while len(password) < length:
        password += random.choice(string.digits)
        password += random.choice(string.ascii_lowercase)
        password += random.choice(string.ascii_lowercase)
        password += random.choice(string.ascii_uppercase)
        password += random.choice(string.ascii_uppercase)
        password += random.choice('!@#$%^&_')
    random.shuffle(list(password))
    print(password)
    

         


    # Generate a password with the required length.
    # 
    # Print the password with a user-friendly message which reminds the user to keep the password in a safe place!
    # 
    # Rules for the validity of the password
    # 
    # Each password should contain:
    # At least 1 digit (0-9)
    # At least 1 lower-case character (a-z)
    # At least 1 upper-case character (A-Z)
    # At least 1 special character (eg. !, @, #, $, %, ^, _, …)
    # Once there is at least 1 of each, the rest of the password should be composed of more characters from the options presented above.
    # 
    # Create a test function first!
    # 
    # Do the following steps 100 times, with different password lengths:
    # Generate a password.
    # Test the password to ensure that:
    # it fulfills all the requirements above (eg. it has at least one digit, etc.)
    # it has the specified length.

exercise_1()
exercise_2()
exercise_3()
exercise_4()
for _ in range(100):
    exercise_5()