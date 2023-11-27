
"use strict"

/*Écrire une fonction qui, étant donné un tableau de nombres, retourne un nouveau tableau qui
ne contient que les nombres positifs, dans le même ordre.
> positifs*/

/* positif*/

function positif(tab) {
    const liste = [];
    for (const element of tab) {
        if (element > 0) {
            liste.push(element);
        };
    };
    return liste;
}

console.log(positif([1, -4, 6, -2, 3]));

/* pair */

function pair(tab) {
    const liste = [];
    for (const element of tab) {
        if (element%2 === 0) {
            liste.push(element);
        };
    };
    return liste;
}

console.log(pair([1, -4, 6, -2, 3]));

/* filter */

function filter( tab, criter) {
    const liste = [];
    for (const element of tab) {
        if (criter(element)) {
            liste.push(element);
        };
    };
    return liste;
}

console.log(filter([1, -4, 6, -2, 3], x => x>0));
console.log(filter([1, -4, 6, -2, 3], x => x%2 === 0));





