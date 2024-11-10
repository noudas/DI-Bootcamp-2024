def exercise_1():
    # Draw the following pattern using for loops:
    #   *
    #  ***
    # *****
    def loop_1():
        loop = 3
        count = 0
        for i in range(1, loop+1):
            spaces = ' ' * (loop - i)
            print(spaces + '*' * (i+count))
            count += 1
    loop_1()
    # Draw the following pattern using for loops:
    #     *
    #    **
    #   ***
    #  ****
    # *****
    print()
    def loop_2():
        loop = 5
        for i in range(1,loop+1):
            spaces = ' ' * (loop - i)
            print(spaces + '*'*i)
            
    loop_2()
    print()
    # 
    # Draw the following pattern using for loops:
    # *
    # **
    # ***
    # ****
    # *****
    # *****
    #  ****
    #   ***
    #    **
    #     *


    def loop_3():
        loop = 5
        for i in range(1,loop+1):
            spaces = ' ' * - (loop-1)
            print(spaces + ('*'*i))

        for i in range(loop -1,0,-1):
            spaces = ' ' * (loop - i)
            print(spaces + ('*'*i))
    loop_3()

def exercise_2():
    # Analyse this code before executing it. 
    # Write some commnts next to each line. 
    # Write the value of each variable and their changes, and add the final output. 
    # Try to understand the purpose of this program.

    # Colocar em ordem crescnete os valores
    my_list = [2, 24, 12, 354, 233] # Cria uma lista
    for i in range(len(my_list) - 1): # Vai pegar o tamanho da lista, itera e subtrair ela por -1, no caso 5 - 1
        minimum = i # Cria uma variavel com o valor minumo sendo i, no caso 0,1,2,3,4
        for j in range( i + 1, len(my_list)): # Itera um valor j pelo tamano do i + 1 ate o tamanho da lista, 0+1,5
            if(my_list[j] < my_list[minimum]): # se a lista na posicao j e menor que minha lista na posicao minima
                minimum = j #os valores sao invertidos
                if(minimum != i): # se o minumo e diferente do valor de i
                    my_list[i], my_list[minimum] = my_list[minimum], my_list[i] # realoca os valores um com o outro alterando as posicoes
    print(my_list)

exercise_1()
exercise_2()