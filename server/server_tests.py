import requests

e = requests.get(url="http://127.0.0.1:8000/delete_posts", params={"post_id":"82060895", "password": "hello", "topic": "general"})

print(e.text)