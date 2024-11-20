'''
Part 2
Create a file called menu_editor.py , which will have the following functions:
show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
View an Item (V)
Add an Item (A)
Delete an Item (D)
Update an Item (U)
Show the Menu (S)
Call the appropriate function that matches the user’s input.

'''

from menu_manager import MenuManager
from menu_item import MenuItem

def show_user_menu():
    print("\n===== Program Menu =====")
    print("V - View an Item")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Menu")
    print("Q - Quit")
    user_input = input("Please choose an option (V/A/D/U/S/Q): ").strip().upper()
    return user_input

'''
add_item_to_menu() - this function should ask the user to input the item’s name and price. 
This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
If the item was added successfully print a message which states: item was added successfully.
'''
def add_item_to_menu():
    name = input("Write the food name: ").strip()
    try:
        price = int(input("Type the price (onyl full values): ").strip())
        item = MenuItem(name, price)
        item.save()
        print(f"Item '{name}' was added successfully with price: ${price}.")
    except ValueError:
        print("Invalid price. Please enter a valid integer.")

"""
remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. 
This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
If the item was deleted successfully – print a message to let the user know this was completed.
If not – print a message which states that there was an error.

"""
def remove_item_from_menu():
    name = input("Write the food name to delete: ").strip()
    item = MenuItem(name)
    if item.delete():
        print(f"Item '{name}' has been deleted successfully.")
    else:
        print(f"Error: Item '{name}' not found. Could not delete.")


'''
update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
If the item was updated successfully – print a message to let the user know this was completed.
If not – print a message which states that there was an error.
'''
def update_item_from_menu():
    old_name = input("Write the current food name: ").strip()
    update_name = input("Do you want to change the name? (Y/N): ").strip().lower()
    update_price = input("Do you want to change the price? (Y/N): ").strip().lower()

    if update_name == 'y':
        new_name = input("Write the new food name: ").strip()
    else:
        new_name = None

    if update_price == 'y':
        try:
            new_price = int(input("Type the new price (integer value): ").strip())
        except ValueError:
            print("Invalid price. Please enter a valid integer.")
            return
    else:
        new_price = None

    if MenuItem.update(old_name, new_name, new_price):
        print(f"Item '{old_name}' has been updated successfully.")
    else:
        print(f"Error: Could not update the item '{old_name}'. Please check if it exists.")


'''
show_restaurant_menu() - print the restaurant’s menu.
'''

def show_restaurant_menu():
    print("\n===== Restaurant Menu =====")
    items = MenuManager.all_items()
    if items:
        for item in items:
            print(f"Item: {item.name}, Price: ${item.price}")
    else:
        print("No items found in the menu.")
'''
When the user chooses to exit the program, display the restaurant menu and exit the program.
'''
def main():
    """Main function to run the program and call the necessary functions based on user input."""
    while True:
        user_input = show_user_menu()
        if user_input == 'V':  # View an item
            name = input("Enter the name of the item to view: ").strip()
            item = MenuManager.get_by_name(name)
            if item:
                print(f"Item: {item.name}, Price: ${item.price}")
            else:
                print(f"Item '{name}' not found.")
        elif user_input == 'A':  # Add an item
            add_item_to_menu()
        elif user_input == 'D':  # Delete an item
            remove_item_from_menu()
        elif user_input == 'U':  # Update an item
            update_item_from_menu()
        elif user_input == 'S':  # Show all items
            show_restaurant_menu()
        elif user_input == 'Q':  # Quit the program
            print("Exiting the program. Here is the final menu:")
            show_restaurant_menu()  # Show the restaurant menu before quitting
            break
        else:
            print("Invalid option. Please try again.")

# Run the main function
if __name__ == "__main__":
    main()


