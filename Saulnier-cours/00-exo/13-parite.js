// JS pour exo parité

// for (var i = 1; i <=10; i++) {
//     if ( i % 2 === 0 ) {
//     console.log(i + ' est pair');
//     }
// }

// for (var i = 1; i <=10; i++) {
//     if ( i % 2 ) {
//     console.log(i + ' est impair');
//     }
// }

for (var i = 1; i <=10; i++) {
    if ( i % 2 === 0 ) { //le reste est égal à 0 donc le chiffre est paire
    console.log(i + ' est pair');
    } else { //sinon c'est impair
    console.log(i + ' est impair');
    }
}

// var nbrChoix = parseInt(prompt(' Exo 2 : Veuillez choisir un nombre : ')); //parseInt pour s'assurer d'un nombre entier, number pour avoir les decimal
// console.log(typeof nbrChoix, nbrChoix);

// let nbrMax = nbrChoix + 10;
// console.log(typeof nbrChoix, nbrChoix);

// for (var i = nbrChoix; i <= nbrMax; i++) {
//     if ( i % 2 === 0 ) { //le reste est égal à 0 donc le chiffre est paire
//     document.getElementById('l1').innerHTML += (i + ' est pair <br>');
//     } else { //sinon c'est impair
//     document.getElementById('l1').innerHTML += (i + ' est impair <br>');
//     }
// }

let nbrUtilisateur = parseInt(prompt('Exo 2 : Rentre un nombre entier, fissa !'));//parsInt on est sûr que c'est un entier avec Number() on risque d'avoir un décimal 
console.log(typeof nbrUtilisateur, nbrUtilisateur);

let nbrUtilisateurMax = (nbrUtilisateur + 10);
console.log(typeof nbrUtilisateurMax, nbrUtilisateurMax); 

for (let i = nbrUtilisateur; i <= nbrUtilisateurMax; i++) {
    if (i % 2 === 0) {// si il est pair
        document.getElementById('l1').innerHTML += (i + ' est pair <br>');
    } else {// sinon si il est impair
        document.getElementById('l1').innerHTML += (i + ' est impair <br>');
    }
}

// meme exercice avec boucle while
// rajouter un prompt et changer les noms de variables si nous voulons deux choix différents d'utilisateur

while (nbrUtilisateur <= nbrUtilisateurMax) {
    if (nbrUtilisateur % 2 === 0) {// si il est pair
        document.getElementById('l2').innerHTML += (nbrUtilisateur + ' est pair <br>');
    } else {// sinon si il est impair
        document.getElementById('l2').innerHTML += (nbrUtilisateur + ' est impair <br>');
    }
    nbrUtilisateur++;
}