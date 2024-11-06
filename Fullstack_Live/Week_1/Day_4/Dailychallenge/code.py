# Given a “Matrix” string:
# 
#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!

# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, 
# selecting only the alpha characters and connecting them. 
# Then he replaces every group of symbols between two alpha characters by a space.
# 
# Using his technique, try to decode this matrix.
# 
# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message
# 
# Hint (if needed) : Look at the remote learning “Matrix” videos

list_message = []
count = 0
awnser = ''

matrix_string = '7iiTsxh%?i #sM $a #t%^r!'
matrix_list = [letter for letter in matrix_string]

matrix = [matrix_list[i:i+3] for i in range(0, len(matrix_list), 3)]

def is_alpha_or_not(letter):
    return not letter.isalpha()

for column in range(3):
    for row in matrix:
        if is_alpha_or_not(row[column]) == False:
            list_message.append(row[column])
        if is_alpha_or_not(row[column]):
            if count == 2:
                list_message.append(' ')
                count = 0
            else:
                count += 1


awnser = ''.join(list_message).strip()
print(awnser)
