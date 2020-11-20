// pages JS de l'exo 05- Permutation
//  Permutation de varibale de type number

var nombre1 = ' 10';
var nombre2 = ' gros minet';

console.log(nombre1);
document.getElementById('p1').innerHTML = ' DEPART >> nombre1 = ' + nombre1;
console.log(nombre2);
document.getElementById('p2').innerHTML = ' DEPART >> nombre2 = ' + nombre2;

// Autre technique valable pour les valeur nombre uniquement
// nombre1 = nombre1 + nombre2; ---> j'additionne la 1ere variable à la 2eme variable
// nombre2 = nombre1 - nombre2; ---> nombre2 contient une nouvelle valeur, addition de 1 et 2 fait la ligne du dessus
// nombre1 = nombre1 - nombre2; ---> nombre1 contient une nouvelle valeur, la soustraction de 1 à 2

var tmp; // variable temporaire
tmp = nombre1; // on dit à cette variable temporaire de stocker la valeur de nombre1; içi 10
nombre1 = nombre2; // on dit ensuite à cette variable nombre1 (=10) de stocker la valeur de nombre 2 (=7)
nombre2 = tmp; // on dit à nombre2 se stocker le contenu de notre variable temporaire (=10), donc 2=10

console.log(nombre1);
document.getElementById('p4').innerHTML = ' ARRIVEE >> nombre1 = ' + nombre1;
console.log(nombre2);
document.getElementById('p5').innerHTML = ' ARRIVEE >> nombre2 = ' + nombre2;
