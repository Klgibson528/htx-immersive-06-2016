#ex 2
import matplotlib.pyplot as plot

def f(x):
    return x + 1

xs = list(range(-3, 4))
ys = []
for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()

#ex 4
# import matplotlib.pyplot as plot

def f(x):
    if x % 2 == 0:
        return (-1)
    if x % 2 != 0:
        return 1


xs = list(range(-5, 5))
ys = []
for x in xs:
    ys.append(f(x))

plot.bar(xs, ys)
plot.show()

# ex 5
import matplotlib.pyplot as plot
import math
from math import sin

def f(x):
    return sin(x)

xs = list(range(-5, 5))
ys = []
for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()

# ex 6
import matplotlib.pyplot as plot
import math
from math import sin
import numpy
from numpy import arange

def f(x):
    return sin(x)

xs = list(arange(-5, 6, 0.1))
ys = []
for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()

# ex 7
import matplotlib.pyplot as plot
import math
from math import sin
import numpy
from numpy import arange

def f(x):
    return (x * 1.8) + 32
    
def g(x):
    return (x - 32) / 1.8

xs = list(arange(-50, 100, 0.1))
ys = []
for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()

# ex 8 
def playAgain():
    x = input("Do you want to play again? ")
    if x == "y".lower():
        return True
    else:
        return False
    
print(playAgain())

# ex 9
def playAgain():
        x = str(input("Do you want to play again? "))
        while(x != "y".lower() and x != "n".lower()):
            x = str(input("Invalid input. Do you want to play again? "))
        if x == "y".lower():
            return True
        if x == "n".lower():
            return False

    
print(playAgain())