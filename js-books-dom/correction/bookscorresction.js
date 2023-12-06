'use strict';

// Quelques livres pour l'exemple...
const books = [
  {
    "title": "Unlocking Android",
    "isbn": "1933988673",
    "pageCount": 416,
    "publishedDate": { "$date": "2009-04-01T00:00:00.000-0700" },
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
    "status": "PUBLISH",
    "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    "categories": ["Open Source", "Mobile"]
  },
  {
    "title": "Android in Action, Second Edition",
    "isbn": "1935182722",
    "pageCount": 592,
    "publishedDate": { "$date": "2011-01-14T00:00:00.000-0800" },
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
    "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    "status": "PUBLISH",
    "authors": ["W. Frank Ableson", "Robi Sen"],
    "categories": ["Java"]
  },
  {
    "title": "Specification by Example",
    "isbn": "1617290084",
    "pageCount": 0,
    "publishedDate": { "$date": "2011-06-03T00:00:00.000-0700" },
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    "status": "PUBLISH",
    "authors": ["Gojko Adzic"],
    "categories": ["Software Engineering"]
  },
  {
    "title": "Flex 3 in Action",
    "isbn": "1933988746",
    "pageCount": 576,
    "publishedDate": { "$date": "2009-02-02T00:00:00.000-0800" },
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    "longDescription": "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!    Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  The expert authors of Flex 3 in Action have one goal   to help you get down to business with Flex 3. Fast.    Many Flex books are overwhelming to new users   focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.",
    "status": "PUBLISH",
    "authors": ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
    "categories": ["Internet"]
  }
]


/** Ajouter la cle dans un élément dt, la valeur dans un élément,
 * les deux attachés comme fils à parentElt.
 */
function toDtDdDom(cle, valeur, parentElt) {
		// Une alternative aurait été de renvoyer le DocumentFragment au lieu
		// d'avoir l'élément `parentElt` en paramètre.  Dans ce cas c'est
		// l'appelant qui ferait le appendChild pour le rattacher le fragment
		// sous le bon élément (voir bookToDOM qui utilise ce principe).
	const dt = document.createElement('dt');
	dt.innerText = '' + cle;
	parentElt.appendChild(dt);

	const dd = document.createElement('dd');
	dd.innerText = '' + valeur;
	parentElt.appendChild(dd);
}

/** Transformer un objet en chaîne de caractères.
 * Si l'objet est un tableau, la chaîne correspond à la chaîne
 * représentant ses éléments, joints par ", ".
 */
function myToString(obj) {
	if (Array.isArray(obj)) {
		console.log("myToString:", obj);
		return obj.map( x => myToString(x) ).join(', ');
	} else if (typeof obj === 'object') {
		const dateTxt = obj["$date"];
		if (dateTxt) {
			return new Date(dateTxt);
		}
		return '' + obj
	}
	// console.log("=== typeof obj", typeof obj);
	return '' + obj;
}

/** Construire un élément dl contenant les propriétés de l'objet.
 * Le nom d'une proprié apparaît en dt et sa valeur en dd.
 */
function propertiesToDL(objet) {
	const dl = document.createElement('dl');
	Object.entries(objet)
		.filter( ([name, value]) => name !== 'title')
		.forEach( ([name, value]) => {
			console.log(name, '==>', value);
			toDtDdDom(name, myToString(value), dl);
		}
	);
	return dl;
}

/** Construire un fragment de document DOM pour représenter un livre.
 * Quelle est le contenu de ce fragment ?
 */
function bookToDOM(book) {
	console.log(book);
	const fragment = document.createDocumentFragment();
	const div = document.createElement('div');
	div.appendChild(document.createTextNode(book.title));
	div.classList.add('title');
	fragment.appendChild(div)
	const dl = propertiesToDL(book);
	fragment.appendChild(dl);
	return fragment;
}


/** Produire un DOM pour représenter un tableau de livres,
 * ajoutés comme dernier de l'élément body.
 */
function display(books) {
	// Construire les nouveaux éléments
	const ol = document.createElement('ol');
	// ol.attributes.setNamedItem(document.createAttribute("type", "1"));
	// ol.attributes.setNamedItem(document.createAttribute("start", "1")); // déprécié
	books
		.map( book => bookToDOM(book) )
		.forEach( bookDom => ol.appendChild(document.createElement('li')).appendChild(bookDom) );

	// Les accrocher à l'élément body du document
	const body = document.getElementsByTagName('body')[0];
	// const body = document.body;	// l'attribut existe déjà...
	body.appendChild(ol);
}


/** Récupérer une liste de livres depuis le document précédents.
  * Les livres n'auront que les champs : title, pageCount, categories et authors.
  * @return un tableau de livre, chaque livre a les attributs ci-dessus.
  */


function domBooksToJSON() {
	const tableau = [] //initialisation de la liste
	const elementsbytitle = document.getElementsByClassName('title'); //selection des livres
	for (const titleelt of elementsbytitle) { //itération sur la liste des livres (attention elles sont à un niveau html différents des dl, dt, ou dd)
		const nouveaux = {title : titleelt.innerText}	//initialisation de l'objet livre
		
		for (const el of titleelt.nextElementSibling.children){
			
				switch (el.innerText){
					case 'pageCount':
						nouveaux.pageCount = el.nextElementSibling.innerText;
					break;
					

					case 'categories':
						nouveaux.categories = el.nextElementSibling.innerText;
					break;

					case 'authors':
						nouveaux.authors= el.nextElementSibling.innerText;
					break;
				}

		} 
		tableau.push(nouveaux);
	}
		
	return tableau;
}

	

/** Produit un élément table qui contient les informations sur books,
 * un tableau de books avec les attributs précisés.
 */
function booksToTable(books, attributs = ['title', 'pageCount', 'categories', 'authors']) {
	// TODO : à faire
	
	const table = document.createElement('table')
	const tr = document.createElement('tr')
		table.appendChild(tr)
	for(const a of attributs){
		const th = document.createElement('th')
		tr.appendChild(th)
		th.textContent = a
	}
	
	for (const book of books){
			const tr = document.createElement('tr')
			table.appendChild(tr)
			for(const a of attributs){
				const td = document.createElement('td')
				tr.appendChild(td)
				td.textContent = book[a]
			}
 	}
return table
}

//Version de boutton de Chat gpt:

function boutons() {		
	const div = document.createElement('div');
  
	const button = document.createElement('button');
	button.setAttribute('name', 'montrer');
	button.setAttribute('id', 'montrer');
	button.innerText = 'Montrer';
	div.appendChild(button);
  
	const button2 = document.createElement('button');
	button2.setAttribute('name', 'cacher');
	button2.setAttribute('id', 'cacher');
	button2.innerText = 'Cacher';
	div.appendChild(button2);
  
	return div;
  }


 



function initialiser(){

display(books);
books.length = 0
const booksFromDom = domBooksToJSON();
console.log("booksFromDom form domBooksToJSON: ", booksFromDom);
// Insérer dans body le résultat de booksToTable(booksFromDom)
document.body.insertAdjacentElement('afterbegin', booksToTable(booksFromDom))
document.body.insertAdjacentElement('afterbegin', boutons(booksFromDom))
}
window.addEventListener('load', initialiser)

