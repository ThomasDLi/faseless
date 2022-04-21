from fastapi import FastAPI
import json
import random
import pymongo
from pymongo import MongoClient
import ssl
from bson import ObjectId

mongo_key = ""

client = MongoClient(mongo_key, ssl_cert_reqs=ssl.CERT_NONE)
db = client['faseless']

collection = db['faseless']
posts = collection["posts"]
app = FastAPI()

with open("badwords.json") as g:
    BADWORDS = json.load(g)

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

    #if topic == "general" or topic == "memes" or topic == "games" or topic == "programming" or topic == "art" or topic == "math/science":
    #    pass
    if topic not in set(["general", "memes", "games", "programming", "art", "math/science"]):
        return "invalid topic"

    #with open("posts.json") as f:
    #    data = json.load(f)

    for x in BADWORDS["words"]:
        if x in title:
            return "bad word"
        elif x in text:
            return "bad word"

    #post_id = random.randint(10000000, 99999999)

    #for topics in data:
    #    while(post_id in data[topics]):
    #        post_id = random.randint(10000000, 99999999)

    posts.insert_one({"title" : title, "text" : text, "password" : password, "image" : image, "topic" : topic})
    #with open("posts.json", 'w') as json_file:
    #    json.dump(data, json_file)
    return "success"

@app.get("/replying")
def replying(post_id, text):
    with open("replys.json") as f:
        data = json.load(f)

    data[post_id].append(text)

    with open("replys.json", 'w') as json_file:
        json.dump(data, json_file)

@app.get("/fetch_posts")
def fetch_posts(topic : str, page : int):
    #with open("posts.json") as f:
    #    data = json.load(f)

    data = list(posts.find({"topic" : topic}, skip=int(page) * 10, limit = 10).sort("_id", -1))
    for x in range(len(data)):
        data[x]["_id"] = str(data[x]["_id"])
        data[x]["password"] = ""
    print(data)
    return data

@app.get("/fetch_one")
def fetch_one(id):
    data = posts.find_one({"_id" : ObjectId(id)})
    data["_id"] = str(data["_id"])
    data["password"] = ""
    datal = []
    datal.append(data)
    print(datal)
    return datal

@app.get("/delete_posts")
def delete_posts(post_id, topic, password):
    #with open("posts.json") as f:
    #    data = json.load(f)
    print(str(posts.find_one({"_id" : ObjectId(post_id)})))
    if str(posts.find_one({"_id" : ObjectId(post_id)}).get("password", None)) == password:
        posts.delete_one({"_id" : ObjectId(post_id)})

    else:
        return "failed"

    #with open("posts.json", 'w') as json_file:
    #    json.dump(data, json_file)

    return "success"
