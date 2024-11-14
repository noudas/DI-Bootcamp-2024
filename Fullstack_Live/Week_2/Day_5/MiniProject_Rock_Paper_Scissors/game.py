import random

# Part I - game.py
# game.py – this file/module should contain a class called Game. It should have 4 methods:
class Game:
    def __init__(self, player_victories = 0, bot_scores = 0, draws = 0):
        self.player_victories = player_victories
        self.bot_scores = bot_scores
        self.draws = draws
        
# get_user_item(self) – Ask the user to select an item (rock/paper/scissors). 
# Keep asking until the user has selected one of the items – use data validation and looping. 
# Return the item at the end of the function.

    def get_user_item(self):
        while True:
            choice = input("Please choose one: rock, paper, or scissors: ").lower().strip()

            if choice in ['rock', 'paper', 'scissors']:
                return choice
            else:
                print("Invalid choice! Please choose either 'rock', 'paper', or 'scissors'...")

# get_computer_item(self) – Select rock/paper/scissors at random for the computer. 
# Return the item at the end of the function. Use python’s random.choice() function (read about it online).
    def get_computer_item(self):
        choices = ['rock', 'paper', 'scissors']
        return random.choice(choices)


# get_game_result(self, user_item, computer_item) – Determine the result of the game.

# Parameters:
# user_item – the user’s chosen item (rock/paper/scissors)
# computer_item – the computer’s chosen (random) item (rock/paper/scissors)
# Return either win, draw, or loss. Where win means that the user has won, 
# draw means the user and the computer got the same item, and loss means that the user has lost.

# Return the results of the game as a string: win;draw;loss;, 
# where win means that the user has won, 
# draw means the user and the computer got the same item, 
# and loss means that the user has lost.

# Print the output of the game; something like this: “You selected rock. The computer selected paper. You lose”, 
# “You selected scissors. The computer selected scissors. You drew!”

# Determine the results of the game by comparing the user’s item and the computer’s item

    def get_game_result(self, user_item, computer_item):

        victory_conditions = {  
        'rock': ['scissors'],
        'paper': ['rock'],
        'scissors': ['paper']
            }
        
        if user_item == computer_item:
            self.draws += 1
            return f"You selected {user_item}. The computer selected {computer_item}. You drew!"
        elif computer_item in victory_conditions[user_item]:
            self.player_victories += 1
            return f"You selected {user_item}. The computer selected {computer_item}. You win!!!"
        else:
            self.bot_scores += 1
            return f"You selected {user_item}. The computer selected {computer_item}. You lose"

# play(self) – the function that will be called from outside the class (ie. from rock-paper-scissors.py). It will do 3 things:
# Get a random item for the computer (rock/paper/scissors) and remember it
# Get the user’s item (rock/paper/scissors) and remember it
    def play(self):
        computer_item = self.get_computer_item()
        user_item = self.get_user_item()
        result = self.get_game_result(user_item, computer_item)
        print(result)
        return self


# def tests():
#     game = Game()
#     print(game.play())
# 
# tests()