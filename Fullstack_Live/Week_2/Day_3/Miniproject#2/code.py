# Requirements
# Class Attributes and Methods:
# The class should keep track of the total number of bank accounts created and maintain a list of all accounts.
# Implement a class method to find an account by its account number.
# Implement a class method to summarize total balances across all accounts.
# 
# 
# Bank Class: Tracks all bank accounts and provides collective management functionality.
class Bank:
    # Class Attributes:
    total_accounts = 0  # Tracks the total number of bank accounts created.
    all_accounts = []  # A list that stores references to all BankAccount instances.
    interest_rate = 0.02  # Default interest rate for savings accounts.

    @classmethod
    def get_total_accounts(cls):
        """Returns the total number of accounts."""
        return len(cls.all_accounts)

    @classmethod
    def find_account_by_number(cls, account_number):
        """Finds and returns an account by its account number."""
        for account in cls.all_accounts:
            if account.account_number == account_number:
                return account
        return None

    @classmethod
    def total_balances(cls):
        """Returns the sum of balances across all accounts."""
        return sum(account.balance for account in cls.all_accounts)

    @classmethod
    def add_account(cls, account):
        """Adds a new account to the bank."""
        cls.all_accounts.append(account)
        cls.total_accounts += 1


# BankAccount Class: Represents individual bank accounts.
class BankAccount:
    # Class-level attribute to track unique account numbers.
    account_counter = 1000  # Start account numbers from 1000

    def __init__(self, balance=0, account_type="checking"):
        """
        Initializes a new bank account.

        Parameters:
        - balance: The starting balance of the account (default: 0).
        - account_type: The type of the account (savings or checking).
        """
        self.account_number = BankAccount.account_counter
        BankAccount.account_counter += 1

        self.balance = balance
        self.account_type = account_type
        self.transaction_history = []  # Tracks all transactions for this account.

        # Register this account with the Bank
        Bank.add_account(self)

    # Property and setter for balance
    @property
    def balance(self):
        """Provides access to the account balance."""
        return self._balance

    @balance.setter
    def balance(self, value):
        """Validates and sets the account balance."""
        if value < 0:
            raise ValueError("Balance cannot be negative.")
        self._balance = value

    # Property and setter for account type
    @property
    def account_type(self):
        """Provides access to the account type."""
        return self._account_type

    @account_type.setter
    def account_type(self, value):
        """Validates and sets the account type."""
        if value not in ["savings", "checking"]:
            raise ValueError("Account type must be 'savings' or 'checking'.")
        self._account_type = value

    # Deposit Method
    def deposit(self, amount):
        """
        Deposits money into the account and logs the transaction.
        Raises ValueError for invalid amounts.

        Parameters:
        - amount: The amount to deposit (must be positive).
        """
        if amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        self.balance += amount
        self.transaction_history.append(f"Deposited: ${amount}")
        print(f"${amount} deposited. New balance: ${self.balance}")

    # Withdraw Method
    def withdraw(self, amount):
        """
        Withdraws money from the account and logs the transaction.
        Ensures the account doesn't go into a negative balance.

        Parameters:
        - amount: The amount to withdraw (must be positive).
        """
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise ValueError("Insufficient balance.")
        self.balance -= amount
        self.transaction_history.append(f"Withdrew: ${amount}")
        print(f"${amount} withdrawn. New balance: ${self.balance}")

    # Apply Interest Method
    def apply_interest(self, rate=None):
        """
        Applies interest to the account balance. Only applicable for savings accounts.

        Parameters:
        - rate: The interest rate (uses the Bank's default if None).
        """
        if self.account_type != "savings":
            raise ValueError("Interest can only be applied to savings accounts.")
        if rate is None:
            rate = Bank.interest_rate  # Use the Bank's default interest rate
        interest = self.balance * rate
        self.balance += interest
        self.transaction_history.append(f"Interest applied: ${interest:.2f}")
        print(f"Interest of ${interest:.2f} applied. New balance: ${self.balance}")


# Example Usage
if __name__ == "__main__":
    # Create accounts
    acc1 = BankAccount(balance=500, account_type="savings")
    acc2 = BankAccount(balance=1000, account_type="checking")

    # Perform transactions
    acc1.deposit(200)
    acc1.withdraw(100)
    acc1.apply_interest()

    acc2.deposit(500)
    acc2.withdraw(300)

    # Check Bank details
    print(f"Total accounts: {Bank.get_total_accounts()}")
    print(f"Total balances: ${Bank.total_balances():.2f}")

    # Find an account by account number
    account = Bank.find_account_by_number(1001)
    if account:
        print(f"Found account {account.account_number} with balance ${account.balance:.2f}")
    else:
        print("Account not found.")

    # Transaction history
    print(f"Transaction history for account {acc1.account_number}: {acc1.transaction_history}")


# Methods:
# 
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