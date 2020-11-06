// JS pour Fonctions

//  fonction random , soit aléatoire

document.getElementById('p1').innerHTML = Math.random();

// replace , pour remplacer

let discour1 = 'Bonjour, je suis Donald Trump et j\'ai gagné !'

console.log(discour1);

let discour2 = discour1.replace('Donald Trump', 'Joe Biden');

document.getElementById('p2').innerHTML = discour2;