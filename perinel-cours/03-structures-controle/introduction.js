// du js pour la page d'intro 

let x = 4;
// console.log(x)

let testEgalValeur = x == 4;
console.log(testEgalValeur);
document.getElementById('p1').innerHTML = 'La comparaison selon laquelle x = 4 est ' + testEgalValeur + '.';


let testEgalValeurType = x === 4;
console.log(testEgalValeurType);

let testDifference = x != 5;


let testDifferenceValeurType = x !== 5; 
console.log(testDifferenceValeurType)

let testInferieur = x < 3;
console.log(testInferieur)
document.getElementById('p2').innerHTML = 'La comparaison selon laquelle x < 3 est ' + testInferieur + '.';

let testSuperieur = x > 2;
console.log(testSuperieur)


alert('Valeur dans x égale à 4 (en valeur) ? ' + testEgalValeur +
    '\nValeur dans x égale à 4 (en valeur et en type) ? ' + testEgalValeurType + 
    '\nValeur définie et x différents en valeur ? ' + testDifference +
    '\nValeur définie et x différents en valeur et en type ? ' + testDifferenceValeurType +
    '\nValeur x inférieure à 4 ? ' + testInferieur +
    '\nValeur x supérieure à 4 ? ' + testSuperieur
)