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
    pass

def exercise_3():
    # Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
    # For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:
    # ******************
    # * Hello          *
    # * World          *
    # * in             *
    # * reallylongword *
    # * a              *
    # * frame          *
    # ******************
    pass

def exercise_4():
    # Ele vai colocar os valor na lista em ordem crescente
    # Analyse this code before executing it. What is the purpose of this code?
    def insertion_sort(alist):
       # para cada indice dentro do tamanhao 1 ate o tamanho da lista
       for index in range(1,len(alist)):
         # percorrer a lista

        # valor vai ser o valor da lista na posicao do index
         currentvalue = alist[index]
        # posicao do valor
         position = index
        
        # enquanto o indiice for maior q 0 e o ultimo valor da lista for maior que o currentvalue
         while position > 0 and alist[position-1] > currentvalue:
             # aletrar a posicao do valor com a do ultimo valor
             alist[position]=alist[position-1]

             #voltar uma posicao
             position = position-1
    
        # colocar o valor na posicao atual
         alist[position]=currentvalue
    
    alist = [54,26,93,17,77,31,44,55,20]
    insertion_sort(alist)
    print(alist)

#exercise_1()
#exercise_2()
#exercise_4()