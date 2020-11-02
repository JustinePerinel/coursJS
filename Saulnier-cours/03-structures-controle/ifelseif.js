// JS pour if... else ... if... else

let x = 1;

if ( x > 1) {
    alert('x contient une valeur strictement supérieure à 1');
} else if ( x == 1 ) {
    alert('x contient la valeur 1');
} else {
    alert('x contient une valeur strictement inférieure à 1');
}

x = -10;

if ( x > 1) { //si
    alert('x contient une valeur strictement supérieure à 1');
} else if ( x == 1) { //sinon si
    alert('x contient la valeur de 1');
} else if ( x < 1) {
('x contient une valeur strictement inférieure à 1');
} else if ( x < 1) {
    alert('x contient une valeur strictement inférieure à 0');
} else if ( x < -2 ) {
    alert('x contient une valeur strictement inférieure à -2');
} else {
    alert('la valeur de x n\'a pas pu être comparée à un nombre');
}

