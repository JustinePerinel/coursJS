// var jeu = '';

// // while(jeu != 'oui'){
// //     jeu = prompt('On joue à ni oui ni non ?');
// // }

// // console.log(jeu + '... Fini !');
// // document.getElementById('p1').innerHTML = jeu + '... fini !';

// var reponse = ['oui', 'non'];

// console.log(reponse);

// while(jeu != reponse[0]){
//     jeu = prompt('On joue à ni oui ni non ?');
// }

// console.log(jeu + '... Fini !');
// document.getElementById('p1').innerHTML = jeu + '... fini !';

// Correction Patrick-------

var disMoi = ''; // initialisation de la variable avec une string vide, on y rentrera la réponse de l'utilisateur
// console.log(typeof disMoi, disMoi);

var i = 0;

// tant que le prompt ne contient pas oui ET ne contient pas non, boucle
while((disMoi !== 'oui') && (disMoi !== 'non')){
    disMoi = prompt('On joue au ni oui ni non ?? Allez !');
    i++; // une boucle a besoin de nombre de tours
}

console.log(disMoi);
document.getElementById('p1').innerHTML = 'Perdu !'


