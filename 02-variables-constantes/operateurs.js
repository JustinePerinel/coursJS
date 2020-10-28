// .js pour la page sur les opérateurs


// 1 - LES OPERATEURS ARITHMETIQUES
let x = 22;
let y = 33;
let z = 44;

let a = x + 1;
let b = x + y
let c = x - y;
let d = x * z;
let e = x / y;
console.log(a, b, c, d, e)



// 2 MODULO ET EXPONENTIELLE 

// MODULO : permet d'avoir le reste de la division 
let f = 5 % 3;
let g = x % y;

console.log(f, g)

// EXPONENTIELLE
let h = 2 ** 3;
console.log (h);



// alert('a contient : ' + a + 
//     '\nb contient : ' + b +
//     '\nc contient : ' + c + 
//     '\nd contient : ' + d +
//     '\ne contient : ' + e +
//     '\nf contient : ' + f +
//     '\ng contient : ' + g +
//     '\nh contient : ' + h
// );

// 3 - PRIORITÉ DES CALCULS 

let j = 1 - 2 - 3;
let l = 1 + 4 - 5;
console.log(j, l)
// le calcul dans i se fait de gauche à droite 

// exception de la puissance 
let k = 2**3**2;
console.log(k);

// on calcule d'abord ce qu'il y entre parenthèses 
let m = 1 - (2 * 3);
console.log(m);

// alert('j contient : ' + j +
//     '\nk contient : ' + k +
//     '\nl contient : ' + l +
//     '\nm contient : ' + m
// );

