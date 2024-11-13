from menu_manager import MenuManager

# load_manager()- this function should create a new MenuManager instance.
def load_manager():
    return MenuManager()

 
# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to choose an item. 
# Call the appropriate function that matches the user’s input.

def show_user_menu():
    print("\n--- Restaurant Menu Management System ---")
    print("1. Show restaurant menu")
    print("2. Add item to menu")
    print("3. Remove item from menu")
    print("4. Save and exit")
    
    choice = input("Choose an option (1-4): ")
    return choice
# 
# add_item_to_menu() - this will ask the user to input the item’s name and price. It will not interact with the menu itself, but simply call the appropriate function from the MenuManager object.
# If the item was added successfully print a message which states: item was added successfully.

def add_item_to_menu(manager):
    name = input("Enter the name of the item: ")
    price = float(input("Enter the price of the item: "))
    if manager.add_item(name, price):
        print(f"Item '{name}' was added successfully.")


# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. The function should not interact with the menu itself, but simply call the appropriate function from the MenuManager object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

def remove_item_from_menu(manager):
    name = input("Enter the name of the item to remove: ")
    if manager.remove_item(name):
        print(f"Item '{name}' was removed successfully.")
    else:
        print("Error: Item not found.")
# 
# show_restaurant_menu() - print the restaurant’s menu.
def show_restaurant_menu(manager):
    print("\n--- Restaurant Menu ---")
    if manager.menu["items"]:
        for item in manager.menu["items"]:
            print(f"{item['name']} - ${item['price']:.2f}")
    else:
        print("The menu is currently empty.")
# 
# When the user chooses to exit the program, first write the menu to the file and then print a message that states that the menu was saved, finally exit the program.

def main():
    manager = load_manager()
    while True:
        choice = show_user_menu()
        if choice == "1":
            show_restaurant_menu(manager)
        elif choice == "2":
            add_item_to_menu(manager)
        elif choice == "3":
            remove_item_from_menu(manager)
        elif choice == "4":
            manager.save_to_file()
            print("Menu saved. Exiting the program.")
            break
        else:
            print("Invalid choice, please try again.")

# After exiting the program the changes should be reflected in the menu (see Part 1.1) and in the JSON file.

if __name__ == "__main__":
    main()