class Compte:
    nb = 0
    def _init_(self,proprietaire,solde):
        self.__numero= Compte.nb + 1
        self.__proprietaire = proprietaire
        self.__solde=solde
        Compte.nb += 1
    @property
    def getNum(self):
        return self.__numero
    @property
    def getProp(self):
        return self.__proprietaire
    @property
    def getSolde(self):
        return self.__solde
    def _str_(self):
        return "Numéro Compte :" + str(self.getNum) + " propriétaire = " + str(self.getProp) + " Solde Initial= " + str(self.getSolde)
    
class CompteCourant(Compte):
    def _init_(self, proprietaire, solde, montantDecouvert):
        Compte._init_(self,proprietaire, solde )
        self.__montantDecouvert=montantDecouvert
        #print(Compte.nb)
    @property
    def getMontantDecouvert(self):
        return self.__montantDecouvert
    def _str_(self):
        return Compte.str(self) + "Montant découvert " + self.getMontantDecouvert   
class CompteEpargne(Compte):
    def _init_(self,proprietaire,solde,interet):
        Compte._init_(self,proprietaire, solde)
        self.__interet=interet
        #print(Compte.nb)
    @property
    def getInteret(self):
        return self.__interet
    def _str_(self):
        return Compte.str(self) + "Interet " + self.getInteret