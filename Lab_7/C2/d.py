N = int(input())
power_of_two = 1

while power_of_two < N:
    power_of_two *= 2

if power_of_two == N:
    print("YES")
else:
    print("NO")
