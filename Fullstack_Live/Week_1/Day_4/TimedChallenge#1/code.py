# Write a program which takes a string and a character as an input, 
#and finds out the number of occurrences the character has in the string.
# 
# String: Programming is cool!
# Character: o
# 3
# 
# 
# String: This is a great example
# Character: y
# 0

phrase = input("Write something here ")
letter = input("Choose a letter to find ")

# count = 0
# 
# for letara in phrase:
#     if letter == letara:
#         count += 1

count = phrase.count(letter)

print(count)