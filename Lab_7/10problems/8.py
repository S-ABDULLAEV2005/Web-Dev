from itertools import product

k, m = map(int, input().split())
    
lists = []
for _ in range(k):
        lists.append(list(map(int, input().split()))[1:])
    
all_combinations = product(*lists)
    
max_value = max(sum(x ** 2 for x in combination) % m for combination in all_combinations)
    
print(max_value)