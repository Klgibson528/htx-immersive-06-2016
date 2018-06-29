# Exericse 1

phonebook_dict = {
  'Alice': '703-493-1834',
  'Bob': '857-384-1234',
  'Elizabeth': '484-584-2923'
}
#1
print(phonebook_dict['Elizabeth'])
#2
phonebook_dict['Kareem'] = '938-489-1234'
#3
del phonebook_dict['Alice']
#4
phonebook_dict['Bob'] = '968-345-2345'
#5
for key, value in phonebook_dict.items():
    print(key, ":", value)

# Exercise 2

ramit = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
    {
      'name': 'Jasmine',
      'email': 'jasmine@yahoo.com',
      'interests': ['photography', 'tennis']
    },
    {
      'name': 'Jan',
      'email': 'jan@hotmail.com',
      'interests': ['movies', 'tv']
    }
  ]
}
#1
print(ramit.get('email'))
#2
print(ramit['interests'][0])
#3
print(ramit['friends'][0]['email'])
#4
print(ramit['friends'][1]['interests'][1])

# Letter Summary

word = input("Pick a word: ")
letter_dict = {
      
}

for char in word:
    letter_dict[char] = word.count(char)
print(letter_dict)

# Word Summary

phrase = input("Pick a phrase: ")
word_dict = {
      
}
word_histogram = phrase.split()

for word in word_histogram:
    word_dict[word] = phrase.count(word)
print(word_dict)

# Bonus

from operator import itemgetter

top_3 = sorted(letter_dict, key=letter_dict.__getitem__, reverse=True)
print(top_3[0:3])