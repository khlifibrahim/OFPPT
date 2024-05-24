from .compte import Compte

class CompteEpargne(Compte):
    def __init__(self, proprietaire, solde, interet):
        super().__init__(proprietaire, solde)
        self.__interet = interet

    @property
    def getInteret(self):
        return self.__interet

    def __str__(self):
        return super().__str__() + " Interet: " + str(self.getInteret)
