n = int(input())

divider = 2

while divider * divider <= n:
    if n % divider == 0:
        print(divider)
        break
    divider += 1
else:
    print(n)
