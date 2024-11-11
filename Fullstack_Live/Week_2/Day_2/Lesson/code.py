#exercise 1

class Circle: # Parent Class
    def __init__(self, diameter):
      self.diameter = diameter  # Parent Atributes

    def grow(self, factor=2):   # Parent Method
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle): # Inherits parent attributes
    def grow(self, factor=2):   # Reasigning parent Method
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)

# The cricle will grow in an expodencial way
# He will grow by the Diamater * 2 * 2

nc = NewCircle(1)
# output = 1
print(nc.diameter)

nc.grow()
# output = 1 * 4
print(nc.diameter)



#exercise 2

# Try to recreate the class explained below:

# We have a class called Door that has an attribute of is_opened declared when an instance is initiated.
class Door:
    def __init__(self):
        self.open = True
    
    def open_door(self):
        if self.open:
            print("The door is already open")
        else:
            self.open = True
            print( "The door has openned")
    
    def close_door(self):
        if not self.open:
            print("The door is already closed")
        else:
            self.open = False
            print("The door is closed")

class BlockedDoor(Door):
    def open_door(self):
        print("The door is blocked")
    
    def close_door(self):
        print("The door is blocked")
    
door_open = Door()
door_blocked = BlockedDoor()

door_open.open_door()
door_open.close_door()
door_open.close_door()
door_blocked.open_door()
door_blocked.close_door()

# We can create a class called BlockedDoor that inherits from the base class Door.

# We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions, 
# which simply raises an Error that a blocked door cannot be opened or closed.


# Exercise 3

# Given a list of numbers, 
# write a function that returns the sum of every number. BUT you can have a malicious string inside the list.

my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]

soma = 0

for i in my_list:
    try:
        soma += i
    except:
        print("Not a number")

print(soma)