from cody import Dog
import random

class PetDog(Dog):
    # Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
    def __init__(self,name,age,weight):
        super().__init__(name,age,weight)
        self.trained = False

    # Add the following methods:
    # train: prints the output of bark and switches the trained boolean to True

    def train(self):
        if self.trained:
            print("Dog is already trained, do you want to untrain it?")
        else:
            self.trained = True

    # play: takes a parameter which value is a few names of other Dog instances (use *args). 
    # The method should print the following string: “dog_names all play together”.

    def play(self, *args):
        dog_names = [arg.name for arg in args] + [self.name]
        print(f"{', '.join(dog_names)} all play together")


    # do_a_trick: If the dog is trained the method should print one of the following sentences at random:
    def do_a_trick(self):
        num = random.randrange(1,5)
        match num:
            case 1:
                print(f"{self.name} does a barrel roll")
            case 2:
                print(f"{self.name} stands on his back legs")
            case 3:
                print(f"{self.name} shakes your hand")
            case 4:
                print(f"{self.name} plays dead")
            case _:
                print("How did you get here?")

    # “dog_name does a barrel roll”.
    # “dog_name stands on his back legs”.
    # “dog_name shakes your hand”.
    # “dog_name plays dead”.


dog_1 = PetDog("Scratchaton",7,30)
dog_2 = PetDog("Tinkebell",12,15)
dog_3 = PetDog("German Sheppard #3",2,27)
dog_4 = PetDog("Omori", 1, 16)
dog_4.train()
dog_4.do_a_trick()
dog_4.play(dog_1,dog_2,dog_3)
    