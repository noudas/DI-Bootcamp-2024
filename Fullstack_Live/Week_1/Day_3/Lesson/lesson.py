#DIFFERENCES BETWEEN LISTS AND DICTIONARIES

fruits = ['banana', 'apple', 'kiwi']
print(fruits[1]) #with lists we can access the data inside by index

user_info = ['Juliana', 'ju@gmail.com', 34, False, 1.59]

user_info_dict = {'name':'Juliana',
                  'email':'ju@gmail.com',
                  'age':34,
                  'is_male': False,
                  'height': 1.59,
                  'pets':['Caramelo', 'Nico', 'Floffy'],
                  'family':[{'name':'Ariel',
                            'age': 5,
                            'relation': 'son'}],
                    'hobbies': [('yoga', 3), ('tennis', 1), ('chess',3)]
                            }


# print(user_info_dict['name'])
# print(user_info_dict['pets'][1])
# print(user_info_dict['family']['relation'])
# print(user_info_dict['hobbies'][2][-1])

dict_keys = []
for key in user_info_dict.keys():
    dict_keys.append(key)

# for value in user_info_dict.values():
#     print(value)

for key,value in user_info_dict.items():
    print(f'key:{key}')
    print(f'value:{value}')


#changing values 
user_info_dict['email'] = user_info_dict['email'].upper()

#adding a value to the dictionary
# 1st option
user_info_dict['profession'] = 'Web Development teacher'

# 2nd option
user_info_dict.update({'address': 'Ramat Gan'})


#delete a key value pair (an entry) of the dict
del user_info_dict['profession']

#checking if a key or value exists in the dictionary

print('pets' in user_info_dict.keys())
print('Juliana' in user_info_dict.values())


#update() merge dicts or update an entry 

user_info2 = {'origin': 'Brazil',
              'nickname': 'ju05',
              'phone_number':'05555529'}

user_info_dict.update(user_info2)


user_info_dict['family'].append({'name': 'Daniel',
                                 'age': 35,
                                 'relation':'brother'})

print(user_info2)
print(user_info_dict)


#EX1
# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict['class']['student']['marks']['history'])

# user_name = input('Whats your name?')
# user_email = input('your email:')

# user_dict = {
#     'name':user_name,
#     'email':user_email
# }

# print(user_dict)

#for loops in dictionaries