def exercise_1():
    import random
    # 🌟 Exercise 1 – Random Sentence Generator
    # Instructions
    # Description: In this exercise we will create a random sentence generator. 
    # We will do this by asking the user how long the sentence should be and then printing the generated sentence.
    # 
    # Hint : The generated sentences do not have to make sense.
    # 
    # Download this word list
    # Save it in your development directory.
    # 
    # Create a function called get_words_from_file. 
    # This function should read the file’s content and return the words as a collection. 
    # What is the correct data type to store the words?
    # 
    def get_words_from_file():
        with open("words_list.txt","r", encoding='utf-8') as f:
            list_words = [word.replace("\n",'') for word in f.readlines()]
            return list_words
    
    # Create another function called get_random_sentence which takes a single parameter called length. 
    # The length parameter will be used to determine how many words the sentence should have. The function should:
    # use the words list to get your random words.
    # the amount of words should be the value of the length parameter.
    # 
    def get_random_sentence(length):
        list_words = get_words_from_file()
        sentence = ' '.join(random.choice(list_words) for _ in range(length)).lower()
        return f"Your sentence is: {sentence}"
    
    # Take the random words and create a sentence (using a python method), the sentence should be lower case.
    # 
    # Create a function called main which will:
    # Print a message explaining what the program does.
    # Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
    # If the user inputs incorrect data, print an error message and end the program.
    # If the user inputs correct data, run your code.
    def main():
        try:
            print("RANDOM SENTENCE GENERATOR!")
            length = int(input("Type your size! Values accepted are between 2 and 20: "))
            if not 2 <= length <= 20:
                raise IndexError("Number or bigger then 20 or smaller then 2!")
            else:
                print(get_random_sentence(length))
        except:
            raise TypeError("Type only numbers!")
        
    main()
    
def exercise_2():
    # 🌟 Exercise 2: Working with JSON
    # Instructions
    import json


    sampleJson = """{ 
       "company":{ 
          "employee":{ 
             "name":"emma",
             "payable":{ 
                "salary":7000,
                "bonus":800
             }
          }
       }
    }"""
    

    data = json.loads(sampleJson)

    # Access the nested “salary” key from the JSON-string above.
    salary = data["company"]["employee"]["payable"]["salary"]
    print(salary)

    # Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
    data["company"]["employee"]["birth_date"] = "1990-01-01"
    
    print(data)

    # Save the dictionary as JSON to a file.
    with open("Exercise_2.json","w",encoding="utf-8") as f:
        json.dump(data, f, indent=1)
    
exercise_1()
exercise_2()