def exercise_1():
    # Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
    # Convert it into a list using Python (don’t do it by hand!).
    # Print out a message saying how many manufacturers/companies are in the list.
    # Print the list of manufacturers in reverse/descending order (Z-A).
    # Using loops or list comprehension:
    # Find out how many manufacturers’ names have the letter ‘o’ in them.
    # Find out how many manufacturers’ names do not have the letter ‘i’ in them.
    
    cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

    list_cars = cars.replace(" ","").split(",")
    print(f"There are {len(list_cars)} manufacturers/companies")
    print(sorted(list_cars)[::-1])

    list_cars_with_o = [car for car in list_cars if 'o' in car]
    print(list_cars_with_o)

    list_cars_with_no_i = [car for car in list_cars if 'i' not in car]
    print(list_cars_with_no_i)

    # Bonus: There are a few duplicates in this 
    list_car2 = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

    # Remove these programmatically. (Hint: you can use set to help you).

    list_car2 = list(set(list_car2))
    # Print out the companies without duplicates, in a comma-separated string with no 
    # line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), 
    # also print out a message saying how many companies are now in the list.
    print(sorted(list_car2))
    # 
    # Bonus: Print out the list of manufacturers in ascending order (A-Z), 
    # but reverse the letters of each manufacturer’s name.

    list_reversed_reversed = [car[::-1] for car in sorted(list_car2)]
    print(list_reversed_reversed)


exercise_1()