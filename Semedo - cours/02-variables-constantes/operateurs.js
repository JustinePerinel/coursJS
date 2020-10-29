// .js pour la page des opérateurs

// opérateurs arithmétiques
let x = 2;
let y = 3;
let z = 4;

let a = x + 1;
let b = x + y;
let c = x - y;
let d = x * z;
let e = x / y;
// permet de calculer le "reste" dans une division : 5 / 3 = 1 (sans les chiffres après la virgule) : 1 + 1 + 1 = 3 > reste 2 donc f = 2
let f = 5 % 3;
// les deux ** symbolisent les puissances 
let g = 2 ** 3;

console.log(a, b, c, d, e);
console.log(f);
console.log(g);

alert('a contient le résultat : ' + a +
    '\nb contient : ' + b +
    '\nc contient : ' + c +
    '\nd contient : ' + d +
    '\ne contient : ' + e +
    '\nf contient : ' + f +
    '\ng contient : ' + g
);

// priorité des calculs
let h = 1 - 2 - 3;
// le calcul dans h se fait de gauche à droite
console.log(h);

let k = 1 + 4 - 5;
console.log(k);

//  le calcul dans j se fait de droite à gauche
let j = 2 ** 3 ** 2;
console.log(j);

// priorité à la parenthèse
let l = 1 - (2 - 10);
console.log(l);

alert('h contient le résultat : ' + h +
'\nj contient : ' + j +
'\nk contient : ' + k +
'\nl contient : ' + l
);

// Opérateurs d'affectation 

let chiffre1 = 5;
let chiffre2 = 18;

let somme = chiffre1 + chiffre2;

console.log(somme);

let prenom = 'Audrey';

// console.log(chiffre1);
// console.log(typeof chiffre1);

let m = 20;
let o = 50;

m += 15; /* On ajoute 15 à la valeur stockée. Permet de faire rapidement un calcul + mise à jour de la variable */

o *= 5;

console.log(m);
console.log(o);

