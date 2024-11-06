def exercise_1():
    # Convert the two following lists, into dictionaries.
    # Hint: Use the zip method
    # keys = ['Ten', 'Twenty', 'Thirty']
    # values = [10, 20, 30]
    # Expected output:
    # {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

    keys = ['Ten', 'Twenty', 'Thirty']
    values = [10, 20, 30]

    dictio = dict(zip(keys,values))
    print(dictio)

def exercise_2():
    # A movie theater charges different ticket prices depending on a person’s age.
    # if a person is under the age of 3, the ticket is free.
    # if they are between 3 and 12, the ticket is $10.
    # if they are over the age of 12, the ticket is $15.
    
    # Given the following object:
    # family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
    # 
    # 
    # How much does each family member have to pay ?
    # 
    # Print out the family’s total cost for the movies.
    # Bonus: Ask the user to input the names and ages instead of using the provided family variable 
    # (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
    dicio = {}
    cost = 0
    familycount = int(input("How many people are in your family: "))

    for member in range(familycount):
        name = input(f"What is the name of the {member + 1} member: ")
        age = int(input(f"What is the age of the {member + 1} member: "))
        dicio[name] = age
        
        # Calculate cost based on age as we go
        if 3 <= age <= 12:
            cost += 10
        elif age > 12:
            cost += 15

    print(f"The total cost of the tickets is: {cost}")

def exercise_3():
#   Here is some information about a brand.

#   name: Zara 
#   creation_date: 1975 
#   creator_name: Amancio Ortega Gaona 
#   type_of_clothes: men, women, children, home 
#   international_competitors: Gap, H&M, Benetton 
#   number_stores: 7000 
#   major_color: 
#       France: blue, 
#       Spain: red, 
#       US: pink, green
#   
#   
#   2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
#   The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
    
    brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona' ,
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color':{
        'France': ['blue'], 
        'Spain': ['red'], 
        'US': ['pink', 'green']
        }
        }
    

#   3. Change the number of stores to 2.
    brand['number_stores'] = 2

#   4. Print a sentence that explains who Zaras clients are.
    print(brand['type_of_clothes'])

#   5. Add a key called country_creation with a value of Spain.
    brand['country_creation'] = 'Spain'

#   6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
    if 'international_competitors' in brand.keys():
        brand['international_competitors'].append('Desigual')

#   7. Delete the information about the date of creation.
    brand.pop('creation_date')

#   8. Print the last international competitor.
    print(brand['international_competitors'][-1])

#   9. Print the major clothes colors in the US.
    print(brand['major_color']['US'])

#   10. Print the amount of key value pairs (ie. length of the dictionary).
    print(len(brand))

#   11. Print the keys of the dictionary.
    print(brand.keys())

#   12. Create another dictionary called more_on_zara with the following details:
#   
#   creation_date: 1975 
#   number_stores: 10 000

    more_on_zara = {
            'creation_date': 1975, 
            'number_stores': 10000
                    }

    print(more_on_zara)

    # 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
    brand.update(more_on_zara)

    # 14. Print the value of the key number_stores. What just happened ?
    print(brand['number_stores'])



def exercise_4():
    # Use this list :
    # 
    # users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

    # Analyse these results :
    # 
    # #1/
    # 
    # >>> print(disney_users_A)
    # {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
    # 
    # #2/
    # 
    # >>> print(disney_users_B)
    # {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
    # 
    # #3/ 
    # 
    # >>> print(disney_users_C)
    # {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
    # 
    # 
    # Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
    # Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
    # Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
    # Only recreate the 1st result for:
    #   The characters, which names contain the letter “i”.
    #   The characters, which names start with the letter “m” or “p”.

    users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
    disney_users_A = {}
    disney_users_B = {}
    disney_users_C = {}
    disney_users_A_i = {}
    disney_users_A_m_p = {}

    for i, character in enumerate(users):
        disney_users_A[character] = i
    print(disney_users_A)

    for i, character in enumerate(users):
        disney_users_B[i] = character
    print(disney_users_B)

    # Brainfuck
    disney_users_C = dict(zip(sorted(users), range(len(sorted(users)))))
    print(disney_users_C)

    for i, character in enumerate(users):
        if 'i' in character:
            disney_users_A_i[character] = i
    print(f"Characters with an 'i' {disney_users_A_i}")

    for i, character in enumerate(users):
        if 'm' in character.lower() or 'p' in character.lower():
            disney_users_A_m_p[character] = i
    
    print(f"Characters with an 'm or p': {disney_users_A_m_p}")


# exercise_1()
# exercise_2()
# exercise_3()
exercise_4()