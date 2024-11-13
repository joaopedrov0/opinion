from pymongo import MongoClient

client = MongoClient()
db = client['rankit_db']
users_collection = db['users_collection']

teste = {
    'name': 'Nathan',
    'age': 22,
    'job': 'Student'
}

users_collection.insert_one(teste)