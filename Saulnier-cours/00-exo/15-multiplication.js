// JS pour exo multiplication

var nombre1 = Number(prompt('Choisis un 1er nombre :'));
console.log(nombre1);

// Créer une table de ultiplication jusqu'a 10 avec le nombre entré par l'utilisateur
var nombre2 =Number(prompt('Choisis un 2nd nombre :'));
console.log(nombre2);
// for (/* '1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation' */) {
//     // opération
//     // bloc de code à éxécuter
// }

// for ( var i = 1; i  ; i++ ) { //1-initialisation de la variable;
//     if ( nbr2 < 2 || nbr2 > 9){
//         alert(nbr2 + ' n\'est pas compris entre 2 et 9');
//     }
//     var resultat = nbr1 * nbr2; //opération
//     document.getElementById('p1').innerHTML +=  nbr1 + ' x ' + nbr2 + ' = ' + resultat + '<br>';
// } 


for (var i = 1; i <=10; i++) {//1- initialisation de la variable; 2- test ou condition de sortie; 3- incrémentation
    var resultat = nombre1 * i;    // on fait l'opération avant et on la passe en variable
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>';//le nombre1 à chaque passage FOIS la variable i = la variable résultat
}
for (var i = 1; i <=10; i++) { 
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + nombre1 * i + '<br>';//on fait l'opération dans la bloce de code
}
resultat == nombre1 * nombre2;
console.log(resultat);

