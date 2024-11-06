import random

def exercise_1():
    # Write a function called display_message() that 
    # prints one sentence telling everyone what you are learning in this course.
    # Call the function, and make sure the message displays correctly.

    def display_message():
        print("IM LAERNTING")
    display_message()

def exercise_2():
    # Write a function called favorite_book() that accepts one parameter called title.
    # The function should print a message, such as "One of my favorite books is <title>".
    # For example: “One of my favorite books is Alice in Wonderland”
    # Call the function, make sure to include a book title as an argument when calling the function.
    title = input("What is your favorite book? ")

    def favorite_book(title):
        print(f"One of my favorite books is {title}")

    favorite_book(title)

def exercise_3():
    # Write a function called describe_city() that accepts the name of a city and its country as parameters.
    # The function should print a simple sentence, such as "<city> is in <country>".
    # For example “Reykjavik is in Iceland”
    # Give the country parameter a default value.
    # Call your function.
    city = input("Tell me a city? ")
    country = input(f"In wich country is {city}? ")

    def describe_city(city,country):
        print(f"{city} is in {country}")
    describe_city(city,country)

def exercise_4():
    # Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. 
    # Use the random module.
    # Compare the two numbers, if it’s the same number, display a success message, 
    # otherwise show a fail message and display both numbers.

    number = random.randrange(1,100)

    a = int(input("Write a number "))

    while a != number:
        print(f"You Failed, try again! Your number was {a}, we want {number}")
        a = int(input("Write a number "))
    else:
        print("You did it!")

def exercise_5():
    # Write a function called make_shirt() that accepts a size and the text of a message 
    # that should be printed on the shirt.

    # The function should print a sentence summarizing the size of the shirt 
    # and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
    # Call the function make_shirt().
    # 
    # Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
    # Call the function, in order to make a large shirt with the default message
    # Make medium shirt with the default message
    # Make a shirt of any size with a different message.
    # Bonus: Call the function make_shirt() using keyword arguments.

    size = input("What is the shirt size? ").strip()
    text = input("What is written on the shirt? ").strip()

    def make_shirt(**kwargs):
        size = kwargs.get('size', 'Large')
        text = kwargs.get('text', 'I love Python')

        if not size.strip():
            size = 'Large'
            text = 'I love Python'

        if size.lower() == "medium":
            text = "I love Python"

        print(f"The size of the shirt is {size} and the text is {text}")

    make_shirt(size=size, text=text)

def exercise_6():
    # Using this list of magician’s names

    magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

    # Create a function called show_magicians(), which prints the name of each magician in the list.
    # Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
    # Call the function make_great().
    # Call the function show_magicians() to see that the list has actually been modified.

    def show_magicians(magician_names):
        for name in magician_names:
            print(f"Much Magician, Very Power, How Bipitibopidi {name}")

    def make_great(magician_names):
        return [f"The Great {name}" for name in magician_names]


    show_magicians(magician_names)
    magician_names = make_great(magician_names)
    show_magicians(magician_names)

def exercise_7():
    # Create a function called get_random_temp().
    # This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
    # Test your function to make sure it generates expected results.
    def get_random_temp(season):
        if season.lower() == "winter":
            return random.uniform(-10.0,16.0)
        elif season.lower() == "spring":
            return random.uniform(17.0,25.0)
        elif season.lower() == "summer":
            return random.uniform(26.0,40.0)
        elif season.lower() == "fall":
            return random.uniform(17.0,25.0)
        else:
            return "Season Doesn`t Exist"
    # 
    # Create a function called main().
    # Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
    # Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

    def main():
        month = int(input("Please enter the month number (1 for January, 12 for December): "))

        if month in [12, 1, 2]:
            season = "winter"
        elif month in [3, 4, 5]:
            season = "spring"
        elif month in [6, 7, 8]:
            season = "summer"
        elif month in [9, 10, 11]:
            season = "fall"
        else:
            print("Invalid month number! Please enter a number between 1 and 12.")
            return main()
        
        temp = round(get_random_temp(season),1)
        print(f"La Temperature ze {temp} graus Celsius")
        
    # Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
    # below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
    # between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
    # between 16 and 23
    # between 24 and 32
    # between 32 and 40
        if temp < 16:
            print("Can you be cold, Batman? Cool party!")
        elif 16 <= temp <= 23:
            print("Tonight's forecast: A little simple jacket is enought")
        elif 24 <= temp <= 32:
            print("Shorts Allowed")
        else:
            print("Is this Rio de Janeiro? IS ON FIRE ANIMAL!")

        
    # Change the get_random_temp() function:
    # Add a parameter to the function, named ‘season’.
    # Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits 
    # based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
    # Now that we’ve changed get_random_temp(), let’s change the main() function:
    # Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. 
    # Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
    # Use the season as an argument when calling get_random_temp().
    # 
    # Bonus: Give the temperature as a floating-point number instead of an integer.
    # Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). 
    # Determine the season according to the month.

    main()

def exercise_8():
    # This project allows users to take a quiz to test their Star Wars knowledge.
    # The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.
    # 
    # Here is an array of dictionaries, containing those questions and answers

    data = [
        {
            "question": "What is Baby Yoda's real name?",
            "answer": "Grogu"
        },
        {
            "question": "Where did Obi-Wan take Luke after his birth?",
            "answer": "Tatooine"
        },
        {
            "question": "What year did the first Star Wars movie come out?",
            "answer": "1977"
        },
        {
            "question": "Who built C-3PO?",
            "answer": "Anakin Skywalker"
        },
        {
            "question": "Anakin Skywalker grew up to be who?",
            "answer": "Darth Vader"
        },
        {
            "question": "What species is Chewbacca?",
            "answer": "Wookiee"
        }
    ]

    def the_rights_to_the_wrongs(list_wrong, list_right, list_answer):
        print(f"\nYou got {len(list_right)} Right! Out of {len(list_wrong)+len(list_right)}")
        for i in list_right:
            print(i["question"])

        print(f"\nYou got {len(list_wrong)} Wrong! Out of {len(list_wrong)+len(list_right)}")
        for i in list_wrong:
            print(f"{i['question']}: Your answer - {list_answer[list_wrong.index(i)]}, Correct answer - {i['answer']}")

    def user_awnsers(list_awnser):
        print("\nYour Awnsers were:")
        for i in list_awnser:
            print(i)

    def show_do_milhao(data):
        print("\n\nAre you ready to play a game?")
        print("This will test all of your Star Wars Knowladge!\n\n")
        count_correct = 0
        count_incorrect = 0

        list_wrong = []
        list_awnser = []
        list_right = []

        while True:
            for index, question in enumerate(data, 1):
                print(f"For your {index} Question!")
                print(question["question"])
                user = input("What is your answer? (or type 'quit' to exit): ").lower().title()

                if user.lower() == 'quit':
                    print("\nThanks for playing!")
                    return
                
                if not user.strip():
                    print("\nPlease enter an answer.")
                    continue

                list_awnser.append(user)

                if user == question["answer"]:
                    print("Right Awnser!\n\n")
                    count_correct += 1
                    list_right.append(question)
                else:
                    print("Wrong Awnser!\n\n")
                    count_incorrect += 1
                    list_wrong.append(question)

                if count_incorrect >= 3:
                    print("\nGame Over! You had too many incorrect answers.")
                    play_again = input("\nWould you like to play again? (yes/no): ").lower()
                    if play_again == 'yes':
                        count_correct = 0
                        count_incorrect = 0
                        list_wrong.clear()
                        list_awnser.clear()
                        list_right.clear()
                        show_do_milhao(data)
                    else:
                        print("\nThanks for playing!")
                        return
                    
            break
                
        the_rights_to_the_wrongs(list_wrong,list_right,list_awnser)
        user_awnsers(list_awnser)


    show_do_milhao(data)

    # Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. 
    # Create a list of wrong_answers
    # Create a function that informs the user of his number of correct/incorrect answers.
    # Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
    # If he had more then 3 wrong answers, ask him to play again.



exercise_1()
exercise_2()
exercise_3()
exercise_4()
exercise_5()
exercise_6()
exercise_7()
exercise_8()