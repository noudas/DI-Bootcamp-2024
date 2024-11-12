# Here is a python code that generates a list of 20000 random numbers, called list_of_numbers, and a target number.
# 
import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728
# 
# 
# Copy this code, and create a program that finds, within list_of_numbers all the pairs of number that sum to the target number
# 
# For example
# 
# 1000 and 2728 sums to the target_number 3728
# 1864 and 1864 sums to the target_number 3728


seen_numbers = set()
sums = []

for num in list_of_numbers:
    number2 = target_number - num
    if number2 in seen_numbers:
        sums.append([number2, num])
    seen_numbers.add(num)

print(sums)