"use strict";


function frequence_el_while(tab, element) {
    let occurence = 0;
    let index = 0;
    while (index < tab.length) {
        if (tab[index] === element){
            occurence++;    
        }
        index++;
    }
    return occurence;
}

function frequence_el_dowhile(tab, element) {
    let occurence = 0;
    let index = 0;
    do { 
        if (tab[index] === element){
        occurence++;    
        }
        index++;
    } while (index < tab.length);
    
    return occurence;
}

function frequence_el_for (tab, element) {
    let occurence = 0;
    for (let i=0; i < tab.length; i++) {
        if (tab[i] === element){
            occurence++;
        }
    }
    return occurence
}

function frequence_el_forin (tab, element) {
    let occurence = 0;
    for (let i in tab) {
        if (tab[i] === element){
            occurence++;
        }
    }
    return occurence
}

function frequence_el_forof (tab, element) {
    let occurence = 0;
    for (let e of tab) {
        if (e === element){
            occurence++;
        }
    }
    return occurence
}


let tab = [1, 2, 3, 4, 5, 6, 1, 2, 2]

console.log(frequence_el_while(tab, 2))
console.log(frequence_el_while(tab, 3))
console.log(frequence_el_while(tab, 7))
console.log(frequence_el_dowhile(tab, 2))
console.log(frequence_el_dowhile(tab, 3))
console.log(frequence_el_dowhile(tab, 7))
console.log(frequence_el_for(tab, 2))
console.log(frequence_el_for(tab, 3))
console.log(frequence_el_for(tab, 7))
console.log(frequence_el_forin(tab, 2))
console.log(frequence_el_forin(tab, 3))
console.log(frequence_el_forin(tab, 7))
console.log(frequence_el_forof(tab, 2))
console.log(frequence_el_forof(tab, 3))
console.log(frequence_el_forof(tab, 7))