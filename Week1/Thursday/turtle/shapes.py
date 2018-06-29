from turtle import *

# Equilateral Triangle

def eq_triangle():
    begin_fill()
    color("PeachPuff")
    for i in range(3):
        forward(100)
        left(120)
    end_fill()

# Square

def square():
    for i in range(4):
        color("SlateBlue")
        forward(100)
        right(90)


# Pentagon

def pentagon():
    begin_fill()
    color("IndianRed")
    for i in range(5):
        begin_fill()
        color("IndianRed")
        left(72)
        forward(100)
    end_fill()

# Hexagon

def hexagon():
    for i in range(6):
        pensize(3)
        left(60)
        forward(100)

# Octagon

def octagon():
    for i in range(8):
        pensize(6)
        left(45)
        forward(100)

# Star

def star():
    for i in range(5):
        color("SpringGreen")
        right(144)
        forward(100)
        left(72)
        forward(100)

# Circle

def cir():
    begin_fill()
    color("aquamarine")
    circle(75)
    end_fill()
    mainloop()