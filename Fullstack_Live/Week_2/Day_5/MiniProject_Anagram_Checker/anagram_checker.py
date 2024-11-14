import json

# Create a new file called anagram_checker.py which contains a class called AnagramChecker.
# 
# The class should have the following methods:
class AnagramChecker:
    # __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
    def __init__(self):
        with open("list_words.txt" , "r", encoding="utf-8") as f:
            self.list = set(word.strip() for word in f)
    
# is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
    def is_valid_word(self,word):
        if isinstance(word,str) and word.isalpha():
            return True
        else:
            raise TypeError(f"{word} is not a word!")

# Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
    def only_one_word(self, word):
        if ' ' in word.strip():
            raise ValueError("Only one word is allowed.")
        return True

# Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
# get_anagrams(word) – should find all anagrams for the given word. 
    def get_anagrams(self,word):
        word = word.strip()
        if self.is_valid_word(word) and self.only_one_word(word):
            word = word.lower()
            list_anagram = [ana for ana in self.list if len(ana) == len(word) and sorted(ana.lower()) == sorted(word) and ana != word] 
            return list_anagram

# (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)
# 
# 
# Note: None of the methods in the class should print anything.
# 
# Now create another Python file, called anagrams.py. 

# test = AnagramChecker()
# test.get_anagrams("Meat")