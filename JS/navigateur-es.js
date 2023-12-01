"use strict";
let encore;
do {
	const nom = prompt("Votre nom ? ");
	alert("Bonjour " + nom + " !");
	document.writeln(`<p>Bonjour ${nom}</p>`);
	encore = confirm("On continue ?");
} while (encore);
document.write(`<p>Bonjour à tous</p>\n`);

