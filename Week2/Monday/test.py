# hello_count = 0

# def say_hello():
#     global hello_count
#     #hello_count = 0
#     print("hello")
#     hello_count += 1

# print("hello count %d" % hello_count)
# say_hello()
# say_hello()
# print("hello count %d" % hello_count)


# class Person:
#   def greet(self):
#     print("Hello")

#   @classmethod  
#   def greet_global(personName):
#     print("hello %" % personName)

# max = Person
# max.greet()
# Person.greet_global("Matt")

# class MyClass:
#     def __init__(self):
#         pass
#     def SayHello():
#         print("Hello there!")

# MyClass.SayHello()

# class MyClass:
#     def __init__(self):
#       print("Upon Initialization: Hello!")
#     def instance_method(self): 
#       print("hello instance")
#     def class_method():
#       print("Hello class method!")

# test = MyClass()
# test.instance_method()
# MyClass.class_method()
# test.class_method()   #error, 
# #not an instance method

# class MyClass:
#     Greeting = ""
#     def SayHello(self):
#             print("Hello {0}".format(self.Greeting))

# MyClass.Greeting = "Zelda"
# # MyClass.SayHello()
# test = MyClass()
# test.SayHello()
# test2 = MyClass()
# test.SayHello()

# Exercise 1

class Person:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
        self.unique_greeted = []

    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
        self.greeting_count += 1
        self.unique_greeted.append(other_person.name)

    def print_contact_info(self):
        print(f"{self.name}'s email: {self.email}, {self.name}'s phone number: {self.phone}")

    def add_friend(self, friend):
        self.friends.append(friend.name)

    def num_of_friends(self):
        print(len(self.friends))

    def __str__(self):
        return 'Person: Name - {}, Email - {}, Phone - {}'.format(self.name, self.email, self.phone)

    def num_unique_people_greeted(self):
        uniques = set(self.unique_greeted)
        uniques_greeted = list(uniques)
        print(len(uniques_greeted))

# 1
sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')

# 2

jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')

# 3

sonny.greet(jordan)
sonny.greet(jordan)
sonny.greet(jordan)

# 4
jordan.greet(sonny)
bill = Person('Bill', 'bob@yahoo.com', '236-897-9001')
jordan.greet(bill)

# 5
#print(f"{sonny.name}: Email - {sonny.email}; Phone - {sonny.phone}")
sonny.print_contact_info()

# 6
#print(f"{jordan.name}: Email - {jordan.email}; Phone - {jordan.phone}")
jordan.print_contact_info()

# Add a friend
sonny.add_friend(jordan)
jordan.add_friend(sonny)
jordan.add_friend(bill)
#print(sonny.friends)
#print(jordan.friends)

# Count number of friends
sonny.num_of_friends()
jordan.num_of_friends()

# Count number of greetings
print(sonny.greeting_count)
print(jordan.greeting_count)

# Convert object to string
print(sonny)
print(jordan)

# Number of unique people greeted
sonny.num_unique_people_greeted()
jordan.num_unique_people_greeted()

# Exercise 2

class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
    
    def print_info(self):
        print(f"{self.year} {self.make} {self.model}")

car = Vehicle("Nissan", "Leaf", "2015")
car.print_info()