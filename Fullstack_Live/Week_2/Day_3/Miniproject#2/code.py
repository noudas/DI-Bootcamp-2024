# Requirements
# Class Attributes and Methods:
# The class should keep track of the total number of bank accounts created and maintain a list of all accounts.
# Implement a class method to find an account by its account number.
# Implement a class method to summarize total balances across all accounts.
# 
# Instance Attributes and Methods:
# 
# Use a @property to manage access to the account balance.
# Use a @property and @setter to handle and validate the account type.
# Include a transaction history that logs deposits and withdrawals.
# Implement a method to calculate and add interest to the account balance (specific to savings accounts).
# Implement methods for depositing and withdrawing money, with validation checks.
# 
class Bank:
    # Class Attributes:
    def __init__(self,total_accounts = 0,all_accounts = [],interest_rate = 0):
        # total_accounts: Tracks the total number of bank accounts created.
        self.total_accounts = total_accounts 

        # all_accounts: A list that stores references to all BankAccount instances.
        self.all_accounts = all_accounts

        # interest_rate: A class attribute to define the default interest rate for savings accounts.
        self.interest_rate = interest_rate

    # Class Methods:

    @classmethod
    # get_total_accounts(cls): Returns the total number of accounts.
    def get_total_accounts(cls):
        pass

    # find_account_by_number(cls, account_number): Finds and returns an account by its account number.
    @classmethod
    def find_account_by_number(cls, account_number):
        pass

    # total_balances(cls): Returns the sum of balances across all accounts.
    @classmethod
    def total_balances(cls):
        pass
# 
# Properties:
# 
# balance: Provides access to the account balance.
# account_type: Manages the type of account with validation logic.
# transaction_history: A list that logs all transactions (deposits and withdrawals).
# 
# Methods:
# 
# deposit(amount): Adds money to the account and logs the transaction.
# withdraw(amount): Withdraws money, ensuring the balance doesn’t go negative, and logs the transaction.
# apply_interest(): Applies interest to savings accounts.
# 
# Tasks to Complete
# 
# Create the BankAccount class with the provided class and instance attributes.
# Implement class methods to manage and interact with the accounts collectively.
# Implement the @property and @setter for the account balance and account type.
# Track transaction history within each account.
# Test your class by creating multiple accounts, performing various transactions, and applying interest.
# 
# 
# Expected Output
# 
# When you run the example usage:
# 
# The account balances should update correctly based on deposits, withdrawals, and interest application.
# The total number of accounts created and total balances should be tracked and displayed accurately.
# The find_account_by_number method should correctly identify accounts by their unique account number.
# The transaction history for each account should log all actions taken.
# 