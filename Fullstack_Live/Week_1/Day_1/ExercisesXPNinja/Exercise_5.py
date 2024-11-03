a = ''
b = ''
while 'a' not in a:
    a = input("Write a word withdout the letter A: ").lower()
    if 'a' not in a and len(a) > len(b):
        b = a
    print(f"Longest word withdout 'A' is {b} with {len(b)} caracters")
print("You typed A, you lost ;_;")