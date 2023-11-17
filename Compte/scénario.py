from compte import *

#créer un compte
def main():
    P1 = Personne("Brousse", "Louis")
    print(P1)

    P2 = Personne("Mignon", "Rosalie")

    C1 = CompteSimple(12000, P1)
    print(C1)

    C2 = CompteSimple(3000, P2)

    assert C1.solde == 12000
    assert C1.titulaire is P1
    
    C1.créditer(1000)
    assert C1.solde == 13000
    print(C1)


    C1.débiter(15000)
    assert C1.solde == -2000
    print(C1)

    B1 = Banque()
    print (B1)
    
    C3 = B1.ouvrir(P2, 500) 
    print (C3)

    C4 = B1.ouvrir(P1, 300)
    print(B1.total())
    print(B1)

    C4.créditer(400)
    print(B1)
main()
