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

# 

# import codecs

# print(codecs.encode("lbh zhfg hayrnea jung lbh unir yrnearq", "rot-13"))

# 6
# string6 = input("Enter a string. ")
# string6 = string6.lower()
# empty_string6 = ""
# for char in string6:
#     if char == "a":
#         string6 = string6.replace("a", "n")
#         empty_string6 = empty_string6 + "n"
#     elif char == "b":
#         string6 = string6.replace("b", "o")
#         empty_string6 = empty_string6 + "o"
#     elif char == "c":
#         string6 = string6.replace("c", "p")
#         empty_string6 = empty_string6 + "p"
#     elif char == "d":
#         string6 = string6.replace("d", "q")
#         empty_string6 = empty_string6 + "q"
#     elif char == "e":
#         string6 = string6.replace("e", "r")
#         empty_string6 = empty_string6 + "r"
#     elif char == "f":
#         string6 = string6.replace("f", "s")
#         empty_string6 = empty_string6 + "s"
#     elif char == "g":
#         string6 = string6.replace("g", "t")
#         empty_string6 = empty_string6 + "t"
#     elif char == "h":
#         string6 = string6.replace("h", "u")
#         empty_string6 = empty_string6 + "u"
#     elif char == "i":
#         string6 = string6.replace("i", "v")
#         empty_string6 = empty_string6 + "v"
#     elif char == "j":
#         string6 = string6.replace("j", "w")
#         empty_string6 = empty_string6 + "w"
#     elif char == "k":
#         string6 = string6.replace("k", "x")
#         empty_string6 = empty_string6 + "x"
#     elif char == "l":
#         string6 = string6.replace("l", "y")
#         empty_string6 = empty_string6 + "y"
#     elif char == "m":
#         string6 = string6.replace("m", "z")
#         empty_string6 = empty_string6 + "z"
#     elif char == "n":
#         string6 = string6.replace("n", "a")
#         empty_string6 = empty_string6 + "a"
#     elif char == "o":
#         string6 = string6.replace("o", "b")
#         empty_string6 = empty_string6 + "b"
#     elif char == "p":
#         string6 = string6.replace("p", "c")
#         empty_string6 = empty_string6 + "c"
#     elif char == "q":
#         string6 = string6.replace("q", "d")
#         empty_string6 = empty_string6 + "d"
#     elif char == "r":
#         string6 = string6.replace("r", "e")
#         empty_string6 = empty_string6 + "e"
#     elif char == "s":
#         string6 = string6.replace("s", "f")
#         empty_string6 = empty_string6 + "f"
#     elif char == "t":
#         string6 = string6.replace("t", "g")
#         empty_string6 = empty_string6 + "g"
#     elif char == "u":
#         string6 = string6.replace("u", "h")
#         empty_string6 = empty_string6 + "h"
#     elif char == "v":
#         string6 = string6.replace("v", "i")
#         empty_string6 = empty_string6 + "i"
#     elif char == "w":
#         string6 = string6.replace("w", "j")
#         empty_string6 = empty_string6 + "j"
#     elif char == "x":
#         string6 = string6.replace("x", "k")
#         empty_string6 = empty_string6 + "k"
#     elif char == "y":
#         string6 = string6.replace("y", "l")
#         empty_string6 = empty_string6 + "l"
#     elif char == "z":
#         string6 = string6.replace("z", "m")
#         empty_string6 = empty_string6 + "m"
#     elif char == " ":
#         empty_string6 = empty_string6 + " "
# print(empty_string6)

# 

# a = [[1,2], [3,4], [9,10]]
# b = [[5,6], [7,8], [11,12]]

# c = [sum(a + b) for a, b in zip(a, b)]


# print(c)

# note my house looks nothing like this

import turtle
import tkinter as tk

t = turtle.Turtle()

turtle.bgcolor("DeepSkyBlue")

def outline():
    t.penup()
    t.goto(100, 100)
    t.pendown()
    t.color("grey")
    t.begin_fill()
    t.right(90)
    t.forward(250)
    t.right(90)
    t.forward(250)
    t.right(90)
    t.forward(250)
    t.right(90)
    t.forward(250)
    t.end_fill()

def roof():
    t.color("brown")
    t.begin_fill()
    t.forward(30)
    t.left(145)
    t.forward(200)
    t.left(70)
    t.forward(200)
    t.goto(100, 100)
    t.end_fill()

def grass():
    t.penup()
    t.goto(-500, -150)
    t.pendown()
    t.color("green")
    t.setheading(0)
    t.begin_fill()
    t.forward(950)
    t.right(90)
    t.forward(300)
    t.right(90)
    t.forward(950)
    t.right(90)
    t.forward(300)
    t.end_fill()

def sun():
    t.penup()
    t.goto(-250, 250)
    t.color("yellow")
    t.begin_fill()
    t.circle(30)
    t.end_fill()


def door():
    t.penup()
    t.goto(20, -150)
    t.color("red")
    t.begin_fill()
    t.setheading(0)
    t.forward(50)
    t.left(90)
    t.forward(100)
    t.left(90)
    t.forward(50)
    t.left(90)
    t.forward(100)
    t.end_fill()

def window():
    t.penup()
    t.goto(-50, 0)
    t.pendown()
    t.pensize(3)
    t.color("black")
    for x in range(4):
        t.forward(30)
        t.right(90)
        t.forward(30)
        t.right(90)
        t.forward(30)
        t.right(90)
        t.forward(30)


outline()
roof()
grass()
sun()
door()
window()


tk.mainloop()
