import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv(override=True)

mongo_uri = os.getenv("MONGO_URI") #Var. Ambiente criada em .env

client = MongoClient(mongo_uri)
db = client['rankit_db']
users_collection = db['users_collection']

