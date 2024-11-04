import math
import random

def exercise1():
    # Write a program that calculates and prints a value according to this given formula:
    # Q = Square root of [(2 * C * D)/H]
    # Following are the fixed values of C and H:
    # C is 50.
    # H is 30.
    # Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
    # For example, if the user inputs: 100,150,180
    # The output should be:
    # 
    # 18,22,24

    C = 50
    H = 20 

    a = input("Number gimme 3 separated by ',': ")

    lista = a.split(',')
    lista2 = []
    for i in lista:
        i = int(i)
        lista2.append(i)
    lista = []
    for i in lista2:
        Q = math.sqrt((2 * C * i)/H)
        lista.append(Q)
    print(lista)

def exercise2():
    # Given a list of 10 integers to analyze. For example:
    # 
    #     [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
    #     [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
    #     [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
    #     [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
    #
    # Store the list of numbers in a variable.
    # Print the following information:
    # a. The list of numbers – printed in a single line
    # b. The list of numbers – sorted in descending order (largest to smallest)
    # c. The sum of all the numbers
    # A list containing the first and the last numbers.
    # A list of all the numbers greater than 50.
    # A list of all the numbers smaller than 10.
    # A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
    # The numbers without any duplicates – also print how many numbers are in the new list.
    # The average of all the numbers.
    # The largest number.
    # 10.The smallest number.
    # 11.Bonus: Find the sum, average, largest and smallest number without using built in functions.

    # 12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. 
    # Ask the user for an integer between -100 and 100 – repeat this question 10 times. 
    # Each number should be added into a variable that you created earlier.

    # 13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. 
    # Make sure that these random integers are between -100 and 100.

    # 14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! 
    # Generate a random positive integer no smaller than 50.

    # 15.Bonus: Will the code work when the number of random numbers is not equal to 10?

    a = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
    print(a)

    a = sorted(a)
    print(a)

    print(sum(a))

    b = [a[0],a[-1]]
    print(b)

    c = [num for num in a if num > 50]
    d = [num for num in a if num < 50]
    print(c,d)

    e = []
    for num in a:
        e.append(num**2)
    print(sorted(e))

    f = set(a)
    print(len(f))

    g = sum(a)/len(a)
    print(g)

    h = min(a)
    i = max(a)

    print(h,i)

    #bonus
    count = 0 
    soma = 0
    menor = 100000000
    maior = 0
    for i in a:
        count += 1
        soma += i

        if i > maior:
            maior = i
        if i < menor:
            menor = i

    print(soma,soma/count,menor,maior)

    nums = []

    for i in range(10):
        num = int(input(f"Enter an integer between -100 and 100 ({i+1}/10): "))
        if -100 <= num <= 100:
            nums.append(num)
        else:
            print("Please enter a number within the range.")
    print(nums)

    random_numbers = [random.randint(-100, 100) for _ in range(10)]
    print("Randomly generated numbers:", random_numbers)

    num_count = random.randint(50, 100)
    random_numbers = [random.randint(-100, 100) for _ in range(num_count)]

    print(f"Number of random integers generated: {num_count}")
    print("Randomly generated numbers:", random_numbers)

def exercise3():
    # Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
    # Paste it to your code, and store it in a variable.
    # Let’s analyze the paragraph. Print out a nicely formatted message saying:
    # How many characters it contains (this one is easy…).
    # How many sentences it contains.
    # How many words it contains.
    # How many unique words it contains.
    # Bonus: How many non-whitespace characters it contains.
    # Bonus: The average amount of words per sentence in the paragraph.
    # Bonus: the amount of non-unique words in the paragraph.
    



def exercise4():
    # Write a program that prints the frequency of the words from the input.

    # Suppose the following input is supplied to the program:
    # New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.
    # 
    # Then, the output should be:
    # 
    #     2:2
    #     3.:1
    #     3?:1
    #     New:1
    #     Python:5
    #     Read:1
    #     and:1
    #     between:1
    #     choosing:1
    #     or:2
    #     to:1




#exercise1()
#exercise2()
exercise3()