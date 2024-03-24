N = int(input())
array = list(map(int, input().split()))

count_greater = sum(1 for i in range(1, N) if array[i] > array[i - 1])
print(count_greater)
