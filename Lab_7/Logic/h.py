def squirrel_play(temperature, is_summer):
    upper_limit = 90 if not is_summer else 100
    return 60 <= temperature <= upper_limit
