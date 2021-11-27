from fastapi import FastAPI
import json
import random
from pymongo import MongoClient

client = MongoClient('')
db = client['cluster0']
collection = db['faseless']
posts = collection["posts"]
app = FastAPI()

@app.get("/")
def home():
    return "Faseless's server. Please navigate to main site."

@app.get("/posting")
def posting(title, text, password, image, topic):

    if len(title) > 101:
        return "length_error title"

    if len(text) > 2001:
        return "length_error text"

    if len(password) > 251:
        return "length_error password"

    if len(image) > 201:
        return "length_error title"

    if topic == "general" or topic == "memes" or topic == "games" or topic == "programming" or topic == "art" or topic == "math/science":
        pass
    else:
        return "invalid topic"

    with open("posts.json") as f:
        data = json.load(f)
    
    with open("badwords.json") as g:
        badwords = json.load(g)

    for x in badwords["words"]:
        if x in title:
            return "bad word"
        elif x in text:
            return "bad word"

    post_id = random.randint(10000000, 99999999)

    for topics in data:
        while(post_id in data[topics]):
            post_id = random.randint(10000000, 99999999)

    data[topic][post_id] = {"title" : title, "text" : text, "password" : password, "image" : image}
    with open("posts.json", 'w') as json_file:
        json.dump(data, json_file)
    return "success"

@app.get("/replying")
def replying(post_id, text):
    with open("replys.json") as f:
        data = json.load(f)

    data[post_id].append(text)

    with open("replys.json", 'w') as json_file:
        json.dump(data, json_file)

@app.get("/fetch_posts")
def fetch_posts():
    with open("posts.json") as f:
        data = json.load(f)
    return data

@app.get("/delete_posts")
def delete_posts(post_id, topic, password):
    with open("posts.json") as f:
        data = json.load(f)
    if data[topic][post_id]["password"] == password:
        del data[topic][post_id]

    else:
        return "failed"

    with open("posts.json", 'w') as json_file:
        json.dump(data, json_file)

    return "success"
