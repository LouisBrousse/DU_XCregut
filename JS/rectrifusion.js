"use strict"

/*Écrire une fonction de tri par fusion qui retourne un tableau trié. Le principe est le suivant. Si
le tableau contient au plus un élément, il est déjà trié. Sinon, on découpe le tableau en 2, la
première moitié et la deuxième moitié. On trie les deux puis on fusionne les deux tableaux triés.
C’est un algorithme du type « diviser pour régner » dont la complexité en O(n.log2 (n)).
1
2
Dérouler l’algorithme sur le tableau [7, 1, 3, 7, 4].
Le programmer*/

function trifusion (tab){
   
    if (tab.length <= 1){ 
        return tab
    } else {
        let tab1 = tab.slice(0,tab.length/2)
        let tab2 = tab.slice(tab.slice/2)
     
    }
}


let tabex = [7, 1, 3, 7, 4]
console.log(trifusion(tabex))