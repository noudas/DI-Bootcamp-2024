# A perfect number is a positive integer that is equal to the sum of its divisors.

# However, the number itself is not included in the sum.
# 
# Ask the user for a number and print whether or not it is a perfect number. If yes, print True else False.
# Hint: Google perfect numbers
# Example
# 
# Input -- Enter the number:6
# Output -- True
# 
# Input -- Enter the number:10
# Output --  False

number = int(input("Type a number "))

list_factors = [factor for factor in range(1, number + 1) if number % factor == 0]
print(list_factors)

comparisson = sum(list_factors[0:-1])
print(comparisson)

if number == comparisson:
    print(f"{number} Is a perfect Number!")
else:
    print(f"{number} Is not a perfect Number ;_;")