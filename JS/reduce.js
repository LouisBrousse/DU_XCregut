"use strict"

/* somme */

function somme(tableau){
    let sommenb = 0
    for (const element of tableau) {
        sommenb += element;
    }
    return sommenb
}

console.log(somme([1, -4, 6, -2, 3]))

/* produit */

function produit(tableau){
    let produitnb = 1                   //initialiseur
    for (const element of tableau) {
        produitnb *= element;           //accumulateur
    }
    return produitnb
}

console.log(produit([1, -4, 6, -2, 3]))

/* plus grand */

function superieur(tableau){
    let superieurnb = 0
    for (const element of tableau) {
        if (element> superieurnb){
            superieurnb=element;
        };
    }
    return superieurnb
}

console.log(superieur([1, -4, 6, -2, 3]))

/* plus petit */

function inferieur(tableau){
    let inferieurnb = superieur(tableau)
    for (const element of tableau) {
        if (element < inferieurnb){
            inferieurnb=element;
        };
    }
    return inferieurnb
}

console.log(superieur([1, -4, 6, -2, 3]))

/* reduce */

function reduce(tableau, criter1, init){
    let reducenb = init
    for (const element of tableau) {
            reducenb=criter1(reducenb, element);
    }
    return reducenb
}

console.log(reduce([1, -4, 6, -2, 3], (a, x) => a+x ,0))
console.log(reduce([1, -4, 6, -2, 3], (somme, x) => somme+x ,0))
console.log(reduce([1, -4, 6, -2, 3], (produit, x) => produit*x ,1))
console.log(reduce([1, -4, 6, -2, 3], (min, x) => min>x ? x:min , 1)) // dans ce cas init doit être une des valeurs du tableau