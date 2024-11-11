def exercise_1():
    # Using this code:
    # 
    
    class Pets():
        def __init__(self, animals):
            self.animals = animals
    
        def walk(self):
            for animal in self.animals:
                print(animal.walk())
    
    class Cat():
        is_lazy = True
    
        def __init__(self, name, age):
            self.name = name
            self.age = age
    
        def walk(self):
            return f'{self.name} is just walking around'
    
    class Bengal(Cat):
        def sing(self, sounds):
            return f'{sounds}'
    
    class Chartreux(Cat):
        def sing(self, sounds):
            return f'{sounds}'
    
    
    # Create another cat breed named Siamese which inherits from the Cat class.
    class Siamese(Cat):
        def sing(self, sounds):
            return f'{sounds}'

    mrluckybutt = Bengal('MrLuckyButt',3)
    miaumare = Chartreux('Miaumare',10)
    asteroidestroyer = Siamese('Asteroid Destroyer', 1)

    # Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
    all_cats = [mrluckybutt,miaumare,asteroidestroyer]

    # Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
    # Take all the cats for a walk, use the walk method.
    sara_pets = Pets(all_cats)
    sara_pets.walk()


# Exercise 2
# Create a class called Dog with the following attributes name, age, weight.
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
# Implement the following methods in the Dog class:
    
# bark: returns a string which states: “<dog_name> is barking”.
    def bork(self):
        print(f"{self.name} says Au au")
# run_speed: returns the dogs running speed (weight/age*10).
    def run_speed(self):
        i_am_speed = round((self.weight/self.age)*2)
        print(f"{self.name} is running at {round((self.weight/self.age)*2)}km/h")
        return i_am_speed

    # fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. 
    # The winner should be the dog with the higher run_speed x weight.

    def fight(self, other_dog):
        dog_1_speed = self.run_speed()
        dog_2_speed = other_dog.run_speed()
        if self.weight > other_dog.weight and dog_1_speed > dog_2_speed:
            print(f"{self.name} FINNISHED {other_dog.name}")
        elif self.weight < other_dog.weight and dog_1_speed < dog_2_speed:
            print(f"{other_dog.name} FINNISHED {self.name}")
        else:
            print("STALEMATE!")

def exercise_2():
    dog_1 = Dog("Scratchaton",7,30)
    dog_2 = Dog("Tinkebell",12,15)
    dog_3 = Dog("German Sheppard #3",2,27)

    dog_1.bork()
    dog_2.run_speed()
    dog_3.fight(dog_1)

    # Create 3 dogs and run them through your class.
            
def exercise_3():
    # Create a new python file and import your Dog class from the previous exercise.

    # In the new python file, create a class named PetDog that inherits from Dog.
    pass

def exercise_4():
    # Create a class called Family and implement the following attributes:
    # members: list of dictionaries
    # last_name : (string)
    class Family:
        def __init__(self, members, last_name):
            self.members = {}
            self.last_name = last_name

    # Implement the following methods:
    # 
    # born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
    # is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
    # family_presentation: a method that prints the family’s last name and all the members’ details.
    # 
    # Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.
    # 
    #     [
    #         {'name':'Michael','age':35,'gender':'Male','is_child':False},
    #         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    #     ]
    pass

def exercise_5():
    # Create a class called TheIncredibles. This class should inherit from the Family class:
    # This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
    # 
    # 
    # Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
    # 
    # 
    # Add a method called incredible_presentation which :
    # 
    # Print a sentence like “*Here is our powerful family **”
    # Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
    # 
    # 
    # Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
    # 
    #     [
    #         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    #         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    #     ]
    # 
    # 
    # Call the incredible_presentation method.
    # 
    # 
    # Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
    # 
    # 
    # Call the incredible_presentation method again.
    pass

#exercise_1()
#exercise_2()