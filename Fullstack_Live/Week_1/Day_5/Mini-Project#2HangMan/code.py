# The computer choose a random word and mark stars for each letter of each word.
# Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
# The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
# The player can’t guess the same letter twice.
# 
# 
# Starter code
# Here is a piece of code that will give you a random word.


import random
wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

### YOUR CODE STARTS FROM HERE ###

def welcome():
    print(r"""
 _                                             
| |                                            
| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  
| '_ \ / _` | '_ \ / _` | '_ ` _ \ / _` | '_ \ 
| | | | (_| | | | | (_| | | | | | | (_| | | | |
|_| |_|\__,_|_| |_|\__, |_| |_| |_|\__,_|_| |_|
                    __/ |                      
                   |___/                       
    """)

def start():
    answer = int(input("Type your answer"))
    if not answer.isalpha() and answer != '':
        return answer
    else:
        print("Type only numbers!")
        start()

def body_part(mistake):
    bodypart = { 1:'head', 2:'body', 3:'left arm', 4:'right arm', 5:'left leg', 6:'right leg'}
    return bodypart[mistake]

def game_reset():
    letters_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    mistake_count = 0
    return letters_list, mistake_count
    
def word_checker(used_letter,letters_list):
    if used_letter in letters_list:
        letters_list.remove(used_letter)
        if used_letter in word:
            return True
        else:
            return False
    
def word_printer():
    word_size = len(word)
    return ['_' for _ in range(word_size)]

def word_visualizer(letters_list,word_board):
    if letters_list in word:
        index_letter = {letter: position for position, letter in enumerate(word)}
        
    

def main():
    welcome()
    letters_list,mistake_count = game_reset()
    print(word_printer())
    

main()