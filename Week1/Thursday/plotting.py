# import matplotlib.pyplot as plot

# def f(x):
#     return x * x


# xs = list(range(-3, 4))
# ys = []

# for x in xs:
#     ys.append(f(x))

# plot.plot(xs, ys)
# plot.show()

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


# def isPrime(n):
#     if n < 2: return "Neither prime, nor composite"
#     for i in range(2, int(n**0.5) + 1):
#         if n % i == 0:
#             return False
#     return True

# returns the nth prime number
# def nthPrime(n):
#     numberOfPrimes = 0
#     prime = 1

#     while numberOfPrimes < n:
#         prime += 1
#         if isPrime(prime):
#             numberOfPrimes += 1
#     return prime

# print(nthPrime(10001))

#Project Euler Problem 3
n = int(input('The largest prime factor of')) 

p = 2
while (p*p <= n):      
  if (n % p == 0): 
    n //= p
  else: 
    p += 2 if p>2 else 1   # after 2, consider only odd p

print(n)