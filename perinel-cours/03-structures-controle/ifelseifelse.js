// la page en JS pour if-else-if-else.html 

let x = 0.5;

if(x > 1){
    alert('x contient une valeur strictement supérieure à 1');
}else if (x == 1){
    alert('x contient la valeur 1');
}else{
    alert('x contient une valeur strictement inférieure à 1');
}

// autre exemple 

x = -10;

if(x > 1){
    alert('x contient une valeur strictement supérieur à 1');
}else if (x == 1){
    alert('x contient la valeur 1');
}else if (x < 1){
    alert('x contient une valeur strictement inférieure à 1');
}else if (x < 0){
    alert('x contient une valeur strictement inférieure à 0');
}else if (x < -2){
    alert('x contient une valeur strictement inférieure à -2');
}else if (x < 1){
    alert('x contient une valeur strictement inférieure à 1');
}else{
    alert('la valeur de x n\'a pas pu être comparée à un nombre.')
}