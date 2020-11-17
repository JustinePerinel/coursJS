// JS pour la page 03-05-operateurs-logiques.html

// exemple 
let x = 5;
let y = -5;

//ET &&
// .getElementById() nous sert à accéder à un ID présent dans la page HTML et à insérer avec .innerHTML la chaîne de caractères renseignée après l'opérateur d'affectation
if(x >= 0 && x <=10){ //dans cet exemple, chaque condition doit être remplie
    document.getElementById('p1').innerHTML = 'x qui vaut ' + x + ' est une valeur comprise entre 0 et 10';
}else{
    document.getElementById('p1').innerHTML = 'x ne contient pas une valeur comprise entre 0 et 10';
}


// OU ||
if(y < -10 || y > 10){
    document.getElementById('p2').innerHTML = 'y qui vaut ' + y + ' est une valeur plus petite que -10 ou plus grande que 10.';     
}else{
    document.getElementById('p2').innerHTML = 'y qui vaut ' + y + ' n\'est pas une valeur plus petite que -10 ou plus grande que 10.';
}


// NON !
// Dans notre exemple, x = 5
// opérateur inversé, ce n'est pas vrai, 5 n'est pas inférieur ou égal à deux. autrement dit si le test est false, l'opérateur inversé renvoie true donc on exécute le code
if(! (x <= 2)) {
    document.getElementById('p3').innerHTML = 'x qui vaut ' + x + ' est une valeur strictement supérieure à 2'; 
}