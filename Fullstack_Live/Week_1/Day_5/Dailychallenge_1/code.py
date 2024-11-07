def exercise_1():
    # Write a program that accepts a comma separated sequence of words as input and 
    # prints the words in a comma-separated sequence after sorting them alphabetically.
    # Use List Comprehension
    # Example:
    # 
    # Suppose the following input is supplied to the program: without,hello,bag,world
    # Then, the output should be: bag,hello,without,world

    def sorti(word):
        listing = sorted([palavra.strip() for palavra in word.split(',')])
        listing = ','.join(listing)
        return listing

    word = input("Write words ")
    print(sorti(word))

def exercise_2():
    # Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
    # Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
    # Examples
    # 
    # longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"
    # 
    # longest_word("A thing of beauty is a joy forever.") ➞ "forever."
    # 
    # longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

    sentence = input("WRITE THY BIGGEST SENTENCE! ")
    
    def word_finder(sentence):
        xpliter = [word for word in sentence.split(" ")]
        longestest_wordestest = ''
        for word in xpliter:
            if len(word) > len(longestest_wordestest):
                longestest_wordestest = word
        return longestest_wordestest

    print(word_finder(sentence))

exercise_1()
exercise_2()
