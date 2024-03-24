N = int(input())
array = list(map(int, input().split()))

count_positive = sum(1 for num in array if num > 0)
print(count_positive)

