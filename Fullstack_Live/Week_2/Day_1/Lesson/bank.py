class BankAccount:
    def __init__(self, owner_name, number, balance = 0):
        self.owner_name = owner_name
        self.number = number
        self.transactions = []
        self.balance = balance

    def show_balance(self):
        print(f'You balance now is: {self.balance}')

    def deposit(self,amount):
        self.transactions.append(f"Added +{amount} to your balance")
        self.balance += amount
        self.show_balance()
        return self.balance

    def wirthdraw(self,amount):
        self.transactions.append(f"Removed -{amount} to your balance")
        self.balance -= amount
        self.show_balance()
        return self.balance
    
    def transactions_list(self):
        print(f"Transactions: {self.transactions}")
    
my_account = BankAccount("Namersson Surnamersson", 123, 100)
my_account.deposit(500)
my_account.wirthdraw(50)
my_account.transactions_list()

# Implement on those metods exceot show balance
# A code that will add the action to the transactions list