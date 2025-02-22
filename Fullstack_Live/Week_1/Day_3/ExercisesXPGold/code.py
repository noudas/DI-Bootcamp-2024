def exercise_1():
    # Create a variable called birthdays. Its value should be a dictionary.
    # Initialize this variable with birthdays of 5 people of your choice. 
    # For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. 
    # Tip : Use the format “YYYY/MM/DD”.

    # Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
    # Ask the user to give you a person’s name and store the answer in a variable.
    # Get the birthday of the name provided by the user.
    # Print out the birthday with a nicely-formatted message.
    birthdays = {

        "Abram": "1998/05/18",
        "Jonathan": "1998/05/18",
        "Ariel":"1992/10/28",
        "Ilan":"1995/05/14",
        "Jesus":"0000/12/25"
    }

    print(birthdays)
    person = input("You can look up the birthdays of the people in the list! ")
    
    for key in birthdays:
        if key == person:
            print("HAPPY BIRTHDAY!", person)


def exercise_2():
    # Before asking the user to input a person’s name print out all of the names in the dictionary.
    # If the person that the user types is not found in the dictionary,
    # print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)
    
    birthdays = {

        "Abram": "1998/05/18",
        "Jonathan": "1998/05/18",
        "Ariel":"1992/10/28",
        "Ilan":"1995/05/14",
        "Jesus":"0000/12/25"
    }

    print(birthdays)
    person = input("You can look up the birthdays of the people in the list! ")

    if person in birthdays:
            print("HAPPY BIRTHDAY!", person)
    if person not in birthdays:
        print(f"Sorry, we don’t have the birthday information for {person}")


def exercise_3():
    # Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
    # Ask the user for a person’s name – store it in a variable.
    # Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
    # Now add this new data into your dictionary.
    # Make sure that if the user types any name that exists in the dictionary – 
    # including the name that he entered himself – the corresponding birthday is found and displayed.
        
    birthdays = {

        "Abram": "1998/05/18",
        "Jonathan": "1998/05/18",
        "Ariel":"1992/10/28",
        "Ilan":"1995/05/14",
        "Jesus":"0000/12/25"
    }

    print(birthdays)
    person = input("You can look up the birthdays of the people in the list! ")
    birth = input("Add the birthday like this “YYYY/MM/DD” ")

    if person in birthdays and birth in birthdays.values():
            print("HAPPY BIRTHDAY!", person)
    if person not in birthdays:
        print(f"Sorry, we don’t have the birthday information for {person}")

def exercise_4():

    stock = {
        "banana": 4,
        "apple": 2,
        "orange": 1.5,
        "pear": 3
    }

    # Using the dictionary above, each key-value pair represents an item and its price - 
    # print all the items and their prices in a sentence.

    print("Item prices:")
    for item, price in stock.items():
        print(f"The price of {item} is ${price}")
    
    # Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock
    # write some code to calculate how much it would cost to buy everything in stock.
    
    items_stock = {
        "banana": {"price": 4 , "stock":10},
        "apple": {"price": 2, "stock":5},
        "orange": {"price": 1.5 , "stock":24},
        "pear": {"price": 3 , "stock":1}
    }

    total_cost = 0
    for item, details in items_stock.items():
        item_cost = details["price"] * details["stock"]
        total_cost += item_cost

    print(f"\nThe total cost to buy everything in stock is: ${total_cost}")
exercise_1()
exercise_2()
exercise_3()
exercise_4()