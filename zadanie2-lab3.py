import random
import string

znaki = string.ascii_letters + string.digits + string.punctuation
haslo = ''.join(random.choice(znaki) for i in range(8))
print("Losowe haslo:", haslo)