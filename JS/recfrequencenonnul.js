"use strict"

function frequencenonnul (tab){
    
    if (tab.length ===0){
        return 0;
    } else {
        let nbrnonnul=0;
        if (tab[0]!==0) {
            nbrnonnul++;
        }
        const suivants = tab.slice(1);
        return nbrnonnul+frequencenonnul(suivants);
    }
}


let tab1 = [0, 1, 3, 3, 0, 4, 5];
console.log(frequencenonnul(tab1));