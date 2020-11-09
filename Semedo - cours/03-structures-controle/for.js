// page for "pour"

for(let i = 0; i < 10; i++){ //1- initialisation 2 - test ou condition de sortie 3 - incrémentation
    document.getElementById('p1').innerHTML += 'i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle.<br>';
}

for (let i = 0; i < 18; i++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('tr1').innerHTML += '<tr><td>passage n° ' + (i + 1) + ' de la boucle</td><td>i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle.</td></tr>';
}
// Attention rappel : let portée locale  !
// console.log(i);

// root
// i = itérator = curseur

// for avec un if et l'instruction break

// if(test) {
//     blocdecode
// }

for (let arreteToi = 0; arreteToi < 1000; arreteToi++){
        if(arreteToi == 32){
            break;
        } // fin du if
    document.getElementById('p2').innerHTML += 'arreteToi contient la valeur ' + arreteToi + ' à chaque passage de la boucle for.<br>';
}// fin du for

// for avec une instruction continue qui "saute"

for (let item = 0; item < 10; item++) {
    if(item % 2 !=0){ // le reste de la division n'est pas égal à 0 (donc c'est un chiffre impair)
        continue; //passe à la suivante
    } // fin du if
    document.getElementById('p3').innerHTML += 'item contient la valeur ' + item + ' à chaque passage de la boucle. <br>';
} // fin du for


