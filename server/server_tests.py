import requests

e = requests.get(url="http://127.0.0.1:8000/fetch_one", params={"id":"61a4009e0bd44694fb53626e"})

print(e.text)