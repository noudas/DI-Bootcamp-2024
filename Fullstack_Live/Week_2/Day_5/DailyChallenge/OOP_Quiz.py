# Answer the following questions
# 
# What is a class? 
"""A Class is a Blueprint for an Object, it is the script that dictates how an algorithm should work, from its proprieties (Attibutes) and its methods (Functions).
It holds or encapsulates data and behaviour of one entity."""


# What is an instance?
"""It is an individual object called from a class, or an something created out of a blueprint.
A realization of the class, with its own unique set of data and behavior as defined by the class."""

# What is encapsulation?
"""It is a way to encolse or limiting the data into your instance or class, withdout making it accessible from the outside of the instance.
A way to ensure that private or secure data is not leaked or changed from other sources"""

# What is abstraction?
"""It is to make a Class simlilar to real world concepts, simplifying complex sistems into easier to understand concepts, hiding unnecessary details. 
Meaning that abstraction focuses only on the essential information or features.
For example if you want to create a Dog class, you might abstract the concept of a dog by defining behaviors such as bark() and run()."""

# What is inheritance?
"""It is a way to a Parent Class to send it`s attributes and methods to a child class. Much like a Child gets the genetic traits of his parents. 
In a simpler way, It allows for a hierarchical relationship between classes
This allows the child class to reuse the code of the parent class, extend it, or override it to fit its own needs."""

# What is multiple inheritance?
"""Much like inheritance, a Child Class can inherit it`s attributs from more than one Parent Class.
This allows the child class to combine the functionality of multiple parent classes, benefiting from the features of all inherited classes.

Allowing for greater flexibility and reuse of code.

Much like a Child gets the genetic traits from both of his parents. """

# What is polymorphism?
""" It simplifies code and enhances flexibility by allowing to rewrite, change and reuse attributes, 
    override methods from a parent class in a way to provide their own specific implementation.
    
    It is to implement methods that share the same name but behave differently based on the object's actual class
"""

# What is method resolution order or MRO?
""" It is the way that Python looks for methods or attributes in a class hierarchy in OOP.

    If you have a group os classes, it looks ate the lower hierarchacle class first and goes up the hierchy,
    ensuring that Python searches in a predictable and consistent way.
    
"""


# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.
# 
import random

# The Deck class :
class Deck:
    def __init__(self, deck):
        self.deck = deck

    # should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.

    def shuffle(self):
        random.shuffle(self.deck)
        return self
    
    # should have a method called deal which deals a single card from the deck. 
    # After a card is dealt, it should be removed from the deck.
    def deal(self):
        if len(self.deck) > 0:
            card = self.deck.pop()
            return card
        else:
            return f"Oopsie, the deck has ran out of cards"


# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"
    

suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

cards = []
for suit in suits:
    for value in values:
        cards.append(Card(suit, value))


# Tests

deck = Deck(cards)
deck.shuffle()

for _ in range(0,53):
    dealt_card = deck.deal()
    print(dealt_card)