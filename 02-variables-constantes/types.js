// js. pour la page types de données

// string
let presentation = "Je m'appelle Pedro.";
// let presentation = 'Je m\'appelle Pedro';
let age = 25;
let age2 = 60;

// console.log de la variable présentation
console.log(typeof presentation);

// 1 - STRING //

// 1- récupérer un élément dont l'ID est p1
// 2- La propriété innerHTML permet de remlacer complètement le contenu d'un élément identifiée par son attribut id
// 3- puis on concatène une string et le résultat de la fonction typeof()
// 4- Le résultat s'affiche dans la page
document.getElementById('p1').innerHTML = 'Type de données pour la variable présentation : ' + typeof presentation;

document.getElementById('p2').innerHTML = 'Type de données pour la variable age : ' + typeof age;

document.getElementById('p3').innerHTML = '<code>let</code> : ' + typeof age2;

// test pour un innerText 

// innerText 
let ville = 'Colombes';

document.getElementById('p4').innerText = '<code>let</code> ' + typeof ville;

// Apostrophes et guillemets 

let phrase = 'Mon film préféré est "20000 lieues sous les mers"';
// let phrase = 'Mon film préféré est \'20000 lieues sous les mers\'';

console.log(phrase);

// 2 - NUMBER //

let x = 10;
let y = -20000;
let z = 3.14;

console.log(x);
console.log(y);
console.log(typeof z);
// plusieurs arguments dans la console.log
console.log(typeof x, y);
console.log(typeof y, typeof z);

// 3 - BOOLEEN / BOOLEAN //

// let vrai = true;
// let faux = false;

let test = 8 > 4;
// mettre deux fois == pour calcul 
let test2 = 12 + 25 == 46;

console.log(test);
console.log(test2);
console.log(typeof test, test);

// 4 - NULL et UNDEFINED //

// variable undefined 
let arbre;

console.log(typeof arbre);

// variable null ?? 
let fleur;
fleur = null;

console.log(fleur);

let nul = null;
// ind = indéfinie 
let ind;

document.getElementById('p5').innerHTML = 'Type de données null : ' + typeof nul;

document.getElementById('p6').innerHTML = 'Type de données undefined : ' + typeof ind;