import matplotlib.pyplot as plot

def f(x):
    return x * x


xs = list(range(-3, 4))
ys = []

for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()

# from turtle import *
# import matplotlib
# import matplotlib.pyplot as plot

# def turtocta():
#     for i in range(8):
#         forward(100)
#         right(45)

#     plot.show()

# if __name__ == "__main__":
#     turtocta()