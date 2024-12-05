from .compte import Compte

class CompteCourant(Compte):
    def __init__(self, proprietaire, solde, montantDecouvert):
        super().__init__(proprietaire, solde)
        self.__montantDecouvert = montantDecouvert

    @property
    def getMontantDecouvert(self):
        return self.__montantDecouvert

    def __str__(self):
        return super().__str__() + " Montant découvert: " + str(self.getMontantDecouvert)
