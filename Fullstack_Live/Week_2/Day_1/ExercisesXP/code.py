def exercise_1():
    print("\n------------------------")
    print(f"{' ':<10} Exercise 1")
    print("------------------------")
    # Using this class

    class Cat:
        def __init__(self, cat_name, cat_age):
            self.name = cat_name
            self.age = cat_age

    yugi = Cat("Yugi",8)
    kaiba = Cat("Kaiba",4)
    jaiden = Cat("Jaiden",1)

    cats = [yugi,kaiba,jaiden]

    def oldestest(katlist):
        namest = ''
        agest = 0
        for i in katlist:
            if i.age > agest:
               agest = i.age
               namest = i.name

        print(f"The oldest cat is {namest}, and is {agest} years old")

    oldestest(cats)

    
    # Instantiate three Cat objects using the code provided above.
    # Outside of the class, create a function that finds the oldest cat and returns the cat.
    # Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

def exercise_2():
    print("\n------------------------")
    print(f"{' ':<10} Exercise 2")
    print("------------------------")
    # Create a class called Dog.
    # In this class, create an __init__ method that takes two parameters : name and height. 
    # This function instantiates two attributes, which values are the parameters.
    # Create a method called bark that prints the following string “<dog_name> goes woof!”.
    # Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
    # Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
    # Print the details of his dog (ie. name and height) and call the methods bark and jump.
    # Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
    # Print the details of her dog (ie. name and height) and call the methods bark and jump.
    # Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

    class Dog:
        def __init__(self, name, height):
            self.name = name
            self.height = height

        def bark(self):
            print(f"{self.name} goes woof!")

        def jump(self):
            print(f"{self.name} jumps {(self.height*2)} cm height!")

    davids_dog = Dog("Rex",50)
    print(davids_dog.name,davids_dog.height)
    davids_dog.bark()
    davids_dog.jump()

    print()

    sarahs_dog = Dog("Teacup",20)
    print(sarahs_dog.name,sarahs_dog.height)
    sarahs_dog.bark()
    sarahs_dog.jump()

    print()

    if davids_dog.height > sarahs_dog.height:
        print(davids_dog.name)
    else:
        print(sarahs_dog.name)

def exercise_3():
    print("\n------------------------")
    print(f"{' ':<10} Exercise 3")
    print("------------------------")
    # Define a class called Song, it will show the lyrics of a song.
    # Its __init__() method should have two arguments: self and lyrics (a list).
    # Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
    # Create an object, for example:
    # 
    # stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
    # 
    # 
    # Then, call the sing_me_a_song method. The output should be:
    # 
    # There’s a lady who's sure
    # all that glitters is gold
    # and she’s buying a stairway to heaven

    class Song:
        def __init__(self,lyrics):
            self.lyrics = lyrics

        def sing_me_a_song(self):
            for i in self.lyrics:
                print(i)

    stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

    stairway.sing_me_a_song()
        
def exercise_4():
    print("\n------------------------")
    print(f"{' ':<10} Exercise 4")
    print("------------------------")
    # Create a class called Zoo.
    # In this class create a method __init__ that takes one parameter: zoo_name.
    # It instantiates two attributes: animals (an empty list) and name (name of the zoo).
    # Create a method called add_animal that takes one parameter new_animal. 
    # This method adds the new_animal to the animals list as long as it isn’t already in the list.
    # Create a method called get_animals that prints all the animals of the zoo.
    # Create a method called sell_animal that takes one parameter animal_sold. 
    # This method removes the animal from the list and of course the animal needs to exist in the list.

    class Zoo:
        def __init__(self, zoo_name):
            self.zoo_name = zoo_name
            self.animals = []

        def add_animal(self, new_animal):
            if new_animal not in self.animals:
                self.animals.append(new_animal)
            else:
                print(f'{new_animal} is already in the zoo')
            
        def get_animals(self):
            print(self.animals)

        def sell_animal(self,animal_sold):
            if animal_sold in self.animals:
                self.animals.remove(animal_sold)
            else:
                print(f'{animal_sold} has already been sold')

        def sort_animals(self):
            return self.animals.sort()

        def group_animals(self):

            groups = {}
            count = 1
            first_letter = ''

            for animal in self.animals:
                if first_letter == '':
                    first_letter = animal[0]
                    groups[count] = [animal]
                elif first_letter == animal[0]:
                    groups[count].append(animal)
                    first_letter = animal[0]
                else:
                    count += 1
                    first_letter = animal[0]
                    groups[count] = [animal]

            for key,value in groups.items():
                if len(value) == 1:
                    groups[key] = value[0]

            print(groups)


    ramat_gan_safari = Zoo("Zooland")
    ramat_gan_safari.add_animal("Platypus")
    ramat_gan_safari.add_animal("Ape")
    ramat_gan_safari.add_animal("Baboon")
    ramat_gan_safari.add_animal("Bear")
    ramat_gan_safari.add_animal("Cat")
    ramat_gan_safari.add_animal("Cougar")
    ramat_gan_safari.add_animal("Eel")
    ramat_gan_safari.add_animal("Emu")

    ramat_gan_safari.get_animals()
    ramat_gan_safari.sell_animal('Platypus')
    ramat_gan_safari.get_animals()
    ramat_gan_safari.sort_animals()
    ramat_gan_safari.group_animals()
    
    # Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
    # Example
    # 
    # { 
    #     1: "Ape",
    #     2: ["Baboon", "Bear"],
    #     3: ['Cat', 'Cougar'],
    #     4: ['Eel', 'Emu']
    # }
    # 
    # 
    # Create a method called get_groups that prints the animal/animals inside each group.
    # 
    # Create an object called ramat_gan_safari and call all the methods.
    # Tip: The zookeeper is the one who will use this class.
    # Example
    # Which animal should we add to the zoo --> Giraffe
    # x.add_animal(Giraffe)

            
exercise_1()
exercise_2()
exercise_3()
exercise_4()