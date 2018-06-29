from turtle import *
import shapes

def move_pen1():
    up()
    backward(25)
    left(10)
    down()

def move_pen2():
    up()
    forward(25)
    right(10)
    down()

shapes.eq_triangle()
move_pen1()
shapes.square()
move_pen2()
shapes.pentagon()
move_pen1()
shapes.hexagon()
move_pen2()
shapes.octagon()
move_pen1()
shapes.star()
move_pen2()
shapes.cir()