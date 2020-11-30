let nombre = 0; // valeur initiale qui va nous permettre d'entrer dans la boucle
console.log(nombre + ' est la variable d\'initialisation');

// while

while( (nombre < 50) || (nombre > 100) ){//tant que tous les nombres non compris entre 50 et 100; soit il est inférieur à 50, soit il est supérieur à 100
    nombre = Number(prompt('Entrez un nombre entre 50 et 100'));
}

console.log(nombre + ' variable récupérée');