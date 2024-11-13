# Notice : solve this exercise using a lambda function.
# 
# Ask a user for the following inputs 5 times:
# Name (string)
# Age (int)
# Score (int)
# Build a list of tuples using these inputs, each tuple should contain a name, age and score.
list_of_tuples = []
for _ in range(5):
    tup = []
    name= input("Write your name ")
    age = int(input("Type your age "))
    score = int(input("Type your score "))
    tup.append(name)
    tup.append(age)
    tup.append(score)
    list_of_tuples.append(tuple(tup))

# Sort the list by the following priority Name > Age > Score.

list_of_tuples.sort(key=lambda x: sorted(x, key=lambda i: (isinstance(i, str), i)))

print(list_of_tuples)
# If the following tuples are given as input to the script:
# 
# Tom,19,80
# John,20,90
# Jony,17,91
# Jony,17,93
# Json,21,85
# Then, the output of the program should be:
# [('John', '20', '90'), ('Jony', '17', '91'), ('Jony', '17', '93'), ('Json', '21', '85'), ('Tom', '19', '80')]
# Note : The lambda function will not print but sort