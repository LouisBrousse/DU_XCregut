"use script";

//Comparer deux tableaux avec while

function comparewhile (tab1, tab2) {
    if (tab1===tab2){
        return true;
    }
    if (tab1.length !== tab2.length){
        return false;
    }
    let index = 0;

    while (index < tab1.length) {
        if (tab1[index] !== tab2[index]){
            return false;
        }
        index++;
    }
    return true;
}

function comparedowhile (tab1, tab2) {
    if (tab1===tab2){
        return true
    }

    if (tab1.length !== tab2.length){
        return false;
    }
    let index = 0;
    do {
        if (tab1[index] !== tab2[index]){
        return false
        }
        index++;
    } while (index < tab1.length);
    return true;
}
    

//Comparer deux tableaux avec for

function comparefor (tab1, tab2) {
    if (tab1===tab2){
        return true;
    }

    if (tab1.length !== tab2.length){
        return false;
    }

    for (let indice2=0; indice2 < tab1.length; indice2++ ) {
        if (tab1[indice2] !== tab2[indice2]) {  
            return false;
        }   
    }
    return true;
}

function compareforin (tab1, tab2) {
    if (tab1===tab2){
        return true;
    }
    if (tab1.length !== tab2.length){
        return false;
    }
    for (const indice in tab1) {
        if (tab1[indice] !== tab2[indice]) {  
            return false;
        }
    }
    return true;
}

function compareforof (tab1, tab2) {
    if (tab1===tab2){
        return true
    }
    if (tab1.length !== tab2.length){
        return false;
    }
    let i = 0;
    for (const elements of tab1) {
        if (elements !== tab2[i]) {  
            return false;
        }
        i++;
    }
    return true
}


console.log(comparewhile([1, 2, 3], [1, 2, 3]))
console.log(comparewhile([1, 2, 3], [1, 3, 3]))
console.log(comparewhile([1, 2, 3], [1, 2, 3, 4]))
console.log(comparedowhile([1, 2, 3], [1, 2, 3]))
console.log(comparedowhile([1, 2, 3], [1, 3, 3]))
console.log(comparedowhile([1, 2, 3], [1, 2, 3, 4]))
console.log(comparefor([1, 2, 3], [1, 2, 3]))
console.log(comparefor([1, 2, 3], [1, 3, 3]))
console.log(comparefor([1, 2, 3], [1, 3, 3, 4]))
console.log(compareforin([1, 2, 3], [1, 2, 3]))
console.log(compareforin([1, 2, 3], [1, 3, 3]))
console.log(compareforin([1, 2, 3], [1, 3, 3, 4]))
console.log(compareforof([1, 2, 3], [1, 2, 3]))
console.log(compareforof([1, 2, 3], [1, 3, 3]))
console.log(compareforof([1, 2, 3], [1, 3, 3, 4]))