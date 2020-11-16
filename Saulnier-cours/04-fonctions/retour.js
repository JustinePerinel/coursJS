// JS pour Retour

function division(a,b) { //les paramètres (a,b)
    if (b == 0){
        return 'Division par 0 impossible ! '
    } else {
        return a / b; // après le return, plus rien ne se passe
    }//fin de if else
}//fin de function

// console.log(division(5,0));

let nbr1 = prompt('Entrez un premier nombre');
let nbr2 = prompt('Entrez un second nombre qui divisera le premier');

// console.log(nbr1,nbr2);

let resultatDivision = division(nbr1,nbr2);//on utilise les variables en arguments

document.getElementById('p1').innerHTML = resultatDivision;