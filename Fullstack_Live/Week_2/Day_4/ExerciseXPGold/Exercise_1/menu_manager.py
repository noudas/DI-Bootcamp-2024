# Description: Create a restaurant menu management system for a manager. The program should allow the manager to view the menu, add an item and delete an item.
# 
# The menu should be saved to a local file – the program should load the file when it begins and add the updated details to the file before exiting.
# 
# The program should be written in two files – one which will deal with the UI (user interface), eg. showing the user menu and getting user input, etc.
# The second file will handle all other functionality such as adding/removing items from the menu, along with loading and saving the data to a JSON file.
# Separating the files is important – the file which deals with the UI functionality should not have any details about the menu file itself (encapsulation).
# 
# The following code is the basic menu for a restaurant. You can make any changes you want.
# {
#     "items": [
#         {
#             "name": "Vegetable soup",
#             "price": 30
#         },
#         {
#             "name": "Hamburger",
#             "price": 44.9
#         },
#         {
#             "name": "Milkshake",
#             "price": 22.5
#         },
#         {
#             "name": "Artichoke",
#             "price": 18
#         },
#         {
#             "name": "Beef stew",
#             "price": 52.5
#         }
#     ]
# }

# 
# Create a JSON file called restaurant_menu.json. Paste the menu provided above in the restaurant_menu.json file.
# 
# Create a file called menu_manager.py. The file should contain a class called MenuManager, with the following functions:

import json

class MenuManager:
    # __init__() - The function should read the menu from the restaurant_menu.json file and store it in a variable called menu.

    def __init__(self):
        with open("restaurant_menu.json", "r", encoding="utf-8") as f:
            self.menu = json.load(f)

    
    # add_item(name, price) – this method should add an item to the menu, although do not save the changes to the file yet.
    def add_item(self, name, price):
        self.menu["items"].append({"name":name, "price":price})
        return self
    # 
    # remove_item(name) – if the item is in the menu, this function should remove it from the menu (and again do not save the changes to the file yet) and return True. 
    # If the item was not in the menu, return False. (Hint: use Python’s del operator).
    def remove_item(self, name):
        if any(item["name"] == name for item in self.menu["items"]):
            self.menu["items"] = [item for item in self.menu["items"] if name != item["name"]]
            return True
        return False

    # save_to_file() - When the manager is finished updating the menu this function should be called and it should save all the updates and 
    # write them into the the restaurant_menu.json file (ie. the file which holds the menu).
    def save_to_file(self):
        with open("restaurant_menu.json", "w", encoding="utf-8") as f:
            json.dump(self.menu, f, indent=1)


# Create a file called menu_editor.py , which will have the following functions:

with open("restaurant_menu.json", "r+", encoding="utf-8") as f:
    menu = json.load(f)
