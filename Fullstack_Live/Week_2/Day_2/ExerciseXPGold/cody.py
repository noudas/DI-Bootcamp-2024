# Part I:
# 
# Create a class called BankAccount that contains the following attributes and methods:
# balance - (an attribute)
# __init__ : initialize the attribute
# deposit : - (a method) accepts a positive int and adds to the balance, raise an Exception if the int is not positive.
# withdraw : - (a method) accepts a positive int and deducts from the balance, raise an Exception if not positive
class BankAccount:
    def __init__(self, balance, username, password, authenticated=False):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = authenticated 

    def deposit(self,value):
        if self.authenticated == False:
            raise Exception("Not logged in")
        if value < 0:
            raise Exception("Cannot add a negative number")
        else:
            self.balance += value

    def withdraw(self,value):
        if value < 0:
            raise Exception("Cannot remove a negative number creating a positive number")
        else:
            self.balance -= value

    def authenticate(self,usr,passw):
        if usr == self.username and passw == self.password:
            self.authenticated = True

# 
# Part II : Minimum balance account
# 
# Create a MinimumBalanceAccount that inherits from BankAccount.
# Extend the __init__ method and accept a parameter called minimum_balance with a default value of 0.
# Override the withdraw method so it only allows the user to withdraw money if the balance remains higher than the minimum_balance, 
# raise an Exception if not.

class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, authenticated=False, minimum_balance = 0):
        super().__init__(balance,username, password, authenticated=False)
        self.minimum_balance = 0

    def withdraw(self, value):
        if self.authenticated == False:
            raise Exception("Not logged in")
        if value < 0:
            raise Exception("Cannot remove a negative number creating a positive number")
        elif self.minimum_balance:
            raise Exception("Cannot withdraw you poor fuck! YOU HAVE 0 MONEYS!")
        else:
            self.balance -= value

# 
# Part III: Expand the bank account class
# 
# Add the following attributes to the BankAccount class:
# username
# password
# authenticated (False by default)
# 
# Create a method called authenticate. This method should accept 2 strings : a username and a password. 
# If the username and password match the attributes username and password the method should set the authenticated boolean to True.
# 
# Edit withdraw and deposit to only work if authenticated is set to True, 
# if someone tries an action without being authenticated raise an Exception
# 
# 

# Creating instances of BankAccount
account1 = BankAccount(balance=1000, username="user1", password="pass1")
account2 = BankAccount(balance=500, username="user2", password="pass2")

# Authenticate and test deposits and withdrawals
account1.authenticate("user1", "pass1")
account1.deposit(200)
account1.withdraw(150)

account2.authenticate("user2", "pass2")
account2.deposit(300)
account2.withdraw(100)

min_balance_account1 = MinimumBalanceAccount(balance=1500, username="user1", password="pass1", minimum_balance=200)
min_balance_account2 = MinimumBalanceAccount(balance=800, username="user2", password="pass2", minimum_balance=100)

# Authenticate and test withdrawals with minimum balance checks
min_balance_account1.authenticate("user1", "pass1")
try:
    min_balance_account1.withdraw(1300)  # This should work; balance after withdrawal would be 200
except Exception as e:
    print(e)

min_balance_account2.authenticate("user2", "pass2")
try:
    min_balance_account2.withdraw(750)  # This should raise an Exception because balance would go below the minimum balance
except Exception as e:
    print(e)


# Part IV: BONUS Create an ATM class
# 
# __init__:
# Accepts the following parameters: account_list and try_limit.
# 
# Validates that account_list contains a list of BankAccount or MinimumBalanceAccount instances.
# Hint: isinstance()

class ATM:
    def __init__(self, account_list=None, try_limit= 3,current_tries = 0):
        self.account_list = account_list if account_list is not None else []
        self.try_limit = try_limit
        self.current_tries = current_tries

        for account in account_list:
            if not isinstance(account, (BankAccount, MinimumBalanceAccount)):
                raise Exception("Not all of the account on the list are Objects")
            
    def login(self,usr,passw):
        usr = usr
        passw = passw
        while self.current_tries < self.try_limit:
            for account in self.account_list:
                if account.username == usr and account.password == passw:
                    account.authenticate(usr,passw)
                    self.show_account_menu(account)
                else:
                    usr = input("Try inputting the user again: ")
                    passw = input("Try inputting the passw again: ")
                    self.current_tries += 1
                    

    def show_account_menu(self,account):
        print("Account Menu")
        while True:
            print("Type 1 to deposit")
            print("Type 2 to Withdraw")
            print("Type 3 to Exit")
            check = int(input("Type here: "))
            match check:
                case 1:
                    amount = int(input("How much do you wish to deposit: "))
                    account.deposit(amount)
                case 2:
                    amount = int(input("How much do you wish to withdraw: "))
                    account.withdraw(amount)
                case 3:
                    print("Turning off")
                    break
        return False

                
            
    def show_main_menu(self):
            while True:
                print("Welcome!")
                print("Type 1 for Login")
                print("Type 2 to Exit")

                confirmation = int(input("Type: "))
                match confirmation:
                    case 1:
                        usr = input("Type your username: ")
                        passw = input("Type your password: ")
                        self.login(usr,passw)
                    case 2:
                        print("Turning off")
                        break



atm_instance = ATM(account_list=[account1, account2, min_balance_account1, min_balance_account2])
atm_instance.show_main_menu()

# 
# Validates that try_limit is a positive number, if you get an invalid input raise an Exception, then move along and set try_limit to 2.
# Hint: Check out this tutorial
# 
# Sets attribute current_tries = 0
# 
# Call the method show_main_menu (see below)
# 
# Methods:
# show_main_menu:
# This method will start a while loop to display a menu letting a user select:
# Log in : Will ask for the users username and password and call the log_in method with the username and password (see below).
# Exit.
# 
# log_in:
# Accepts a username and a password.
# 
# Checks the username and the password against all accounts in account_list.
# If there is a match (ie. use the authenticate method), call the method show_account_menu.
# If there is no match with any existing accounts, increment the current tries by 1. 
# Continue asking the user for a username and a password, until the limit is reached (ie. try_limit attribute). 
# Once reached display a message saying they reached max tries and shutdown the program.
# 
# show_account_menu:
# Accepts an instance of BankAccount or MinimumBalanceAccount.
# The method will start a loop giving the user the option to deposit, withdraw or exit.