// JS pour exo SAISIE

// alert('coucou');


let nbrChoix = 0 ;// valeur initiale qui va nous permettre d'entrer dans la boucle
console.log(nbrChoix + ' est la variable d\'initialisation');


// while

while ( (nbrChoix <50 ) || ( nbrChoix > 100)) {
    nbrChoix = Number(prompt('Entrez un nombre entre 50 et 100'));
}

console.log (nbrChoix + ' > nombre récupéré');

