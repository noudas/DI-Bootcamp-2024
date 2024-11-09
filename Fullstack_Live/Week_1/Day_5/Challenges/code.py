def exercise_1():
    # Write a script that inserts an item at a defined index in a list.
    justalist = []
    for i in range(10):
        justalist.append(i)
    item = input("Add somthing to the list ")
    where = int(input("Add where on the list "))
    justalist.insert(where,item)
    print(justalist)
    
def exercise_2():
    # Write a script that counts the number of spaces in a string.
    something = input("Write a phrase: ")
    something_list = [letter for letter in something]
    cout = 0
    for i in something_list:
        if i == ' ' or i == '':
            cout += 1

    count = sum(1 for char in something if char.isspace())
    print(count)
    print(cout)

def exercise_3():
    # Write a script that calculates the number of upper case letters and lower case letters in a string.
    something = input("Write a phrase: ")
    count_lower = sum(1 for char in something if not char.isupper())
    count_upper = sum(1 for char in something if char.isupper())
    print(count_lower)
    print(count_upper)
    
def exercise_4():
    # Write a function to find the sum of an array without using the built in function:
    my_sum = [1,5,4,2]
    count = 0
    for i in my_sum:
        count += i
    print(count)

def exercise_5():
    # Write a function to find the max number in a list
    find_max = [0,1,3,50]
    a = 0
    for i in find_max:
        if i > a:
            a = i

    print(a)

def exercise_6():
    # Write a function that returns factorial of a number
    number = int(input())
    count = 1

    for i in range(1, number + 1):
        count *= i
    
    print(f"The factorial of {number} is: {count}")
    # >>>factorial(4)
    # >>>24

def exercise_7():
    # Write a function that counts an element in a list (without using the count method):
    

    # >>>list_count(['a','a','t','o'],'a')
    # >>>2
    pass

def exercise_8():
    # Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

    # >>>norm([1,2,2])
    # >>>3
    pass

def exercise_9():
    # Write a function to find if an array is monotonic (sorted either ascending of descending)

    # >>>is_mono([7,6,5,5,2,0])
    # >>>True

    # >>>is_mono([2,3,3,3])
    # >>>True

    # >>>is_mono([1,2,0,4])
    # >>>False
    pass

def exercise_10():
    # Write a function that prints the longest word in a list.
    pass

def exercise_11():
    # Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
    pass

def exercise_12():
    # Write a function to check if a string is a palindrome:

    # >>>is_palindrome('radar')
    # >>>True

    # >>>is_palindrome('John)
    # >>>False
    pass

def exercise_13():
    # Write a function that returns the amount of words in a sentence with length > k:

    # >>>sentence = 'Do or do not there is no try'
    # >>>k=2
    # >>>sum_over_k(sentence,k)
    # >>>3
    pass

def exercise_14():
    # Write a function that returns the average value in a dictionary (assume the values are numeric):
 
    # >>>dict_avg({'a': 1,'b':2,'c':8,'d': 1})
    # >>>3
    pass

def exercise_15():
    # Write a function that returns common divisors of 2 numbers:

    # >>>common_div(10,20)
    # >>>[2,5,10]
    pass

def exercise_16():
    # Write a function that test if a number is prime:

    # >>>is_prime(11)
    # >>>True
    pass

def exercise_17():
    # Write a function that prints elements of a list if the index and the value are even:

    # >>>weird_print([1,2,2,3,4,5])
    # >>>[2,4]
    pass

def exercise_18():
    # Write a function that accepts an undefined number of keyworded arguments and return the count of different types:

    # >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
    # >>>int: 1, str:1 , float:1, bool:2
    pass

def exercise_19():
    # Write a function that mimics the builtin .split() method for strings.
    # By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.
    pass

def exercise_20():
    # Convert a string into password format.
    # Example:
    # input : "mypassword"
    # output: "***********"
    pass

#exercise_1()
#exercise_2()
#exercise_3()
#exercise_4()
#exercise_5()
#exercise_6()
exercise_7()