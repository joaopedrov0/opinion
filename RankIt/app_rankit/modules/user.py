from dbElementsInterface import DBElemensInterface

class User:
    def __init__(self, username, id=None):
        DBElemensInterface.register(User) # Is this technically right? I don't know

        '''Identification'''
        self.__username = username
        self.__id = id

        '''Login'''
        self.__email = None
        self.__password = None

        '''Stylization'''
        self.__icon = None
        self.__bio = None
        self.__banner = None

        '''Lists'''
        self.favorites = []
        self.__friends = []
        self.__reviews = []


    '''Setters'''
    def get_username(self):
        return self.__username

    def get_id(self):
        return self.__id

    def get_email(self):
        return self.__email

    def get_password(self):
        return self.__password

    def get_icon(self):
        return self.__icon

    def get_bio(self):
        return self.__bio

    def get_banner(self):
        return self.__banner

    def get_friends(self):
        return self.__friends

    def get_reviews(self):
        return self.__reviews


    '''Setters'''
    def set_username(self, username):
        self.__username = username

    def set_email(self, email):
        self.__email = email

    def set_password(self, password):
        self.__password = password

    def set_icon(self, icon):
        self.__icon = icon

    def set_bio(self, bio):
        self.__bio = bio

    def set_banner(self, banner):
        self.__banner = banner
    
    def set_friends(self, friends): # Change whole friends list
        self.__friends = friends
    
    def set_reviews(self, reviews): # Change whole reviews list
        self.__reviews = reviews
    

    def add_friend(self, friend): # Add 1 friend
        if friend not in self.__friends:
            self.__friends.append(friend)

    def remove_friend(self, friend): # Remove 1 friend
        if friend in self.__friends:
            self.__friends.remove(friend)

    def add_review(self, review): # Add 1 review
        self.__reviews.append(review)

    def remove_review(self, review): # Remove 1 review
        if review in self.__reviews:
            self.__reviews.remove(review)

a = User('NAme', 'ID')



print(isinstance(a, DBElemensInterface))