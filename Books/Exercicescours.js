"use strict"


const fs = require('fs');
// syntaxe ES6 : import fs from 'fs';
const file = 'books.json';
const books = JSON.parse(fs.readFileSync(file, 'utf8'));

// Nombre de livre
const nb_books = books.reduce((count)=> count+1, 0);
console.log(nb_books)

//Le nombre de livres de plus de 800 pages
const books800 = books.filter(book=> book.pageCount>800);
console.log(books800.length)

//Le nombre de livres de la catégorie Internet
const booksinternet = books.filter(book => 
        book.categories
        .map(type => type.toLowerCase())
        .includes('internet')
);

        console.log(booksinternet.length)

// Le total des pages des livres de la catégorie Internet
const pagesinternet = booksinternet.reduce((totalpagecount, book ) =>  totalpagecount + book.pageCount, 0);
console.log(pagesinternet)

//Toutes les catégories utilisées

const categories = books
        .map(book => book.categories)
        .reduce((catergorieslist, cat) => catergorieslist.concat(cat),[])
        .map(c => c.toLowerCase())
        .filter( (cat, i, t) => cat && ! t.slice(0, i).includes(cat))
        

console.log(categories)

/* Travail de Arii
const books_categories = books.reduce((allcategories, book) => {
        book.categories
        .map(category => category.toLowerCase())
        .forEach(category => { 
            if (category !== "" && !allcategories.includes(category))
            { 
                allcategories.push(category) 
            }
        })
        return allcategories;
    },[]);

const books_categories_v2 = books.reduce((allcategories, book) =>
    allcategories.concat(book.categories
        .map(category => category.toLowerCase())
        .filter(category => category !== "" && !allcategories.includes(category) 
        ))
,[]); */


//Tous les titres de livres qui ont JavaScript dans le titre

const javabookslist = books.filter(book => book.title.includes('JavaScript'))
const javatitleslist = javabookslist.map(book => book.title)
console.log(javatitleslist)

//L'auteur qui a publié le plus de livre

//const