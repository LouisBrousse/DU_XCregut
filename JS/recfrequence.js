"use strict"

function frequence_tab(tab, x) {
    if (tab.length === 0) {
        return 0
    } else {
        const premier = tab[0]
        const suivants = tab.slice(1);    
        return (premier === x ? 1:0) + frequence_tab(suivants, x) // si premier === x (true)le return retourne 1 d'où le ?1:0. true + true = 2 true+false =1 false+false=0
        
        
    }

}