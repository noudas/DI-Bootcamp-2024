from anagram_checker import AnagramChecker

# This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.
# 
# It should do the following:
# Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.
def loadchecker():
    return AnagramChecker()

def menu():
    try:
        print(r"""
 _   _ _ _   _                 _               
| | | | | |_(_)_ __ ___   __ _| |_ ___         
| | | | | __| | '_ ` _ \ / _` | __/ _ \        
| |_| | | |_| | | | | | | (_| | ||  __/        
 \___/|_|\__|_|_| |_| |_|\__,_|\__\___|        
  __ _ _ __   __ _  __ _ _ __ __ _ _ __ ___    
 / _` | '_ \ / _` |/ _` | '__/ _` | '_ ` _ \   
| (_| | | | | (_| | (_| | | | (_| | | | | | |  
 \__,_|_| |_|\__,_|\__, |_|  \__,_|_| |_| |_|  
  __ _  ___ _ __   |___/ __ __ _| |_ ___  _ __ 
 / _` |/ _ \ '_ \ / _ \ '__/ _` | __/ _ \| '__|
| (_| |  __/ | | |  __/ | | (_| | || (_) | |   
 \__, |\___|_| |_|\___|_|  \__,_|\__\___/|_|   
 |___/                                         """)
    
        print("""\n\nDo you wish to:
(1). Type a Word
(2). Exit""")
    
# If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
        answer = int(input("Choose: "))
        return answer
    except:
        raise TypeError("Not a number")
    

# Only alphabetic characters are allowed. No numbers or special characters.
# Whitespace should be removed from the start and end of the user’s input.
 
# Once your code has decided that the user’s input is valid, it should find out the following:

def main():
    # Ensure an instance of AnagramChecker is created
    anagramchecker = loadchecker()

    while True:
        choice = menu()

        try:
            match choice:
                case 1:
                    print("""Rules:
                          
1. No more than one word
2. No numbers or special characters
3. You have to be amazed
                          """)
                    
                    word = input("Type your word: ").strip().upper()
                    
                    anagram_list = anagramchecker.get_anagrams(word)
                    
                    if anagram_list == []:
                        print("Sorry! But this is not an anagramable word! Try another")
                    else:
                        print(f"\nYour word was '{word}'")
                        print(f"Anagrams for your word: {', '.join(anagram_list)}")

                case 2:
                    print("Goodbye!")
                    return False

                case _:
                    print("Invalid choice, please try again.")
        except TypeError as te:
            print(f"Error: {te}")
        except ValueError as ve:
            print(f"Error: {ve}")
main()

# All possible anagrams to the user’s word.
# Create an AnagramChecker instance and apply it to the steps created above.
# Display the information about the word in a user-friendly, nicely-formatted message such as:
# 
# 
# YOUR WORD :”MEAT”
# this is a valid English word.
# Anagrams for your word: mate, tame, team.