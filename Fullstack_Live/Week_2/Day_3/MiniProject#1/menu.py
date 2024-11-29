import game

def create_character():
    while True:
        name = input("What is your character's name? ")
        print("""Choose your class!
1. Druid - You have the power of Nature and Animals by your side!
2. Warrior - You are a beast! Kill all of them in your way!
3. Mage - YOU CAAAAAASTTT TESTICULAR TORSION!""")
        try:
            option = int(input("Type your answer (1-3): "))
            match option:
                case 1:
                    character = game.Druid(name)
                    print(f"You chose Druid! Welcome, {name}!")
                    return character
                case 2:
                    character = game.Warrior(name)
                    print(f"You chose Warrior! Welcome, {name}!")
                    return character
                case 3:
                    character = game.Mage(name)
                    print(f"You chose Mage! Welcome, {name}!")
                    return character
                case _:
                    print("Invalid option. Please choose a valid class (1-3).")
        except ValueError:
            print("Invalid input! Please enter a number between 1 and 3.")


def character_menu(character):
    while True:
        print(f"\nWelcome, {character.name}!")
        print("What would you like to do?")
        
        if isinstance(character, game.Druid):
            print("""
1. Meditate - Increase life by 10, decrease attack by 2.
2. Animal Help - Increase attack by 5.
3. Fight - Attack an enemy with a calculated damage.
4. Basic Attack - Perform a basic attack on an enemy.
5. Exit
""")
        elif isinstance(character, game.Warrior):
            print("""
1. Brawl - Double your attack damage to an enemy and heal yourself.
2. Train - Increase life and attack by 2.
3. Roar - Decrease an enemy's attack by 3.
4. Basic Attack - Perform a basic attack on an enemy.
5. Exit
""")
        elif isinstance(character, game.Mage):
            print("""
1. Curse - Decrease an enemy's attack by 2.
2. Summon - Increase your attack by 3.
3. Cast Spell - Deal damage based on your attack and life.
4. Basic Attack - Perform a basic attack on an enemy.
5. Exit
""")
        
        # Prompt the user for input
        try:
            choice = int(input("Choose an option (1-5): "))
        except ValueError:
            print("Invalid input! Please choose a number between 1 and 5.")
            continue
        
        # Handle the menu options
        match choice:
            case 1:
                if isinstance(character, game.Druid):
                    character.meditate()
                    print(f"{character.name} meditates. Life: {character.life}, Attack: {character.attack}")
                elif isinstance(character, game.Warrior):
                    target = create_dummy_enemy()
                    character.brawl(target)
                    print(f"{character.name} brawls! Life: {character.life}, Enemy Life: {target.life}")
                elif isinstance(character, game.Mage):
                    target = create_dummy_enemy()
                    character.curse(target)
                    print(f"{character.name} curses the enemy. Enemy Attack: {target.attack}")
            case 2:
                if isinstance(character, game.Druid):
                    character.animal_help()
                    print(f"{character.name} receives animal help. Attack: {character.attack}")
                elif isinstance(character, game.Warrior):
                    character.train()
                    print(f"{character.name} trains. Life: {character.life}, Attack: {character.attack}")
                elif isinstance(character, game.Mage):
                    character.summon()
                    print(f"{character.name} summons power. Attack: {character.attack}")
            case 3:
                if isinstance(character, game.Druid):
                    target = create_dummy_enemy()
                    character.fight(target)
                    print(f"{character.name} fights! Enemy Life: {target.life}")
                elif isinstance(character, game.Warrior):
                    target = create_dummy_enemy()
                    character.roar(target)
                    print(f"{character.name} roars! Enemy Attack: {target.attack}")
                elif isinstance(character, game.Mage):
                    target = create_dummy_enemy()
                    character.cast_spell(target)
                    print(f"{character.name} casts a spell! Enemy Life: {target.life}")
            case 4:
                target = create_dummy_enemy()
                character.basic_attack(target)
                print(f"{character.name} performs a basic attack! Enemy Life: {target.life}")
            case 5:
                print("Exiting the menu. Goodbye!")
                break
            case _:
                print("Invalid option! Please choose a number between 1 and 5.")

def create_dummy_enemy():
    """
    Creates a simple enemy character for testing purposes.
    Returns:
        Character: A dummy enemy instance with predefined attributes.
    """
    return game.Character(name="Dummy Enemy", life=30, attack=5)

def main():
    print("Welcome to the Character Game!")
    print("==============================")
    character = create_character()
    character_menu(character)
    print("Thank you for playing!")


if __name__ == "__main__":
    main()
