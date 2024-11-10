# Create a class called Phone. This class takes a parameter called phone_number. 
# When instantiating an object create an attribute called call_history which value is an empty list.

class Phone:
    def __init__(self,phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

# Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. 
# The method should print a string stating who called who, and add this string to the phone’s call_history.

    def call(self,phone):
        print(f"{self.phone_number} called {phone.phone_number}")
        self.call_history.append(f"{self.phone_number} called {phone.phone_number}")

# Add a method called show_call_history. This method should print the call_history.
    def show_call_history(self):
        print(self.call_history)

# Add another attribute called messages to your __init__() method which value is an empty list.

# Create a method called send_message which is similar to the call method. 
    def send_message(self, content, phone):
        message = {
            "to": phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        phone.messages.append(message)
    
    def show_outgoing_messages(self):
        print("Outgoing Messages:")
        for msg in self.messages:
            if msg['from'] == self.phone_number:
                print(msg)

    def show_incoming_messages(self):
        print("Incoming Messages:")
        for msg in self.messages:
            if msg['to'] == self.phone_number:
                print(msg)

    def show_messages_from(self, phone):
        print(f"Messages from {phone.phone_number}:")
        for msg in self.messages:
            if msg['from'] == phone.phone_number:
                print(msg)


# Each message should be saved as a dictionary with the following keys:
# to : the number of another Phone object
# from : your phone number (also a Phone object)
# content

# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

# Test your code !!!

phone_1 = Phone(42006969)
phone_2 = Phone(40028922)

phone_1.call(phone_2)
phone_1.show_call_history()

phone_1.send_message("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", phone_2)
phone_1.show_outgoing_messages()
phone_2.show_incoming_messages()
phone_2.show_messages_from(phone_1)