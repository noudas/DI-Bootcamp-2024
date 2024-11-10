# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
# 
# 
# Hint
# To do this project, you basically need to create four functions:
# 
# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.
# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.
# 
# 
# 
# Tips : Consider the following:
# What functionality will need to accur every turn to make this program work?
# After contemplating the question above, think about splitting your code into smaller pieces (functions).
# Remember to follow the single responsibility principle! each function should do one thing and do it well!


def welcome():
    print("""
▀█▀ █ █▀▀   ▀█▀ ▄▀█ █▀▀   ▀█▀ █▀█ █▀▀
░█░ █ █▄▄   ░█░ █▀█ █▄▄   ░█░ █▄█ ██▄
""")
    
def display_board(board): # Desenhar o Tabuleiro
    print("ULTIMATE TIC TAC TOE!") # Imprimir a frase
    print("******************") # Imprimir a barreira de cima
    for row in board: # Pra cada linha dentro do meu tabuleiro 
        print('*  ' + ' | '.join(row) + '   *') # Imprime o tabuleiro em 3 linhas
        print('* ___|___|___  *')
    print("******************") # Imprimir a barreira de baixo

def clear_board(): # Limpar o Tabuleiro
    # Criar uma matriz
    # 3 x 3
    # Cada espaço da matriz vai ser uma string vazia
    # Que é retornada depois de chamada
    return [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        ]

def position():
    x = int(input("Type your Row (0,1 or 2): "))
    while x not in range(3):
        x = int(input("Invalid Row, type another your Row: "))
    y = int(input("Type your Column (0,1 or 2): "))
    while y not in range(3): 
        y = int(input("Invalid Column, type another your Column: "))
    return (x, y)

def add_to_board(player, pos, board):
    if board[pos[0]][pos[1]] != ' ':
        print("That position is already taken. Try again.")
        return False
    
    if player == 0:
        board[pos[0]][pos[1]] = 'X'
    else:
        board[pos[0]][pos[1]] = 'O'
    
    return True

def player_input(player, board):
    valid_move = False
    while not valid_move:
        if player == 0:
            print("Where do you wanna put your 'X'? ")
        else:
            print("Where do you wanna put your 'O'? ")
        
        pos = position()
        valid_move = add_to_board(player, pos, board)
        
    return 1 - player

def check_quit():
    quit = input("Type 'q' to quit or press Enter to continue: ").lower()
    if quit == 'q':
        print("Thanks for playing!")
        return True
    return False

def check_win(board,player):
    if player == 0:
        player = 'X'
    else:
        player = 'O'

    for row in board:
        if all(X_or_O == player for X_or_O in row):
            return f"{player}! You win!"
    for column in range(3):
        if all(row[column] == player for row in board):
            return f"{player} wins!"
    

        
    if all(board[i][i] == player for i in range(3)):
        return f"{player}! You win!"
    
    if all(board[i][2 - i] == player for i in range(3)):
        return f"{player}! You win!"
    
    return False

def play_again():
    a = input("Do you wish to play again? (Type 'y' to start or 'q' to quit) ")
    if a == 'y':
        return play()
    else:
        return False

def play():
    player_1_win_counter = 0 # Contador de vitorias do Player 1
    player_2_win_counter = 0 # Contador de vitorias do Player 2
    game_start = False # Incializador do Jogo
    board = clear_board() # Gera um tabuleiro novo
    player = 0 # De quem e o turno
    move_count = 0 # Contador de jogadas

    welcome() # Mensagem de Jogo da Velha
    game = input("Do you wish to play? (Type 'y' to start or 'q' to quit) ").lower() # Pede para usuario escrever y ou q para jogar ou sair
    if game == 'y': # Se a condicao for verdade, ele entra no laço, qualquer outra coisa ele sai
        game_start = True # game_start começa o jogo
    
    while game_start: # Equanto for verdade, faça as coisas abaixo
        display_board(board) # Puxar a matriz do tabuleiro e gerar a parte visual dele
        
        print(f"It's {'X' if player == 0 else 'O'} turn!")
        if check_quit():
            game_start = False
            continue

        player_input(player, board)
        move_count += 1
        
        result = check_win(board,player)
        if result:
            print(result)
            if player == 0:
                player_1_win_counter += 1
            else:
                player_2_win_counter += 1
            play_again()
        elif move_count == 9:
            print("It's a draw!")
            play_again()


        player = 1 - player

    display_board(board)
    print(f"Final Score: Player 1 (X): {player_1_win_counter}, Player 2 (O): {player_2_win_counter}")

play()