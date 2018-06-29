my_dictionary = {
    "Matt" : "Fisher",
    "Travis" : "Ramos",
    "Eric" : "Ridenour",
    0: [0, 1, 2, 3, 4],
    "Veronica": "Lino"
}

# result = my_dictionary["Matt"]
# result = my_dictionary["Matt1"]
# result = my_dictionary.get("Matt1")
# result = "Matt" in my_dictionary
# print(result)

# setting values

my_dictionary["Matt"] = "Smith"
# print(my_dictionary)

# keys = my_dictionary.keys()
# print(keys)

# values = my_dictionary.values()
# print(values)

# print(my_dictionary)

# del my_dictionary["Veronica"]

# print(my_dictionary)

# for key, value in my_dictionary.items():
#     print(key)
#     print(value)

# contact = [
#     {
#         'first_name': 'Phillip',
#         'last_name': 'Guo',
#         'email': 'phillip.guo@gmail.com',
#         'phone':{
#             'work':'837-494-3948',
#             'cell': '234-897-4933'
#         } 
#     },
#     {
#         'first_name': 'Mark',
#         'last_name': 'Guzdial',
#         'email': 'mark.guzdial@gatech.edu',
#         'phone':{
#             'work':'484-569-3466',
#             'cell': '493-485-9845'
#         }
#     }

# ]

# print(contact[0]["email"])
# print(contact[0]["phone"]["cell"])
# print(contact[1]["email"])
# print(contact[1]["phone"]["work"])

#inserting new key value
my_dictionary["newKeyName"] = "hello world"
print(my_dictionary)

# contact[
#     {},
#     {}
# ]


    