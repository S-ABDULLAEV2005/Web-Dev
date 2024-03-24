A = set(map(int, input().split()))
    
n = int(input())
    
is_superset = True
    
for _ in range(n):
        other_set = set(map(int, input().split()))
        if not A.issuperset(other_set):
            is_superset = False
            break
    
print(is_superset)