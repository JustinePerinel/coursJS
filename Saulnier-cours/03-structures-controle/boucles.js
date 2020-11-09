// JS pour Les Boucles

// INTRO
// Incrémentation et Décrémentation

let a = 10, b = 10, c = 20, d = 20;
// console.log(d);
//  a ++ va incrémenter après à a la valeur de 1
// a stocke la valeur 10 jusqu'à son incrémentation
document.getElementById('p1').innerHTML = ' a contient la valeur ' + a + ' là je vais post-incrémenter de 1, ce qui fait toujours a = ' + a ++ + ' et après ça fera a = ' + a ;

// console.log(a);

// console.log('b');

document.getElementById('p2').innerHTML = ' b contient la valeur ' + b + ' là je vais pré-incrémenter de 1, ce qui fait que maintenant b = ' + ++b ;

// console.log('c'),

document.getElementById('p3').innerHTML = ' c contient la valeur ' + c + ' là je post-décrémente de 1, ce qui fait toujours c = ' + c-- + ' et après ça fera c = ' + c;

document.getElementById('p4').innerHTML = ' d contient la valeur de ' + d + ' là je pré-décrémente de 1, ce qui fera d = ' + --d;



// Boucle WHILE

let w1 = 0;

while ( w1 < 10 ){ //"tant que" w1 (la variable) est inférieure à 100, le bloc de code se répète en boucle
    // += rajoute de nouveau la chaine de caractère tant que la boucle n'est pas terminée
    document.getElementById('while1').innerHTML += ' w1 contient la valeur ' + w1 + '<br>';
    w1++ ; //incrémente la valeur de la variable de départ
}

// dans le p while2
let w2 = 10;

//boucler tant que w2 est inférieur ou égale à 10

while ( w2 <= 10 ){
    document.getElementById('while2').innerHTML += ' w2 contient la valeur ' + w2 + '.<br>';
    w2++ ; 
}

// on va faire le même avec do... while (faire... tant que)

let w3 = 0;

do {
    document.getElementById('while3').innerHTML += ' w3 contient la valeur ' + w3 +'.<br>';
    w3++ ; // symbole d'incrémentation
} 
while ( w3 < 10 ) //tant que le test est vrai