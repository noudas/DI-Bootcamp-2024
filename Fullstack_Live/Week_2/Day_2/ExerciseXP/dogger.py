from cody import Dog

class PetDog(Dog):
    # Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
    def __init__(self):
        self.trained = False
        
    # Add the following methods:
    # train: prints the output of bark and switches the trained boolean to True
    # 
    # play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.
    # 
    # do_a_trick: If the dog is trained the method should print one of the following sentences at random:
    # “dog_name does a barrel roll”.
    # “dog_name stands on his back legs”.
    # “dog_name shakes your hand”.
    # “dog_name plays dead”.