// .js pour la page if

let x = 4;
let y = 0;

if(x>1){ /* TEST true ? -> ici, la condition ou le test est est évaluée à true*/
    alert('x contient une valeur supérieure à 1'); /* BLOC DE CODE si c'est true, on exécute ce bloc de code */
}

if(x == y){ /* ici la condition ou est test est false donc le bloc de code ne s'exécutera pas */
    alert('x et y contiennent la même valeur');
}

if(y){ /* l'alerte ne s'affichera pas car la valeur de l'alerte contient 0, qui est une des valeurs qui renvoie à false cf. liste dans page .html */
    alert('la valeur de y est évaluée à true');
    // puisque c'est faux on n'exécute pas 
}

// Inversion du test logique > vérifier que c'est faux

if((x>1) == false){ /* au lieu de vérifier que le test est VRDisplay, on va vérifier qu'il est faux */
    alert('x contient une valeur inférieure à 1');
}

if((x == y) == false){
    alert('x et y ne contiennent pas la même valeur');
}

// VOIR 

