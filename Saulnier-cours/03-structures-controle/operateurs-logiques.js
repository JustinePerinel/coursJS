// JS pour les opérateurs logiques

//exemple
let x = 5;
let y = -20;

// && ET
// getElementById('') nous sert à accéder à un ID présent dans la page html et à insérer le texte renseigné après l'opérateurs d'affection.
if( x >= 0 && x <= 10){ //dans cet exemple, chaque condition doit etre vraies
    document.getElementById('p1').innerHTML = 'x vaut ' + x + ' et est une valeur comprise entre 0 et 10 ';
}

// || OU
if( y < -10 || y > 10 ) {
    document.getElementById('p2').innerHTML = 'y vaut ' + y + ' et est une valeur plus petite que -10 et plus grande que 10';
}

// ! NO
// dans notre exemple x = 5
// opérateurs inversés, ce n'est pas vrai, 5 n'est pas inférieur ou égale à 2, autrement dit si le test est false, l'opérateur inversé (soit la négation) renvoie true donc on execute le code
if( ! (x <= 2 ) ) { //  NO
    document.getElementById('p3').innerHTML = 'x contient une valeur strictement supérieure à 2';
}