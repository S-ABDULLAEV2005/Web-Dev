import math

a, b = map(int, input().split())

found_perfect_square = False

for i in range(a, b + 1):
    if math.isqrt(i) ** 2 == i:
        print(i, end=" ")
        found_perfect_square = True