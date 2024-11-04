import random


def exercise_1():
    # Write code that concatenates two lists together without using the + sign.

    lista = ["a"]
    listb = ["b"]

    listc = lista + listb

    print(listc)

def exercise_2():
    # Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

    for i in range(1500, 2500):
        if i % 5 == 0 and i % 7 == 0:
            print(f"{i} is a multiple of 5 and 7")

def exercise_3():
    # Using this variable
    # 
    # names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
    # 
    # Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
    # Example: if input is 'Cortana' we should be printing the index 1

    names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

    per = input('Write the name: ')


    if per in names:
        # Find and print the index of the first occurrence
        first_index = names.index(per)
        print(f"The name '{per}' is at index {first_index}.")
    else:
        print(f"The name '{per}' is not in the list.")

def exercise_4():
    # Ask the user for 3 numbers and print the greatest number.

    # Test Data
    # Input the 1st number: 25
    # Input the 2nd number: 78
    # Input the 3rd number: 87
    # The greatest number is: 87
    b = 0
    for i in range(3):
        a = int(input("Type a number: "))
        if a > b:
            b = a
    print(f"The greatest number is: {b}")
        
def exercise_5():
    # Create a string of all the letters in the alphabet
    # Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.
    lowercase_alphabet = ''.join(chr(i) for i in range(ord('a'), ord('z') + 1))
    for letter in lowercase_alphabet:
        if letter in ["a","e","i","o","u"]:
            print(f"{letter} is Vowel")
        else:
            print(f"{letter} is Consonant")

def exercise_6():
    # Ask a user for 7 words, store them in a list named words.
    # Ask the user for a single character, store it in a variable called letter.
    # Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
    # If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.
    list_word = []

    for i in range(7):
        a = input(f"Write a word ({i+1}/7) ")
        list_word.append(a)
    b = input("Type a letter: ")

    for word in list_word:
        if b in word:
            index = word.index(b)
            print(f"The letter '{b}' first appears in '{word}' at index {index}.")
        else:
            print(f"The letter '{b}' is not found in '{word}'.")

def exercise_7():
    # Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. 
    # Use the sum() function to see how quickly Python can add a million numbers.
    lista = []
    for i in range(1,1000000+1):
        lista.append(i)
    print(min(lista))
    print(max(lista))
    print(sum(lista))

def exercise_8():

    # Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
    # Suppose the following input is supplied to the program: 34,67,55,33,12,98

    # Then, the output should be:

    # ['34', '67', '55', '33', '12', '98']
    # ('34', '67', '55', '33', '12', '98')

    a = "34,67,55,33,12,98"

    lista = a.split(",")
    listb = tuple(lista)

    print(lista,listb)

def exercise_9():
    # Ask the user to input a number from 1 to 9 (including).
    # Get a random number between 1 and 9. Hint: random module.
    # If the user guesses the correct number print a message that says Winner.
    # If the user guesses the wrong number print a message that says better luck next time.
    # Bonus: use a loop that allows the user to keep guessing until they want to quit.
    # Bonus 2: on exiting the loop tally up and display total games won and lost.

    a = 0
    b = random.randrange(1,10)
    count = 0

    while a != b:
        a = int(input("Type a number from 1 to 9: "))
        count += 1
        if a == b:
            print("UHU YOU WIN!")
        else:
            print("Try Again")
    print(f"You guessed {count} times")
    
    



exercise_1()
exercise_2()
exercise_3()
exercise_4()
exercise_5()
exercise_6()
exercise_7()
exercise_8()
exercise_9()