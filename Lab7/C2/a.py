N = int(input())

for i in range(1, int(N**0.5) + 1):
    square = i**2
    if square <= N:
        print(square)
