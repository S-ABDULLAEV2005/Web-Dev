def close_far(a, b, c):
    def is_close(x, y):
        return abs(x - y) <= 1
    
    if is_close(b, a) and is_close(c, a):
        return False
    if is_close(b, a) and is_close(c, b):
        return False
    if is_close(c, a) and is_close(b, c):
        return False
    
    return is_close(b, a) and abs(c - a) >= 2 or \
           is_close(c, a) and abs(b - a) >= 2
