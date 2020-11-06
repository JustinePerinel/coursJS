// JS pour FOR

for (let i = 0; i < 10 ; i++) {
    document.getElementById('p1').innerHTML += ' i contient la valeur de ' + i + ' qui est incrémenter à chaque passage de la boucle grâce <code> i++ </code> <br>';
}

// un tableau dans le JS
for (let i = 0; i < 18 ; i++) {
    document.getElementById('tr1').innerHTML += ' <tr> <td> i contient la valeur de ' + i + ' qui est incrémenter à chaque passage de la boucle grâce <code> i++ </code> </td> <td> passage n°' + (i + 1 ) + '<//td> </tr>'
}

// console.log(i);
//  root = racine
//  i = itérator = "curseur"

//  for avec un if et l'instruction break

// if (test) {
//   blocdecodeOUinstruction;
// }

for (let arreteToi = 0; arreteToi < 100; arreteToi++) {

    if ( arreteToi == 56) {//test
        break;//instruction
    }//fin du if

    document.getElementById('p2').innerHTML += ' arreteToi contient la valeur ' + arreteToi + ' à chaque passage de la boucle for.<br>';
}//fin du for

//  for avec une instruction continue

for (let item=0; item < 10; item++) {
    if(item % 2 != 0) { //le reste de la division n'est pas égal à 0 (donc item est un chiffre impair)
    continue;    
    } //fin de if
    document.getElementById('p3').innerHTML += ' La variable item contient la valeur ' + item + ' à chaque passage de la boucle.<br>';
}// fin de for