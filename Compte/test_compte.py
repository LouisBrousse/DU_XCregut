from compte import *
import pytest

def test_Personne():
    P1 = Personne("Brousse", "Louis")
    assert P1.nom == "Brousse"
    
