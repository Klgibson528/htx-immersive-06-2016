# def myFirstFunction(myName):
#     print("hello " + myName )

# myFirstFunction("Veronica")
# call function
# myFirstFunction()

# for i in range(0,10):
#     myFirstFunction()

# result = 0
# pi = 3.14
# def circumfrence(radius, diameter, number):
#     result = 2 * pi * radius * diameter * number 
#     return result

# a = circumfrence(number=67, radius=2, diameter=3)
# print(a)
# print(a * 4)
# b = circumfrence(23)
# print(b * 2)

printed_hello = False

def display_hello():
  print('Hello')
  printed_hello = True
  print("insde of function: " + str(printed_hello))

print("before function gets called: " + str(printed_hello))

display_hello()

print("after function gets called: " + str(printed_hello))


