from compte import *

#créer un compte
def main_compte():
    P1 = Personne("Brousse", "Louis")
    print(P1)

    P2 = Personne("Mignon", "Rosalie")

    C1 = CompteSimple(12000, P1)
    print(C1)

    C2 = CompteSimple(3000, P2)

    assert C1.solde == 12000
    assert C1.titulaire is P1
    
    C1.crediter(1000)
    assert C1.solde == 13000
    print(C1)

    C1.debiter(15000)
    assert C1.solde == -2000
    print(C1)

    B1 = Banque()
    print (B1)
    
    C3 = B1.ouvrir(P2, 500) 
    print (C3)

    C4 = B1.ouvrir(P1, 300)
    print(B1.total())
    print(B1)

    

def main_banque():
    P1 = Personne("Brousse", "Louis")
    
    P2 = Personne("Mignon", "Rosalie")
    
    B1 = Banque()
    C1 = B1.ouvrir(P1, 500)
    print(C1)
    
    C1.crediter(500)
    print(C1)

    C2 = B1.ouvrir(P2, 1500)
    print(C2)

    print(B1)

    print(B1.total())

    B1.frais(10)
    print(B1)
    print(C1)

    CC2 = B1.ouvrircc(P2, 1500)
    CC2.crediter(500)
    print(CC2)
    CC2.debiter(200)
    print(CC2)
    
    CC2.releve_compte()
    print(CC2.numero)


main_banque()
#main_compte()