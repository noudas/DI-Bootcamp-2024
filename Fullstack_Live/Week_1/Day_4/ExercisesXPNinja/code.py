def exercise_1():
    # Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
    # middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.
    # For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
    # But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.

    def get_full_name(first_name,last_name,middle_name=''):
        if middle_name:
            return f"{first_name} {middle_name} {last_name}".title()
        else:
            return f"{first_name} {last_name}".title()
    
    print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
    print(get_full_name(first_name="bruce", last_name="lee"))


def exercise_2():
    # Write a function that converts English text to morse code and another one that does the opposite.
    # Hint: Check the internet for a translation table, 
    # every letter is separated with a space and every word is separated with a slash /.
    

#exercise_1()