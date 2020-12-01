// page pour for 

for (let i = 0; i < 10; i++){// 1 - initialisation | 2 - condition de sortie | 3 - généralement incrémentation 
    document.getElementById('p1').innerHTML += 'i contient la valeur ' + i +' qui est incrémenté à chaque passage. <br>';
}
// ne fonctionne pas avec let car il se trouve à l'intérieur d'une boucle et il a du coup une porté locale 
// console.log(i)

for (let i = 0; i < 5; i++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('tr1').innerHTML += '<tr><td>passage n° ' + (i + 1) + ' de la boucle</td><td>i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle.</td></tr>';
}

// for avec un if et l'instruction break 

/* if(test){
    blocdecode OU instruction;
} */

for (let arreteToi = 0; arreteToi < 10; arreteToi++) {

        if(arreteToi == 5){
            break;
        } // fin du if

    document.getElementById('p2').innerHTML += 'arreteToi contient la valeur ' + arreteToi + ' qui est incrémenté à chaque passage de la boucle. <br>'
} // fin du for


// for avec l'instruction "continue"

for (let item = 0; item < 10; item++){

    if(item % 2 != 0){ // le reste de la division n'est pas égal à zéro (donc item est un chiffre impair)
        continue;
    } // fin du if

        document.getElementById('p3').innerHTML += 'La varibale item contient la valeur '+ item + ' qui est incrémeenté à chaque passage de la boucle. <br>'
} // fin du for




