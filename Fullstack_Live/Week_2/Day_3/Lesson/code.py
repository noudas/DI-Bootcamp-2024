# class Circle:
#     color = "red" 
# 
#     def __init__(self, diameter):
#         self.diameter = diameter
# 
#     def grow(self, factor=2):
#         self.diameter = self.diameter * factor
# 
#     def get_color(self):
#        return Circle.color
# 
# circle1 = Circle(2)
# circle1.color = "blue"
# print(circle1.color)
# print(Circle.color)
# print(circle1.get_color())
# circle1.grow(3)
# print(circle1.diameter)
# 
# circle2 = Circle(4)
# circle2.color = "fucsia"
# print(circle2.color)



from datetime import date

class Person:
    def __init__(self, name, birthday):
        self.name = name
        self.birthday = birthday

    @property #getter
    def birthday(self):
        return self._birthday
    
    @birthday.setter #setter
    def birthday(self, value):
        if not isinstance(value, date):
            raise ValueError('birthday argument has to be a datetime object date(year, month, day)')
        self._birthday = value
        return self


    def lived_days(self):
        return(date.today() - self.birthday).days
    

    @property
    def name(self):
        return self._name.title()
    
    @name.setter
    def name(self,name):
        self._name = name
        return self

    
    
p1 = Person('john doe', date(1999,5,5))
print(type(p1.name)) #title()

# create a getter and a setter for the attribute name: 
# using @property define that the name will always be printed with capital letter, even if when creating the object it was passed with lower case
# create the setter that will allow this property to be changed

print(p1.name)