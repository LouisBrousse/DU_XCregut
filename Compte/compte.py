class Personne:
    def __init__(self, nom, prenom):
        self.nom = nom 
        self.prenom = prenom
    
    def __str__(self) -> str:
        return('{}, {}'.format (self.nom, self.prenom))


class CompteSimple: 

    dernier_numero = 10000

    def __init__(self, depot, titulaire:Personne):
        self.__solde = depot
        self.titulaire = titulaire
        CompteSimple.dernier_numero += 1
        self.numero = CompteSimple.dernier_numero

    def __str__(self):
        return str(self.titulaire) + " : " + str(self.solde)

    @property
    def solde(self):
        return self.__solde
    
    def crediter(self, montant):
        self.__solde += montant  
         
      
    def debiter(self, montant):
        self.__solde -= montant
    


class CompteCourrant(CompteSimple):
    def __init__(self, depot, titulaire:Personne):
        super().__init__(depot, titulaire)
        self.historique = []


    def crediter(self, montant):
        super().crediter(montant)
        self.historique.append(montant)
    
    def debiter(self, montant):
        super().debiter(montant)
        self.historique.append(-montant)
    
    def releve_compte(self):
        for operation in self.historique:
            print(operation)
        print(f'Solde: {self.solde}')
      


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
    
    def ouvrircc(self, client:Personne, argent:int):
        c = CompteCourrant(argent,client)
        self.__comptes.append(c)
        return c
    
    def frais(self, frais):
        for c in self.__comptes:
            c.debiter(frais)

        
    def total(self):
        total = 0
        for compte in self.__comptes:
            total += compte.solde
        return total