"use strict"

/* Au cube */

function aucube(tableau){
    if (tableau.length === 0){
        return []
    }else{
        return [].concat(tableau[0]**3, aucube(tableau.slice(1)))
    }
}

console.log(aucube([1, 2, 3, 4]))

/* Pair/Impair */

function pairimpair(tableau){
    if (tableau.length === 0){
        return []
    } else {
        return [].concat(tableau[0]%2 === 0, pairimpair(tableau.slice(1)))
    }
}

console.log(pairimpair([1, 2, 3, 4]))

/* Factorielle */

function fact(n) {
    if (n <= 1) {
    return 1;
    } else {
    return n * fact(n - 1);
    }
    }


function factorielle(tableau){

    if (tableau.length === 0) {
        return [];
    } else {
        return [].concat(fact(tableau[0]), factorielle(tableau.slice(1))) 
    }
}

console.log(factorielle([1, 2, 3, 4]));

/* Map */

function map(tableau, f) {
    if (tableau.length === 0) {
        return [];
    } else {
        return [].concat(f(tableau[0]), map(tableau.slice(1), f)) 
    }
}



console.log(map([1, 2, 3, 4], x=>x**3))
console.log(map([1, 2, 3, 4], x=>fact(x)))
console.log(map([1, 2, 3, 4], fact))
console.log(map([1, 2, 3, 4], x => 1/x))