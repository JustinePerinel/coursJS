// JS pour Fonctions

//  fonction random , soit aléatoire

document.getElementById('p1').innerHTML = Math.random();
//le nom d'une fonction est suivie d'un couple de parenthèse qui contiennent des arguments, ou vide avec certains fonctions
console.log(Math.random());

// replace , pour remplacer

let discour1 = 'Bonjour, je suis Donald Trump et j\'ai gagné !'

console.log(discour1);

let discour2 = discour1.replace('Donald Trump', 'Joe Biden');//le nom d'une fonction est suivie d'un couple de parenthèse qui contiennent des arguments

document.getElementById('p2').innerHTML = discour2;

// CREATION DE FONCTIONS
// 1 - multiplier le résultat de random() par 100
function randomX100() {
    return Math.random() * 100;
}

// console.log(randomX100());
document.getElementById('p3').innerHTML = randomX100();

// 2 - une simple multiplication

function multiplier(nbr1,nbr2) {//les paramètres de notre fonction
    // return (nbr1 * nbr2);
    return ('Multiplions ' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1 * nbr2) );
}

// console.log(multiplier(2,6));
document.getElementById('p4').innerHTML = multiplier(145,9);

// division
function division(nbr1,nbr2) {
    return ('Divisons ' + nbr1 + ' : ' + nbr2 + ' = ' + (nbr1 / nbr2) );
}

document.getElementById('p5').innerHTML = division(5,5);

// soustraction
function soustraction(nbr1,nbr2) {
    return ('Soustraire ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1 - nbr2) );
}

document.getElementById('p6').innerHTML = soustraction(5,3);
// addition

function addition(nbr1,nbr2) {
    return ('Additionnons ' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1 + nbr2) );
}

document.getElementById('p7').innerHTML = addition(5,5);

// modulo
function modulo(nbr1,nbr2) {
    return ('Calculons le modulo de ' + nbr1 + ' % ' + nbr2 + ' = ' + (nbr1 % nbr2) );
}

document.getElementById('p8').innerHTML = modulo(3,30);
