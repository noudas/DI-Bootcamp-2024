list1 = [5, 10, 15, 20, 25, 50, 20]
index = 0

if list1.index(20):
    list1[list1.index(20)] = 200

print(list1)

num = int(input("Type any number: "))

for i in range(0,11):
    print(f"{i} * {num} = {num * i}")
