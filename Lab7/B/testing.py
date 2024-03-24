test_system_answer = int(input())
student_answer = int(input())

if test_system_answer == 1 and student_answer != 1:
    print("NO")
elif test_system_answer != 1 and student_answer == 1:
    print("NO")
else:
    print("YES")
