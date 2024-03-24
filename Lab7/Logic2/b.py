def no_teen_sum(a, b, c):
    def fix_teen(n):
        return 0 if (n >= 13 and n <= 19) and n not in [15, 16] else n

    return fix_teen(a) + fix_teen(b) + fix_teen(c)
