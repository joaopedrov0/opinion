from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

mongo_uri = os.getenv("MONGO_URI")
client = MongoClient(mongo_uri)
db = client['rankit_db']
users_collection = db['users_collection']

teste = {
    'name': 'Nathan',
    'age': 22,
    'job': 'Student'
}

users_collection.insert_one(teste)