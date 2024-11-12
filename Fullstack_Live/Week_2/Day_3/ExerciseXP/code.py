def exercise_1():
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
            elif isinstance(amount, (int, float)): 
                return self.amount + amount
            else:
                raise TypeError(f"Unsupported type for addition: {type(amount)}")

        def __add__(self, amount):
            self.amount = self._add_amount(amount)
            return self.amount
            
        def __iadd__(self,amount):
            new_amount = self._add_amount(amount)
            self.amount = new_amount
            return self

        def __str__(self):
            string = f'{self.amount} {self.currency+'s'}'
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
    print(c1)
    # 20 dollars
    # 
    c1 + c3
    # TypeError: Cannot add between Currency type <dollar> and <shekel>
    # 

def exercise_2():
    pass
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

def exercise_3():
# 🌟 Exercise 3: String module
# Instructions
    import string
    import random
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module
    istringui = ''.join(random.choices(string.ascii_letters,k=5))

    print(istringui)

def exercise_4():
# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.
    import datetime
    print(datetime.datetime.now())

def exercise_5():
    import datetime
# Exercise 5 : Amount of time left until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).
    def time_left_until_January_1st():
        today = datetime.datetime.now()
        next_year = datetime.datetime.now().year + 1
        print(next_year)
        january_1st = datetime.datetime(next_year, 1, 1)

        time_left = january_1st - today
        
        return time_left

    print(time_left_until_January_1st())

def exercise_6():
    # Exercise 6 : Birthday and minutes
    # Instructions
    # Create a function that accepts a birthdate as an argument (in the format of your choice), 
    # then displays a message stating how many minutes the user lived in his life.
    import datetime

    def birthday(year,month,day):
        birth = datetime.datetime(year, month, day)
        today = datetime.datetime.now()

        time_lived = today - birth

        minutes = time_lived.total_seconds() // 60
        return f"You lived {minutes} minutes"

    print(birthday(1998,5,18))

def exercise_7():
    # Exercise 7 : Faker Module
    # Instructions
    from faker import Faker
    # Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
    fake = Faker()
    # Create an empty list called users. Tip: It should be a list of dictionaries.
    users = []

# Create a function that adds new dictionaries to the users list
    def amazing_dics(users, num_users=5):
        for _ in range(num_users):
            user_data = {
                'name': fake.name(),
                'address': fake.address(),
                'language_code': fake.language_code()
            }
            users.append(user_data)
        return users

    # Populate the users list with 5 new users
    users = amazing_dics(users)
    print(users)


    # Each user has the following keys: name, adress, langage_code. 
    # Use faker to populate them with fake data.

#exercise_1()
#exercise_3()
#exercise_4()
#exercise_5()
#exercise_6()
#exercise_7()