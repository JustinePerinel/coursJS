// opérateurs logiques

// exemples
let x = 5;
let y = -2;

// && ET
if(x >= 0 && x <= 10){ // ET dans cet exemple chaque condition doit être remplie
    document.getElementById('p1').innerHTML = 'x qui vaut ' + x + ' est une valeur comprise entre 0 et 10';
}

// || OU
if(y < -10 || y > 10){
    document.getElementById('p2').innerHTML = 'y qui vaut ' + y + ' est une valeur plus petite que -10 ou plus grande que 10';
}else{
    document.getElementById('p2').innerHTML = 'y qui vaut ' + y + ' est une valeur supérieure à -10 et inférieure à 10';
}

// ! NON
// dans notre exemple, x = 5
// opérateur inversé ; ce n'est pas vrai, 5 n'est pas inférieur ou égal à 2, autrement dit , si le test est false, l'opérateur inversé (la négation) renvoie true donc on exécute le code
if(! (x <= 2)){
    document.getElementById('p3').innerHTML = 'x contient une valeur strictement supérieure à 2';
}