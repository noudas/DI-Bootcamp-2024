import random

longstring = input("Write something at exactly 10 characters long: ")

a = ''
if len(longstring) < 10:

    print("string not long enough")

elif len(longstring) == 10:

    print("perfect string")

    print(longstring[0],longstring[-1])

    for i in longstring:
        a += i
        print(a)
    print("\nBonus\n")

    longstring_characters = list(longstring)
    random.shuffle(longstring_characters)
    longstring = ''.join(longstring_characters)
    
    print(f"A Jumbled mess of words: {longstring}")

else:
    print("string too long")