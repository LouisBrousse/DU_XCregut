class Personne:
    def __init__(self, nom, prenom):
        self.nom = nom 
        self.prenom = prenom
    
    def __str__(self) -> str:
        return('{}, {}'.format (self.nom, self.prenom))


class CompteSimple:

    def __init__(self, depot, titulaire:Personne):
        self.__solde = depot
        self.titulaire = titulaire
    
    def __str__(self):
        return str(self.titulaire) + " : " + str(self.solde)

    @property
    def solde(self):
        return self.__solde
    
    def créditer(self, montant):
        self.__solde += montant     
      
    def débiter(self, montant):
        self.solde -= montant

class Banque:
    def __init__(self): 
        self.__comptes = []

    def __str__(self):
        resultat = ''
        for x in self.__comptes:
            resultat += str(x)+'\n'
        return resultat
    
    def ouvrir(self, client:Personne, argent:int):
        c = CompteSimple(argent,client)
        self.__comptes.append(c)
        return c
    
    def frais(self, frais):
        for c in self.__comptes:
            c.solde -= frais
        
    def total(self):
        total = 0
        for compte in self.__comptes:
            total += compte.solde
        return total