'''Create a class called Character with the following attributes and methods:
attribute name
attribute life – starts with a default value of 20
attribute attack – the base attack of a character (integer) will be a default of 10
method basic_attack() - accepts another Character instance as a parameter. 
Your character will <attack> the other character so his <life> points should drop.
'''
class Character:
    def __init__(self, name, life=20, attack=10):
        self.name = name
        self.life = life
        self.attack = attack

    def basic_attack(self, character):
        """Perform a basic attack on another character."""
        character.life = max(0, character.life - self.attack)
        print(f"{self.name} attacked {character.name}. {character.name}'s life: {character.life}")


'''
Instructions
Now create 3 different classes that inherit from Character:
Every character type should say (ie. print) something when they are created, get creative :)
'''
'''
Druid:
meditate() - increases life by 10, decrease attack by 2
animal_help()- increases attack by 5
fight() - accepts another Character instance as a parameter and subtracts (0.75*life + 0.75*attack) from the other character’s life.
Example:
druid.fight(other_char): other_char.life - (0.75*self.life + 0.75*self.attack)
'''
class Druid(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"{self.name} the Druid has entered the game.")

    def meditate(self):
        self.life += 10
        self.attack = max(0, self.attack - 2)  # Ensure attack doesn't go below zero.
        print(f"{self.name} meditated. Life: {self.life}, Attack: {self.attack}")

    def animal_help(self):
        self.attack += 5
        print(f"{self.name} called for The Grufallo for help. Attack: {self.attack}")

    def fight(self, character):
        damage = 0.75 * self.life + 0.75 * self.attack
        character.life = max(0, character.life - damage)
        print(f"{self.name} fought {character.name}. {character.name}'s life: {character.life}")


'''
Warrior:
brawl() -   accepts another Character instance as a parameter, 
            subtracts (2*attack) to the other characters life and adds (0.5*attack) to his own life.
train() - increases both your attack and life points by 2.
roar() - accepts another Character instance as a parameter and subtracts their attack points by 3.
'''
class Warrior(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"{self.name} the Warrior has entered the game.")

    def brawl(self, character):
        damage = 2 * self.attack
        character.life = max(0, character.life - damage)
        self.life += 0.5 * self.attack
        print(f"{self.name} punched {character.name} right in the face... IN THE FACE! {character.name}'s life: {character.life}, {self.name}'s life: {self.life}")

    def train(self):
        self.life += 2
        self.attack += 2
        print(f"{self.name} trained. Life: {self.life}, Attack: {self.attack}")

    def roar(self, character):
        character.attack = max(0, character.attack - 3)  # Ensure attack doesn't go below zero.
        print(f"{self.name} used growl at {character.name}. It was super effective! {character.name}'s attack: {character.attack}")



'''
Mage:
curse() – accepts another Character instance as a parameter and subtracts their attack points by 2.
summon() - increases attack attribute by 3 points.
cast_spell() - accepts another Character instance as a parameter and subtracts attack/life 
to the other character’s life points 
(eg if your attack is 20 and life is 5 you will subtract 4 life points).
'''
'''
Once all your classes are created start testing them, 
create one of each character and use each of their method.'''

class Mage(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"{self.name} the Mage has entered the game.")

    def curse(self, character):
        character.attack = max(0, character.attack - 2)  # Ensure attack doesn't go below zero.
        print(f"{self.name} CASTS ICHY BONES ON {character.name}. {character.name}'s attack: {character.attack}")

    def summon(self):
        self.attack += 3
        print(f"{self.name} CASTS SUMMON AK-47. Attack: {self.attack}")

    def cast_spell(self, character):
        damage = self.attack // self.life if self.life != 0 else 0  # Avoid division by zero.
        character.life = max(0, character.life - damage)
        print(f"{self.name} CASTS TESTICULAR TORSION ON {character.name}. {character.name}'s life: {character.life}")



druid = Druid("Snoop Dogg")
warrior = Warrior("Bob")
mage = Mage("Specularius The Fister")

# Test Druid
druid.meditate()
druid.animal_help()
druid.fight(warrior)

# Test Warrior
warrior.brawl(druid)
warrior.train()
warrior.roar(mage)

# Test Mage
mage.curse(warrior)
mage.summon()
mage.cast_spell(druid)