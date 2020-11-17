// page des boucles 

//INTRO
//Incrémentation et décrémentation

let a = 10; b = 10; c = 20; d = 20;
// console.info(a, b, c, d)

// a++ va incrémenter la valeur de a de 1, il ajoute 1 après 
document.getElementById('p1').innerHTML = 'a contient la valeur ' + a + ', là, je vais post-incrémenter de 1, ce qui fait que a est toujours égal à '+ a++ + ' et donc après a sera égal à ' + a;

// console.log(b)

// ++b va incrémenter la valeur de b de 1, il ajoute 1 avant 
document.getElementById('p2').innerHTML = 'b contient la valeur ' + b + ' là je vais pré-incrémenter, ce qui fait maintenant, b contient '+ ++b;

// c-- va décrémenter la valeur de c de 1, il enleve 1 après 
document.getElementById('p3').innerHTML = 'c contient la valeur ' + c + ', là je post-décrémente de 1, ce qui fait que c est toujours égal à ' + c-- + ' et après c sera égal à '+ c;

// --d va décrémenter la valeur de d de 1, il enleve 1 avant 
document.getElementById('p4').innerHTML = 'd contient la valeur ' + d + ', là je pré-décrémente de 1, et donc d est égal à ' + --d + '.';

console.log(d);


// boucle while 
let w1 = 0;

while(w1 < 5){ // tant que c'est vrai le test ou la condition :
    //1 - += rajoute de nouveau le commentaire tant que la boucle n'est pas terminée. 
    document.getElementById('while1').innerHTML += 'w1 contient la valeur '+w1+'.<br>';
    w1++;//2 - incrémente la valeur de la variable de départ
} 

// boucler tant que w2 est inférieur ou égal à 10

let w2 = 0;

while(w2 < 10){ 
    document.getElementById('while2').innerHTML += 'Oyez oyez, w2 contient la valeur '+w2+'.<br>';
    w2++;
}


//on va faire la même chose avec do... while 

let w3 = 11;

do{
    document.getElementById('while3').innerHTML += 'Voyez, w3 contient la valeur '+w3+'.<br>';
    w3++;
}
while (w3 < 10)