from utils import db, users_collection, media_collection, ObjectId
from pymongo.errors import PyMongoError

'''Special parameters to collections funcs
$push: Insert at an array
$set: Add new key:value to an object
$and: Check for two conditions (AND operator)
$or: Check for two conditions (OR operator)
'''

class Database:

    @staticmethod
    def registerUser(user_obj):
        try:
            users_collection.insert_one(user_obj)
        
        except:
            return Database.insertionError()


    @staticmethod
    def registerMedia(media_obj):
        try:
            media_collection.insert_one(media_obj)
        
        except:
            return Database.insertionError()


    @staticmethod
    def registerReview(media_obj, review_obj):
        try:
            media_collection.update_one(media_obj, {"$push": {"reviews": review_obj}})
        
        except:
            return Database.insertionError()
    

    @staticmethod
    def insertionError():
        print('Erro ao inserir objeto!\n')
        return False


    @staticmethod
    def searchUser(username=None, id=None): # Returns User dictionary
        try:
            if id:
                res = users_collection.find_one({'_id': ObjectId(id)})
                return res

            else:
                res = users_collection.find_one({'name': username})
                return res
        
        except:
            print('Erro ao buscar usuário!')
            return False


    @staticmethod
    def searchMedia(media_title=None, id=None): # Returns Media dictionary
        try:
            if id:
                res = media_collection.find_one({'_id': ObjectId(id)})
                return res

            else:
                res = media_collection.find_one({'title': media_title})
                return res
        
        except:
            print('Erro ao buscar obra!')
            return False


    @staticmethod
    def searchReview(review_comment=None, id=None): # return Media dictionary with review
        try:
            if id:
                res = media_collection.find_one({'_id': ObjectId(id)})
                return res

            else:
                res = media_collection.find_one({'reviews.comment': review_comment})
                return res
        
        except:
            print('Erro ao buscar review!')
            return False

Database.registerMedia('lala')