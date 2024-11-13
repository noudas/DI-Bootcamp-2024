# The goal of the exercise is to create a class that will help you analyze a specific text. 
# A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.
# 
import re
import requests
# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
# 
# Create a class called Text that takes a string as an argument and store the text in a attribute.
class Text:
    def __init__(self,string):
        self.string = string

    def __str__(self):
        return self.string
        
# Hint: You need to manually copy-paste the text, straight into the code
# 
# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
    def frequency_of_a_word(self,word):
            count = len([words.lower() for words in self.string if word == words])
            if count == 0:
                return None
            else:
                print(f"The word: '{word}' appears {count} times")
                return self
            
# a method that returns the most common word in the text.
    def most_commom_word(self):
        words = self.string.lower().split()
        words_dict = {i:words.count(i) for i in words}
        max_count = max(words_dict.values())

        most_common = [word for word, count in words_dict.items() if count == max_count]
        return f"The word(s) that appear(s) the most are '{', '.join(most_common)}' with {max_count} occurrences."

# a method that returns a list of all the unique words in the text.
    def unique_words(self):
        words_list = sorted(list(set(self.string.lower().split())))
        return f"Theses are the unique words: {words_list}"
    
    # Part II
    # Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.
    # 
    # Implement a classmethod that returns a Text instance but with a text file:
    # 
    #     >>> Text.from_file('the_stranger.txt')
    # Hint: You need to open and read the text from the text file.
    # 
    # 
    # Now, use the provided the_stranger.txt file and try using the class you created above.

    @classmethod
    def open_text_file(cls,file_name):
         with open(file_name,"r",encoding="utf-8") as f:
              arquivo = f.read()
              return cls(arquivo)

# Bonus:
# Create a class called TextModification that inherits from Text.
class TextModification(Text):
    def __init__(self, string):
         super().__init__(string)
    
    # Implement the following methods:

    # a method that returns the text without any punctuation.
    def no_punctuation(self):
        self.string = re.sub(r'[^\w\s]', '', self.string)
        return self
    
    # a method that returns the text without any english stop-words (check out what this is !!).
    def no_stop_words(self):
        stopwords_list = requests.get("https://gist.githubusercontent.com/rg089/35e00abf8941d72d419224cfd5b5925d/raw/12d899b70156fd0041fa9778d657330b024b959c/stopwords.txt").content
        stopwords = set(stopwords_list.decode().splitlines()) 
        words = self.string.split()
        self.string = ' '.join([word for word in words if word.lower() not in stopwords])
        return self
        


    # a method that returns the text without any special characters.
    def no_special_characters(self):
        self.string = re.sub(r'[@#$*&87]', '', self.string)
        return self
         
    # Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.
    # 
    # Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)
     

def tests():
    text = Text('A good book would sometimes cost as much as a good house.')
    text.frequency_of_a_word('a')
    print(text.most_commom_word())
    print(text.unique_words())         

    text_2 = Text.open_text_file("the_stranger.txt")
    print(text_2.unique_words())  

    text_3 = TextModification("The quick!!!!!!!!!!!!!#$%###$#$... @brown @...fox ...ju@mped@ over ...the lazy d$@#o@g near the ri^&*()ver....")

    text_3.no_punctuation()
    print(text_3)

    text_3.no_special_characters()
    print(text_3)

    text_3.no_stop_words()
    print(text_3)


tests()