# Creating a Class

class Dog:
    def __init__(self, name, color, age):
        print("The Object was created")
        self.name = name
        self.color = color
        self.age = age
    pass

# Creating an Instance of a Class

doggu = Dog()
print(type(doggu))

# Option 1: Creating Attribute
doggu.name = "Rex"
print(doggu.name)

puddle = Dog()
