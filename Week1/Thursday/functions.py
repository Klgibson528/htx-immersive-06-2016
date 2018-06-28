pi = 3.14
# def printName(myName):
#     print("My name is Veronica {}".format(myName))

# printName("Veronica")

# for index in range(0,5):
#     printName()

# circ = 0
# def circumfrence(radius):
#     circ = 2 * pi * radius
#     return circ

# result = circumfrence(2)

# print(result * 45)

# def f(x):
#     return x
# def g(x):
#   return x + 1
# for x in range(-3, 5):
#   print("f({x})={y} \t g({x})={z}".
#   format(
#           x=x, y=f(x), z=g(x)
#        ))

printed_hello = False
def display_hello():
  print('Hello')
  printed_hello = True
  print("inside Function: " + str(printed_hello))

print("outside function: " + str(printed_hello))
display_hello()
print("outside function - after function call: " + str(printed_hello))