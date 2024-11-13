import googletrans

# Consider this list

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}

# You have to recreate the result using a translator module. Take a look at the googletrans module

language_verify = googletrans.Translator.detect(french_words)
print(language_verify)