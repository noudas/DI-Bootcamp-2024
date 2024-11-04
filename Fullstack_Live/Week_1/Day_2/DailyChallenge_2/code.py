from datetime import datetime

aniversario = input("Enter your birthdate (DD/MM/YYYY): ")

diadoaniversario = datetime.strptime(aniversario, "%d/%m/%Y")
diadehoje = datetime.now()


idade = diadehoje.year - diadoaniversario.year - ((diadehoje.month, diadehoje.day) < (diadoaniversario.month, diadoaniversario.day))

velas = idade % 10

def bissexto(ano):
    return ano % 4 == 0

cake_top = " " * (7 - velas // 2) + "i" * velas + " " * (7 - velas // 2)
bolo = f"""
       ___{cake_top}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""


if bissexto(diadoaniversario.year):
    print("It's a leap year birthday! You get two cakes!")
    print(bolo * 2)
else:
    print(bolo)