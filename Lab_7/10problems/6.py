n = int(input())
    
students = []
    
for _ in range(n):
        name = input()
        score = float(input())
        students.append([name, score])
    
students.sort(key=lambda x: (x[1], x[0]))
    
second_lowest_grade = sorted(set(score for name, score in students))[1]
    
for name, score in students:
        if score == second_lowest_grade:
            print(name)