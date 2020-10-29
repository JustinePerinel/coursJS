// JS pour introduction comparaison 
let x = 4;
// console.log(x);
// console.log(typeof x);
let testEgalValeur = x == 2;
// console.log(testEgalValeur);
// console.log(typeof testEgalValeur);
let testEgalValeurType = x === 4; // valeur identique à la valeur Et en type
// console.log(testEgalValeurType);
let testDifferenceValeur = x != 4;// différent de 4 ?
// console.log(testDifferenceValeur);
let testDifferentValeurType = x !== 4;
// console.log(testDifferentValeurType); // différent en valeur et en type 
let testInferieurOuEgal = x < 8;
console.log(testInferieurOuEgal);

alert('Valeur dans x égale à 4 (en valeur) ? : ' + testEgalValeur +
    '\nValeur dans x égale à 4 (en valeur et en type) ? : ' + testEgalValeurType + ' ' +
    '\nValeur dans x différent de 4 (en valeur) ? : ' + testDifferenceValeur + ' ' +
    '\nValeur dans x différent de 4 (en valeur et en type) ? : ' + testDifferentValeurType + ' ' +
    '\nValeur dans x égale à 4 : ? ' + testInferieurOuEgal + ' '
);

alert(`Valeur dans x égale à 4 (en valeur) ? : ${testEgalValeur}
Valeur dans x égale à 4 (en valeur et en type) ? : ${testEgalValeurType} 
Valeur dans x différent de 4 (en valeur) ? : ${testDifferenceValeur} 
Valeur dans x différent de 4 (en valeur et en type) ? : ${testDifferentValeurType} 
Valeur dans x égale à 4 : ? ${testInferieurOuEgal} `
);