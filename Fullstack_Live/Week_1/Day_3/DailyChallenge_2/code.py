# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.
# 
# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.
# 
# The method is named after Julius Caesar, who used it in his private correspondence.
# 
# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, 
# and then execute encryption/decryption on a given message and a given shift.

dict_upper = {}
dict_lower = {}

def upperCaseAlphabets():
    for i in range(65, 91):
        if i - 3 < 65:
            letter_changed = 91 - (65 - (i - 3))
        else:
            letter_changed = i - 3
        dict_upper[chr(i)] = chr(letter_changed)

def lowerCaseAlphabets():
    for i in range(97, 123):
        if i - 3 < 97:
            letter_changed = 123 - (97 - (i - 3))
        else:
            letter_changed = i - 3
        dict_lower[chr(i)] = chr(letter_changed)

upperCaseAlphabets()
lowerCaseAlphabets()

a = input("Lets make a secret! Write a phrase ")
novapalavra = []
for letra in a:
    if letra in dict_lower.keys():
        letra = dict_lower[letra]
        novapalavra.append(letra)
    if letra in dict_upper.keys():
        letra = dict_upper[letra]
        novapalavra.append(letra)
    if letra == " ":
        novapalavra.append(letra)

print(''.join(novapalavra))
