# Create a Class called Person
# Use init to create the followinf attributes
# Name
# Age
# Height

# Then create an Object of this class for yourself

class Person:
    def __init__(self, name, age, height):
        self.name = name
        self.age = age
        self.height = height

    def greeting(self):
        print(f"Hello! My name is {self.name}! I am {self.age} years old!")

myself = Person("Jonathan", 26, 187)
print(myself.name,myself.age,myself.height)
print(vars(myself))


# Different ways to call the Method
myself.greeting()
Person.greeting(myself)

# Create a Method called presentantion
# Print the following
# "Hello! My name is... I am... years old