// JS pour if

let x = 4;
let y= 0;

if(x>1){ //la condition ou le test est évalué à true
    alert('x contient une valeur supérieur à 1'); //si c'est true on execute cette valeur de code
}

if(x == y){
    alert('x et y contiennent la même valeur');
}

if(x == y){
    alert('x et y contiennent la même valeur')
}

if(y){//l'alerte ne s'affichera pas car la valeur de y contient 0, qui est une valeurs qui renvoit false (cf. la liste dans la page .html)
    alert('la valeur de y est évalué à true');// puisque c'est faux, le code ne sera pas executé.
}

// inversion du test logique > vérifier que c'est faux

if((x > 10) == false) { //au lieu de vérifier que le test est vrai on va vérifier qu'il est faux
    alert('x contient une valeur inférieure à 1');
}

if((x == y) == false){
    alert('x et y ne contiennent pas la même valeur');
}