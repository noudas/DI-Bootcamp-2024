# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
import turtle

class Circle():
    PI = 3.14

# The user can query the circle for either its radius or diameter.
    def __init__(self, radius=0,diameter=0):
        if radius:
            self.radius = radius
        elif diameter:
            self.diameter = diameter
        else:
            self.radius = 0  

# circle abilities of a Circle instance:

# Print the attributes of the circle - use a dunder method
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        self._radius = value
        return self

    @property
    def diameter(self):
        return self._radius * 2
    
    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2
        return self

    
# Compute the circle’s area
    def area(self):
        area_circle = Circle.PI * (self.radius**2) 
        return area_circle
    
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
    def __add__(self,circle):
        radius_sum = self.radius + circle.radius
        diameter_sum = self.diameter + circle.diameter
        return Circle(radius_sum,diameter_sum)
    
    def __gt__(self, circle):
        return self.area() > circle.area()

    def __lt__(self, circle):
        return self.area() < circle.area()

    def __eq__(self, circle):
        return self.area() == circle.area()

    def __le__(self, circle):
        return self.area() <= circle.area()

    def __ge__(self, circle):
        return self.area() >= circle.area()

    def __repr__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter})"
    
def tests():
    c1 = Circle(10)
    c2 = Circle(1, 10)
    c3 = c1 + c2  # Add circles together to create a new circle

    # Output the circle details
    print(c1.diameter)
    print(c1.radius)
    print(c1.area())
    print(c2.area())

    # Comparison of two circles
    print(c1 > c2)  # True or False based on area
    print(c1 < c2)  # True or False based on area
    print(c1 == c2)  # Check equality
    print(c1 >= c2)  # Check if c1 is greater than or equal to c2
    print(c1 <= c2)  # Check if c1 is less than or equal to c2



c1 = Circle(10)
c2 = Circle(1, 10)
c3 = c1 + c2

circle_list = [c1, c2, c3]
circle_list.sort(key=lambda x: x.area())

for circle in circle_list:
    turtle.circle(circle.area())
    turtle.penup()
    turtle.setpos(0,-300)
    turtle.pos()
    turtle.pendown()

turtle.done()

        
tests()
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles