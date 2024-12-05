import random


def devinette():
    number = random.random().floor()
    
    print(number)

devinette()

# def generate_random_filename(extension):
#     """Generate a random filename."""
#     random_string = ''.join(random.choices(string.ascii_letters + string.digits, k=12))
#     return f"{random_string}.{extension}"