with open("star_wars.txt", "r", encoding="utf-8") as f:

# Read the file line by line
    lines_list = f.readlines()
# Read all the file and return it as a list of strings. Then split each word
    lines_list = [line.replace("\n",'') for line in lines_list]

    for line in lines_list:
        print(line)
        print(list(line))

# Read only the 5th line of the file
    print(lines_list[4])

# Read only the 5 first characters of the file
    f.seek(0)
    print(f.read(5))

# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
    occ = {}
    occ["Darth"] = len([darth for darth in lines_list if darth == "Darth"])
    occ["Luke"] = len([luke for luke in lines_list if luke == "Luke"])
    occ["Lea"] = len([lea for lea in lines_list if lea == "Lea"])
    print(occ)

# Append your first name at the end of the file
    lines_list.append(lines_list[0])
    print(lines_list)

# Append "SkyWalker" next to each first name "Luke"
    for i,luke in enumerate(lines_list):
        if luke == "Luke":
            lines_list[i] = luke + " Skywalker"

    for i,darth in enumerate(lines_list):
        if darth == "Darth":
            lines_list[i] = darth + " FEEL THE POWA OF THE DARK SIDE!"

    print(lines_list)