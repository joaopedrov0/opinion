from abc import ABC, abstractmethod

class DBElemensInterface(ABC):
    
    @abstractmethod
    def createObj(self):
        pass