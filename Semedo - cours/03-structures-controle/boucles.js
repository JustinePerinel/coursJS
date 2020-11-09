// pages sur les boucles

// INTRO
// Incrémentation et décrémentation

let a = 10, b = 10, c = 20, d = 20;
// console.log(a, b, c, d);
// a++ va incrémenter, APRES la valeur de a, de 1. Il ajoute 1 après
// a stocke la valeur 10 jusqu'à son incrémentation
document.getElementById('p1').innerHTML = 'a contient la valeur ' + a + ', là je vais post-incrémenter de 1, ce qui fait que a est toujours égal à ' + a++ + ' et après ça fera a = ' + a;

console.log(b);

document.getElementById('p2').innerHTML = 'b contient la valeur ' + b + ' là je vais pré-incrémenter ce qui fait que maintenant b = ' + ++b; 

console.log(c);

document.getElementById('p3').innerHTML = 'c contient la valeur ' + c + ', là je vais post-décrémenter de 1, ce qui fait que c est toujours égal à ' + c-- + ' et donc après ça fera c égal à ' + c;

console.log(c);

document.getElementById('p4').innerHTML = 'd contient la valeur ' + d + ', là je pré-décrémente de 1, ce qui fait que d est égal à ' + --d;

// Boucle WHILE

let w1 = 0; // la variable de départ

while(w1 < 10){ // tant que c'est vrai le test ou la condition
    // += rajoute de nouveau la chaine de caractère tant que la boucle n'est pas terminée
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + '.<br>';
    w1++; // incrémente la valeur de départ
}

// dans le p  while2 
let w2 = 0;

// boucler tant que w2 est inférieur ou égal à 10 

while(w2 < 10){
    document.getElementById('while2').innerHTML += 'Oyez oyez ! w2 contient la valeur ' + w2 + '.<br>';
    w2++;
}

console.log(w2);

// on va faire la même chose avec do... while "faire... tant que"

let w3 = 10;

// ici, le script va d'abord exécuter le bloc de code avant de tester. Il exécute le code 1 fois avant d'appliquer le test puis, se rendant compte que le test est false, il s'interromp
do{ // fait, exécute
    document.getElementById('while3').innerHTML += 'w3 contient la valeur ' + w3 + '.<br>';
    w3++; // incrémente
}while( w3 < 10) // tant que le test est vrai
