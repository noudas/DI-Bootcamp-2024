def exercise_1():
    # Create a set called my_fav_numbers with all your favorites numbers.
    # Add two new numbers to the set.
    # Remove the last number.
    # Create a set called friend_fav_numbers with your friend’s favorites numbers.
    # Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
    print("\n--- Exercise 1 ---\n")
    my_fav_numbers = set()
    my_fav_numbers.add(42)
    my_fav_numbers.add(8001)
    my_fav_numbers.pop()

    friend_fav_numbers = {42,8001, 58008}
    our_fav_numbers = friend_fav_numbers.union(my_fav_numbers)
    print(our_fav_numbers)

def exercise_2():
    # Given a tuple which value is integers, is it possible to add more integers to the tuple?
    print("\n--- Exercise 2 ---\n")
    print("No, tuples are immutable, they cannot be changed once created")

def exercise_3():
    # Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

    # Remove “Banana” from the list.
    # Remove “Blueberries” from the list.
    # Add “Kiwi” to the end of the list.
    # Add “Apples” to the beginning of the list.
    # Count how many apples are in the basket.
    # Empty the basket.
    # Print(basket)
    print("\n--- Exercise 3 ---\n")

    basket = ["Banana", "Apples", "Oranges", "Blueberries"]

    basket.remove("Banana")
    basket.pop(basket.index("Blueberries"))

    basket.append("Kiwi")
    basket.insert(0,"Apples")

    print(f"There are {basket.count("Apples")} Apples")

    basket.clear()

    print(basket)

def exercise_4():
    print("\n--- Exercise 4 ---\n")
    # Recap – What is a float? What is the difference between an integer and a float?
    print("Int is a full number or numbers without a decimal component, a float is a number with a decimal point")
    # Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
    # Can you think of another way to generate a sequence of floats?
    
    list1 = []
    list2 = []

    for i in range(3,11):
        i = i * 0.5
        list1.append(i)
    print("Using a for loop ", list1)
    
    i = 1

    while i < 5:
        i += 0.5
        list2.append(i)

    print("Using a while loop ", list2)

def exercise_5():

    print("\n--- Exercise 5 ---\n")
    list1 = []
    for i in range(1,21):
        print(i)
        list1.append(i)
    
    print("\nSolution 1: Using the previous range as the list")
    for i in list1:
        if int(list1.index(i)) % 2 == 0:
            print(f"{i} has an even index") 

    print("\nSolution 2: Using the range as the index")
    for i in range(1,21):
        if i % 2 == 0:
            print(f"{i} has an even index") 

def exercise_6():
    
    print("\n--- Exercise 6 ---\n")

    bestname = "Jonathan"
    name = ''
    while name != bestname:
        name = input("Write the best name: ").lower().capitalize()
        if name != bestname:
            print("Wrong name! Try Again")
        else:
            print("You did it!")

def exercise_7():
    print("\n--- Exercise 7 ---\n")

    # Ask the user to input their favorite fruit(s) (one or several fruits).
    # Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".

    # Store the favorite fruit(s) in a list (convert the string of words into a list of words).
    # Now that we have a list of fruits, ask the user to input a name of any fruit.
    # If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
    # If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

    quitting = "y"
    fruits = []
    while quitting.lower() == "y":
        new_fruits = input("Type your favorite fruit(s) separated by spaces: ").lower().title().split()
        fruits.extend(new_fruits)
        print(f"Current list of fruits: {fruits}")
        quitting = input("Do you wish to add more fruits? Write 'y' to add more or 'n' to leave: ")
    
    print(f"Current list of fruits: {fruits}")
    bestfruit = input("Type your favoritest fruitest: ").lower().capitalize()
    if bestfruit in fruits:
        print("You chose one of your favorite fruits! Enjoy!")
    else:
        print("You chose a new fruit. I hope you enjoy")

def exercise_8():
    # Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
    # As they enter each topping, print a message saying you’ll add that topping to their pizza.
    # Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

    print("\n--- Exercise 8 ---\n")

    user_input = ""
    pizza_topping = []
    sum = 10

    while user_input.lower() != "quit":
        pizza_topping.append(input("Write the topping you want in your pizza! "))
        print(f"Your pizza will have {pizza_topping}")
        user_input = input("Do you wish to add more toppings? Press enter to continue or 'quit' to exit: ")

    for i in pizza_topping:
        sum += 2.5

    print(f"Your toppings were {pizza_topping} leading to a total of $$:{sum}")

def exercise_9():
    print("\n--- Exercise 9 ---\n")

    # A movie theater charges different ticket prices depending on a person’s age.
    # if a person is under the age of 3, the ticket is free.
    # if they are between 3 and 12, the ticket is $10.
    # if they are over the age of 12, the ticket is $15.
    # 
    # Ask a family the age of each person who wants a ticket.
    # 
    # Store the total cost of all the family’s tickets and print it out.
    # 
    # A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
    # Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
    # At the end, print the final list.

    sum = 0

    numberoffamilymembers = int(input("How many people are in your family? Type in numbers only: "))
    for i in range(numberoffamilymembers):
        member = int(input(f"How old is the {i+1} family member? "))
        if member < 3:
            sum += 0
        elif 3 <= member < 12:
            sum += 10
        else:
            sum += 15

    print(f"The total is ${sum} moneys\n")

    quitting = "y"
    teens = []
    while quitting.lower() == "y":
        new_teens = input("Type your names separated by spaces: ").lower().title().split()
        teens.extend(new_teens)
        print(f"Current list of names is: {teens}")
        quitting = input("Do you wish to add more names? Write 'y' to add more or 'n' to leave: ")

    allowed_tweens = []
    for tween in teens:
        age = int(input(f"How old is {tween}? "))
        if 16 <= age <= 21:
            allowed_tweens.append(tween)
            print("You are allowed!")
        else:
            print("YOU SHALL NOT SEE!!")

    print(f"Only these people are allowed to see the movie: {allowed_tweens}")

def exercise_10():
    print("\n--- Exercise 10 ---\n")
    # Using the list below :
    # 
    # sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
    # 
    # The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
    # We need to prepare the orders of the clients:
    # Create an empty list called finished_sandwiches.
    # One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
    # After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
    # I made your tuna sandwich
    # I made your avocado sandwich
    # I made your egg sandwich
    # I made your chicken sandwich

    sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
    finished_sandwiches = []


    while "Pastrami sandwich" in sandwich_orders:
        print("Removing all Pastrami sandwich, not kosher\n")
        sandwich_orders.remove("Pastrami sandwich")

    while sandwich_orders != []:
        finished_sandwiches.append(sandwich_orders[0])
        sandwich_orders.pop(0)
    
    for sandwich in finished_sandwiches:
        print(f"I made your {sandwich}")
        


#exercise_1()
#exercise_2()
#exercise_3()
#exercise_4()
#exercise_5()
#exercise_6()
#exercise_7()
#exercise_8()
#exercise_9()
exercise_10()