# class MyClass:
#       def SayHello():
#         print("Hello there!")

# MyClass.SayHello()

# class Person:
#   def greet (self):
#     print("Hello")

# me = Person()
# me.greet()

# matt = Person()
# matt.greet()

# class MyClass:
#     Greeting = ""
#     def __init__(self):
#       print("Upon Initialization: Hello!")
#     def instance_method(self): 
#       print("Hello {0}".format(self.Greeting))
#     def class_method():
#       print("Hello {0}".format(self.Greeting))

# digtalCrafts = MyClass()
# MyClass.Greeting = "Matt"
# digtalCrafts.instance_method()

# flatIron = MyClass()
# flatIron.instance_method()

# utAustin = MyClass()
# utAustin.instance_method()

# MyClass.Greeting = "Travis"
# digtalCrafts.instance_method()
# flatIron.instance_method()
# utAustin.instance_method()



# test.class_method()

# class Person:
  #global variable
#   GlobalPerson = "Zelda"
#   def __init__ (self, name):
#     self.name = name
#     print(name)
#   def greet(self, friend):
#     print("Hello {} and {} and {}".format(self.name, friend, self.GlobalPerson))

# matt = Person("Fisher")
# matt.greet("Travis")

# person1 = Person("Hussein")
# person1.greet("Skyler")

# Person.GlobalPerson = "Eric"
# matt.greet("Travis")
# person1.greet("Skyler")

class Person:
  def __init__ (self, name):
    self.name = name
    self.count = 0
  def greet (self):
    self._greet()
  def _greet (self):
    self.count += 1
    if self.count > 1:
      print("Stop being so nice")
      self.__reset_count()
    else:
      print("Hello", self.name)
  def __reset_count(self):
    self.count = 0

matt = Person("Fisher")
matt.greet()
matt.greet()
matt.greet()

travis = Person("Ramos")
travis.greet()