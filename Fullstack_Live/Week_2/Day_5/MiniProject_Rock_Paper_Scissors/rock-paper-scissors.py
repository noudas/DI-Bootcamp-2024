# Mini-project: Rock, Paper, Scissors
# Rock-paper-scissors is an old game that can be played between two people. You can read about it in wikipedia
# 
# We will create a game for the user to play Rock-paper-scissors against the computer.
# 
# The user will input his/her move (rock/paper/scissors),
# and the computer will select either rock, paper or scissors at random.
# We will then compare the user’s move with the computer’s move, and determine the results of the game:
# 
# The user won
# 
# The computer won (the user lost)
# A draw (tie)
# We will print the outcome of each game: the user’s choice, the computer’s choice, and the result.
# 
# The user will be able to play again and again. Once the user decides to exit the program, we will print a summary of the outcomes of all the games: 
# how many times they won, lost or and tied the computer.
# 
# 
# Instructions
# Create a new directory for the game. Inside it, create 2 files:
# rock-paper-scissors.py – this will contain functions to show the main menu, handle user’s input, and show the game summary before exiting.
# game.py – this will contain a Game class which will have functions to play a single game of rock-paper-scissors against the computer, 
# determine the game’s result, and return the result.


from game import Game

# Part II - rock-paper-scissors.py
def loadgame():
    return Game()

# rock-paper-scissors.py : create 3 functions
# get_user_menu_choice() - this should display a simple menu, get the user’s choice (with data validation), and return the choice. 
# No looping should occur here.
# The possibles choices are : Play a new game or Show scores or Quit

def welcome():
    print("""

██████████████████████████
█▄─▄▄▀█─▄▄─█─▄▄▄─█▄─█─▄███
██─▄─▄█─██─█─███▀██─▄▀████
▀▄▄▀▄▄▀▄▄▄▄▀▄▄▄▄▄▀▄▄▀▄▄▀▀▀
█████████████████████████████████
█▄─▄▄─██▀▄─██▄─▄▄─█▄─▄▄─█▄─▄▄▀███
██─▄▄▄██─▀─███─▄▄▄██─▄█▀██─▄─▄███
▀▄▄▄▀▀▀▄▄▀▄▄▀▄▄▄▀▀▀▄▄▄▄▄▀▄▄▀▄▄▀▀▀
██████████████████████████████████████████████
█─▄▄▄▄█─▄▄▄─█▄─▄█─▄▄▄▄█─▄▄▄▄█─▄▄─█▄─▄▄▀█─▄▄▄▄█
█▄▄▄▄─█─███▀██─██▄▄▄▄─█▄▄▄▄─█─██─██─▄─▄█▄▄▄▄─█
▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▀▄▄▀▄▄▀▄▄▄▄▄▀
""")

def get_user_menu_choice():
    print("\nDo you wish to play?")
    print("1. Play a new game")
    print("2. Show scores")
    print("'x' or 'q' Quit")

    usr = input("Enter your choice (1/2/x/q): ").strip().lower()

    if usr not in ['1', '2', 'x', 'q']:
        raise ValueError("Invalid choice. Please choose 1, 2, x, or q.")
    
    return usr

def list_results(game):
    player = game.player_victories
    bot = game.bot_scores
    draw = game.draws
    score = {"Wins": player,
             "Loss": bot,
             "Draw": draw}
    return score


# print_results(results) – this should print the results of the games played. 
# It should have a single parameter named results; which will be a dictionary of the results of the games played. 
# It should display these results in a user-friendly way, and thank the user for playing.
def print_results(results):
    print(f"Score: {results}")
# 
# 
# Note: results should be in this form: {win: 2,loss: 4,draw: 3}. 
# Bear in mind that this dictionary will need to be created and populated in some other part of our code, 
# and passed in to the print_results function at the right time.
# 
# main() - the main function. It should take care of 3 things:
# Displaying the menu repeatedly, until the user types in the value to exit the program: ‘x’ or ‘q’, whatever you decide. (Make use of the get_user_menu_choice function)
# 
def main():
    welcome()
    game = loadgame()
    while True:
        usr = get_user_menu_choice()
        results = list_results(game)
        match usr:
            case 'q' | 'x':
                print("\nGoodbye!\n")
                print_results(results)
                break
            case '1':
                game.play()
            case '2':
                print_results(results)
            
# When the user chooses to play a game:
# Create a new Game object (see below), and call its play() function, receiving the result of the game that is returned.
# Remember the results of every game that is played.
# 
# When the user chooses to exit the program, call the print_results function in order to display a summary of all the games played.

main()