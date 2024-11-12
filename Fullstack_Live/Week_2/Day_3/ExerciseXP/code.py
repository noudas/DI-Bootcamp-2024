# 🌟 Exercise 1: Currencies
# Instructions
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
#     #Your code starts HERE

    def _add_amount(self, amount):
        if isinstance(amount, Currency):
            if self.currency == amount.currency:
                return self.amount + amount.amount
            else:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {amount.currency}")
        else:
            return self.amount + amount

    def __add__(self, amount):
        self.amount = self._add_amount(amount)
        return self.amount
        
    def ___iadd__(self,amount):
        self.amount = self._add_amount(amount)
        return self

    def __str__(self):
        string = f'{self.amount} {self.currency+'s'} '
        return string
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        string = f'{self.amount} {self.currency+'s'} '
        return string
# 
# 
# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)
# 
print(str(c1))
# '5 dollars'
# 
print(int(c1))
# 5
# 
print(repr(c1))
# '5 dollars'
# 
#c1 + 5
# 10
# 
#print(c1 + c2)
# 15
# 
# >>> c1 
# 5 dollars
# 
c1 += 5
print(str(c1))
# >>> c1
# 10 dollars
# 
c1 += c2
# >>> c1
# 20 dollars
# 
c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>
# 
# 
# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that sum 2 numbers, and prints the result
# In a file named exercise_one.py import the function and call it to print the result
# Hint: You can use the the following syntaxes:
# 
# import module_name 
# 
# OR 
# 
# from module_name import function_name 
# 
# OR 
# 
# from module_name import function_name as fn 
# 
# OR
# 
# import module_name as mn
# 
# 
# 🌟 Exercise 3: String module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module
# 
# 
# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.
# 
# 
# Exercise 5 : Amount of time left until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).
# 
# 
# Exercise 6 : Birthday and minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.
# 
# 
# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.