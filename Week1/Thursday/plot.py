import matplotlib
matplotlib.use("Agg")
from matplotlib import pyplot

f_output = []
g_output = []

def f(x):
    return x

def g(x):
    return x + 1

x_list = list(range(-3, 5))

[-3, -2, -1, 0, 1, 2, 3, 4]
for x in x_list:
  f_output.append(f(x))
  g_output.append(g(x))

# f_output = [-3, -2, -1, 0, 1, 2, 3, 4]
# g_output = [-3, -2, -1, 0, 1, 2, 3, 4]
  
pyplot.plot(x_list, f_output, x_list, g_output)
pyplot.savefig('myplot.png')
pyplot.close() # start a new plot