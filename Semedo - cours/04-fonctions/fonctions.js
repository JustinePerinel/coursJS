// les fonctions introduction 

// exemple de la fonction random() "aléatoire"

document.getElementById('p1').innerHTML = Math.random(); // ici on exécutte le code "caché" derrière la fontion, on appelle la fonction ou on l'invoque

console.log(Math.random()); 

// replace()

let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné !';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden'); // le nom d'une fonction est suivie d'un couple de paranthèses qui contiennent des arguments
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;

//création de fonctions

// 1 - multiplier le résultat de random() par 100
function randomX100() {
    return Math.random() * 100;
}
// console.log(randomX100());
document.getElementById('p3').innerHTML = randomX100();

// 2 - Une simple multiplication

function multiplier(nbr1, nbr2) {
    // return (nbr1 * nbr2);
    return ('Multiplions ' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1 * nbr2));
}
// console.log(multiplier(120,3));
document.getElementById('p4').innerHTML = multiplier(120,3);

// 3 - soustraction
function soustraire(nbr1, nbr2) {
    // return (nbr1 * nbr2);
    return ('Soustraction de ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1 - nbr2));
}
// console.log(soustraire(10,6));
document.getElementById('p5').innerHTML = soustraire(10,6);

// 4 - division
function diviser(nbr1, nbr2) {
    // return (nbr1 * nbr2);
    return ('diviser ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1 / nbr2));
}
// console.log(52,4);
document.getElementById('p6').innerHTML = diviser(52,4);

// 5 - addition
function additionner(nbr1, nbr2) {
    // return (nbr1 * nbr2);
    return ('Additionner ' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1 + nbr2));
}
// console.log(356,4);
document.getElementById('p7').innerHTML = additionner(356,4);

//6 - modulo
function modulo(nbr1, nbr2) {
    // return (nbr1 * nbr2);
    return ('Calculer le modulo de ' + nbr1 + ' % ' + nbr2 + ' = ' + (nbr1 % nbr2));
}
// console.log(5,3);
document.getElementById('p8').innerHTML = modulo(5,3);


