var nombre1 = 5;
var nombre2 = 3;

// consultation des vairables AVANT permutation
console.log(nombre1, nombre2);

document.getElementById('p1').innerHTML = 'DÉPART >> nombre1 = ' + nombre1;
document.getElementById('p2').innerHTML = 'DÉPART >> nombre2 = ' + nombre2;

// PERMUTATION DE VARIABLES DE TYPE NUMBER ET STRING

var tmp; // Déclaration d'une variable temporaire pour permuter les variables nombre1 et nombre2

// la variable tmp va stocker la valeur de la variable nombre1, soit 5. Donc tmp = 5
tmp = nombre1; 

// la variable nombre1 va stocker la valuer de la variable nombre2, soit 3. Donc nombre1 = 3
nombre1 = nombre2;

// la variable nombre2 va stocker la valeur de la variable tmp, soit 5. Donc nombre2 = 5
nombre2 = tmp;

// Consultation des variables APRÈS permutation
console.log(nombre1);
console.log(nombre2);

document.getElementById('p3').innerHTML = 'ARRIVÉE >> nombre1 = ' + nombre1;
document.getElementById('p4').innerHTML = 'ARRIVÉE >> nombre2 = ' + nombre2;

// // JS pour la page permutation
// // Permutation de variable de type number
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
