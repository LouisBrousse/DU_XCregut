"use strict"

/*Applatir un tableau
aplati([1, [2, 3]]) donne [1, 2, 3]
aplati([[0], 1, [2, 3], [4, [5], []]) donne [0, 1, 2, 3, 4, 5 ]*/

function applatitab (tab){
    console.log(tab);
    if (tab.length === 0){
        return [];
    
    } else if (!Array.isArray(tab[0])) {
        return [].concat(tab[0], applatitab(tab.slice(1)));
    
    } else {
        return [].concat(applatitab(tab[0]), applatitab(tab.slice(1)));
    }
}

console.log(applatitab([]))

console.log(applatitab([1, 2]))

console.log(applatitab([[1]]))

console.log(applatitab([1, [2, 3], [4, 5, 6]]))