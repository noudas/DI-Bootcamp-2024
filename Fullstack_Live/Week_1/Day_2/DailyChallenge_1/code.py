def exercise_1():
    # Ask the user for a number and a length.
    # Create a program that prints a list of multiples of the number until the list length reaches length.
    # Examples
    # 
    # number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
    # number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
    # number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

    number = int(input("Write a number: "))
    length = int(input("Write a length: "))
    sum = 0

    listnum = []
    for i in range(length):
        sum += number
        listnum.append(sum)
    print(f"number: {number} - length {length} ➞ {listnum}")




def exercise_2():
    # Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

    # Examples
    # user's word : "ppoeemm" ➞ "poem"
    # user's word : "wiiiinnnnd" ➞ "wind"
    # user's word : "ttiiitllleeee" ➞ "title"
    # user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
    texty = input("Write a word that has a lot of letters, like this 'ppoeemm' ")
    lista = []
    for i in texty:
        if i not in lista:
            lista.append(i)
    lista = ''.join(lista)
    print(f"user's word : {texty} ➞  {lista}")

exercise_1()
exercise_2()