// avec une boucle for
// console.log('Le triangle avec une boucle for');

// let diese = '';
// // console.log(diese);

// for(let i = 1; i < 8; i++){
//     diese += '#';
//     console.log(diese);
// }

// méthode Baroude
// poir plus d'infos sur le repeat
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat
for(i=0; i <=7; i++){
    console.log("#".repeat(i));
}


// avec une boucle while
// console.log('Le triangle avec une boucle while');

let diese2 = '';
// // console.log(diese2);
// let nbrDiese = 1;

// while(nbrDiese < 8){
//     diese2 += '#'
//     nbrDiese++;
//     console.log(diese2);
// }

// while(nbrDiese < 8){
//     nbrDiese++;
//     console.log('#'.repeat(nbrDiese));
// }

let w1 = 1;

while(w1 <= 10){
    diese2 = diese2 + '#';
    console.log(diese2);
    w1++
}