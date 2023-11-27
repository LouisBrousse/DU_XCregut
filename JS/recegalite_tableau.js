"use strict"

function recegalite_tableau (tab1, tab2){
    if (tab1.length != tab2.length){
        return false
    } else if (tab1.length === 0) {
        return true
    } else if(tab1[0] !== tab2[0]){
        return false
    } else {
        return recegalite_tableau(tab1.slice(1), tab2.slice(1))
    }
}
    
let tab1 = [0, 1, 3, 3, 0, 4, 5];
let tab2 = [0, 1, 3, 3, 0, 4, 5];
let tab3 = [0, 1, 3, 3, 3, 4, 5];
console.log(recegalite_tableau(tab1, tab2));
console.log(recegalite_tableau(tab1, tab3));