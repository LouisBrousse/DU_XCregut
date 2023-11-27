'use strict';

const assert = require('assert');

//import { strict as assert  } from 'assert';
function egaliteTabWhile(tab1, tab2)
{
    if (tab1===tab2){
        return true
    }
    if (tab1.length !== tab2.length) {
        return false;
    }
    let index = 0;
    while (index < tab1.length) {

        if (tab1[index] !== tab2[index]) {
            return false;
        }
        index++;
    }
    return true;
}
{
 let t1 = [1,2,3]
 let t2 = [1,2,3]
 /*t2.push(4);
 delete(t2[3]);*/
 t2.push(undefined);
 console.log(egaliteTabWhile(t1,t2))
 assert.equal(t1[3],t2[3]);
 //assert.equal(t1.length,t2.length);
 assert.deepEqual(t1,t2);
 
}

function egaliteTabDoWhile(tab1, tab2){
    if (tab1===tab2){
        return true
    }
    if (tab1.length !== tab2.length) {
        return false;
    }
    let index  = 0;
    do {
        if (tab1[index] !== tab2[index]) {
            return false;
        }
        index++;
    } while (index < tab1.length);
    return true;
}



function egaliteTabFor(tab1, tab2){
    if (tab1===tab2){
        return true
    }
    if (tab1.length !== tab2.length) {
        return false;
    }
    for ( let i=0;i< tab1.length;i++)
    {
        if (tab1[i] !== tab2[i]) {
            return false;
        }
    } 
    return true;
}



function egaliteTabFor2(tab1, tab2){
    if (tab1===tab2){
        return true
    }
    if (tab1.length !== tab2.length) {
        return false;
    }
    for (const index in tab1)
    {
        if (tab1[index] !== tab2[index]) {
            return false;
        }
    } 
    return true;
}



function egaliteTabFor3(tab1, tab2){
    if (tab1===tab2){
        return true
    }
    if (tab1.length !== tab2.length) {
        return false;
    }
    let index = 0
    for (const elt  of tab1)
    {
        if (elt !== tab2[index])
        {
            return false;
        }
        index++;
    } 
    return true;
}
/*
const tableau1 = [1, 2, 3];
const tableau2 = [1, 2, 3,4];
const tableau3 = [1, 4, 3];

console.log(egaliteTabWhile(tableau1, tableau2)); 
console.log(egaliteTabWhile(tableau1, tableau3)); 
console.log(egaliteTabDoWhile(tableau1, tableau2)); 
console.log(egaliteTabDoWhile(tableau1, tableau3)); 
console.log(egaliteTabFor(tableau1, tableau2)); 
console.log(egaliteTabFor(tableau1, tableau3)); 
console.log(egaliteTabFor2(tableau1, tableau2)); 
console.log(egaliteTabFor2(tableau1, tableau3)); 
console.log(egaliteTabFor3(tableau1, tableau2)); 
console.log(egaliteTabFor3(tableau1, tableau3)); */