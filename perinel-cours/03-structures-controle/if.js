// ceci est la feuille de javascript pour if.html 

let x = 4;
let y = 0;

if(x > 1){ //la condition est évaluée à true (booléen)
    alert('x contient une valeur supérieure à 1'); //si c'est true, on exécute ce bloc de code
}

if(x == y){ // la condition est évaluée à false
    alert('x et y contiennent la même valeur'); //comme c'est faux, ce bloc n'est pas exécuté
}

if(y){ // l'alerte ne s'affiche pas car y contient 0 , qui est une valeur qui renvoie false (cf. la liste de la page HTML)
    alert('la valeur de y est évaluée à true');
    //puisque c'est faux, on n'exécute pas.
}

//INVERSION DU TEST LOGIQUE : vérifier que la comparaison est fausse

// if((x < 1) == false){ // au lieu de vérifier que le test est vrai on va vérifier qu'il est faux
//     alert('x contient une valeur inférieure à 1');
// }

// if((x == y) == false){
//     alert('x et y ne contiennt pas la même valeur');
// }

