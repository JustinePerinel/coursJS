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

alert('Valeur dans x égale à 4 (en valeur) ? : ' + testEgalValeur + 
    '\n Valeur dans x égale à 4 (en valeur ET en type) ? ' + testEgalValeurType +
    '\n Valeur dans x different de 4 (en valeur) ? ' + testDifferenceValeur +
    '\n Valeur dans x different de 4 (en valeur OU en type) ? ' + testDifferenceValeurType +
    '\n Valeur dans x inférieur à 4 (en valeur) ? ' + testInferieur +
    '\n Valeur dans x supérieur à 4 (en valeur) ? ' + testSuperieur
);

alert(`Valeur dans x égale à 4 (en valeur) ? : ${testEgalValeur}
 Valeur dans x égale à 4 (en valeur ET en type) ? ${testEgalValeurType}
 Valeur dans x different de 4 (en valeur) ? ${testDifferenceValeur}
 Valeur dans x different de 4 (en valeur OU en type) ? ${testDifferenceValeurType}
 Valeur dans x inférieur à 4 (en valeur) ? ${testInferieur}
 Valeur dans x supérieur à 4 (en valeur) ? ${testSuperieur}`
);

