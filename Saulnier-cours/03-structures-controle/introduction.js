// JS pour intriduction comparaisons
// alert();

let x = 4;

// console.log(x);
// console.log(typeof x);

let testEgalValeur = x == 4; //valeur égale en valeur ?
console.log(testEgalValeur);

// console.log(typeof testEgalValeur);

let testEgalValeurType = x === 4; //valeur égale en valeur ET en type
console.log(testEgalValeurType);

let testDifferenceValeur = x != 4;// différent de 4 ?
// console.log(testEgamValeurType);

let testDifferenceValeurType = x !==4; //différent en valeur ou en type ?
// console.log(testDifferenceValeurType);

let testInferieur = x < 4;
// console.log(testInferieur);

let testSuperieur = x > 4;
// console.log(testSuperieur);

alert('valeur dans x égale à 4 (en valeur) ? : ' + testEgalValeur + 
    '\n Valeur dans x égale à 4 (en valeur ET en type) ? ' + testEgalValeurType +
    ''
);