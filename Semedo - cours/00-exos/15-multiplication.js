var unNombre = Number(prompt('Entrez un nombre'));

for (var i = 1; i <=10; i++){
   document.getElementById('p1').innerHTML += unNombre + ' x ' + i + ' = ' + (unNombre*i) + '<br>';
}

// solution Patrick 

// var nombre1 = Number(prompt('Entrez un nombre'));
// // console.log(nombre1);

// for (var i = 1; i <= 10; i++){ //1- initialisation de la variable; 2- test ou condition de sortie; 3- incrémentation
//     var resultat = nombre1 * i; // opération
//     document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>';// bloc de code à exécuter. Le nombre1, à chaque passage FOIS la variable i = la variable résultat
// }

// // ou -----

// for (var i = 1; i <=10; i++) { 
//     document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + nombre1 * i + '<br>';//on fait l'opération dans le bloc de code
// }




