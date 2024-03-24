n = int(input())
    
student_records = {}
    
for _ in range(n):
        name, *marks = input().split()
        marks = list(map(float, marks))
        student_records[name] = marks
    
query_name = input()
    
avg_marks = sum(student_records[query_name]) / len(student_records[query_name])
    
print("{:.2f}".format(avg_marks))