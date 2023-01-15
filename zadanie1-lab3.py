import base64

message = "testuje dzialanie" #tu pomiedzy nawiasy " " wpisujemy wiadomosc do zaszyfrowania
message_bytes = message.encode('ascii')
base64_bytes = base64.b64encode(message_bytes)
base64_message = base64_bytes.decode('ascii')

print(base64_message)


import base64

base64_message = ''#tu pomiedzy nawiasy ' ' wpisujemy zaszyfrowana wiadomosc do odkodowania
base64_bytes = base64_message.encode('ascii')
message_bytes = base64.b64decode(base64_bytes)
message = message_bytes.decode('ascii')

print(message)