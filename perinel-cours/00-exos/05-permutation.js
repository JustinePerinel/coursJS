//page js pour 05-permutation.html

var nombre1 = 5;
var nombre2 = 3;

document.getElementById('p1').innerHTML = 'Au départ, nombre1 = '+nombre1;
document.getElementById('p2').innerHTML = 'Au départ, nombre2 = '+nombre2;

// CODE DE PERMUTATION
//peut être utilisée pour number et string

var nombre1 = 5;
var nombre2 = 3;

//on utilise ici une variable temporaire 'tmp' qui va stocker l'une des données
var tmp;

//on dit à cette variable 'temp' de stocker la valeur de nombre1 (ici 5)
// temp = 5
tmp = nombre1;

// on dit ensuite à la variable nombre1 (jusqu'à là égale à 5) de stocker la valeur de nombre 2 (c'est à dire 3). 
// nombre1 = 3
nombre1 = nombre2;

// on dit ici à nombre2 qu'elle doit stocker le contenu de notre variable temporaire, c'est à dire 5. 
// nombre2 = 5
nombre2 = tmp;


console.log(nombre1); // vous devez trouver 3
console.log(nombre2); // vous devez trouver 5

document.getElementById('p3').innerHTML = 'Au final, nombre1 = '+nombre1;
document.getElementById('p4').innerHTML = 'Au final, nombre2 = '+nombre2;

// JS pour la page permutation
// Permutation de variable de type number
// var nombre1 = 10;
// var nombre2 = 7;
// document.getElementById('p1').innerHTML = ( ' nombre1 est egale à ' + nombre1)
// document.getElementById('p2').innerHTML = ( ' nombre2 est egale à ' + nombre2)
// nombre1 = nombre1 + nombre2; // J'additionne la 1ère variable à la 2ème variable
// nombre2 = nombre1 - nombre2; //  On retrouve grâce à cette opération la nouvelle valeur de nombre1 que l'on passe dans nombre2.
// nombre1 = nombre1 - nombre2; // Pour retrouver la valeur d'origine de nombre2, on fait l'opération inverse que l'on affecte a nombre1.
// document.getElementById('p3').innerHTML = ( ' nombre1 est egale à ' + nombre1)
// document.getElementById('p4').innerHTML = ( ' nombre2 est egale à ' + nombre2)
// console.log(nombre2)
// console.log(nombre1)