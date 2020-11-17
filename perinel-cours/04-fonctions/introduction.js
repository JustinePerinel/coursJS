//intro

// la fonction 'random' : aléatoire 

document.getElementById('p1a').innerHTML = Math.floor((Math.random() * 100) + 1);

document.getElementById('p1b').innerHTML = Math.floor((Math.random() * 10) + 1);

document.getElementById('p1c').innerHTML = Math.random(); // ici on appelle la fonction ou on l'invoquer
console.info(Math.random());

//replace()

let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';

console.log(discours1)

let discours2 = discours1.replace('Donald Trump','Joe Biden'); // le nom d'une fonction est suivi d'un couple de parenthèses qui contiennent des arguments 

document.getElementById('p2').innerHTML = discours2;

var election = prompt('Qui a obtenu le plus de voix entre Joe Biden et Donald Trump ?')

if(election == 'Joe Biden'){
    document.getElementById('p2a').innerHTML = discours2;
}else{
    document.getElementById('p2a').innerHTML = discours1;
}






// création de fonctions 

function randomX100() {
    return Math.random() * 100;
} 

document.getElementById('p3').innerHTML = 'Je génère un nombre compris entre 0 et 100 : ' + randomX100();

console.info(randomX100());

// multiplication 

function multiplier(nbr1,nbr2){// les paramètres de notre fonction
    return ('Multiplions : ' + nbr1 + ' x ' +  nbr2 + ' = ' + (nbr1*nbr2)); // le return pour récupérer l'affichage de notre fonction
}

console.log(multiplier(6,45)); 

document.getElementById('p4').innerHTML = multiplier(20,5);

// addition 

function addition(nbr1,nbr2){
    return ('Additionnons : ' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1+nbr2));
}

document.getElementById('p5').innerHTML = addition(20,5);

// soustraction 

function soustraction(nbr1,nbr2){
    return ('Soustrayions : ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1-nbr2));
}

document.getElementById('p6').innerHTML = soustraction(20,5);

// division 

function division(nbr1,nbr2){
    return ('Divisons : ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1/nbr2));
}

document.getElementById('p7').innerHTML = division(20,5);

// modulo 

function modulo(nbr1,nbr2){
    return ('Modulons : ' + nbr1 + ' % ' + nbr2 + ' = ' + (nbr1%nbr2));
}

document.getElementById('p8').innerHTML = modulo(20,5);