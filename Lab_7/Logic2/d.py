def lone_sum(a, b, c):
    if a != b and a != c:
        if b != c:
            return a + b + c
        else:
            return a
    elif b != c:
        return b + c
    elif a != c:
        return a + c
    else:
        return 0
