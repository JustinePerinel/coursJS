// JS pour les opérateurs ternaires

let x = 15;
let y = -20;


// code complet
if( x >= 10 ) {
    document.getElementById('p2').innerHTML = 'x supérieur ou égal à 10';
} else {
    document.getElementById('p2').innerHTML = 'x est strictement inférieur à 10';
}

// même code que le précédent en ternaire, soit compact
//   ? represente le if et : represente else
document.getElementById('p1').innerHTML =
x >= 10 ? 'x supérieur ou égal à 10' : 'x est strictement inférieur à 10';


if( y >= 10) {
    document.getElementById('p3').innerHTML = 'y est supérieur ou égale à 10';
} else {
    document.getElementById('p3').innerHTML = 'y est strinctement inférieur à 10';
}

// or

document.getElementById('p4').innerHTML =
y >= 10 ? 'y supérieur ou égal à 10' : 'y est strictement inférieur à 10';



