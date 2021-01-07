// Exo en do...while ---------

// do{
//     var saisieDoWhile = Number(prompt('Do...while - Saisissez un nombre :'));
//     // console.log(saisieDoWhile);
// }while(isNaN(saisieDoWhile));

// document.getElementById('p1').innerHTML = 'Vous avez saisi le nombre ' + saisieDoWhile;

// solution Patrick ----------------------------

'use strict';

let votreSaisie;
// console.log(typeof votreSaisie, votreSaisie);

do{
    votreSaisie = parseFloat(prompt('Merci de saisir un nombre entier ou décimal.'));
}while(isNaN(votreSaisie) == true || votreSaisie === 0);

document.getElementById('p1').innerHTML = 'Vous avez bien saisi le nombre ' + votreSaisie;

// autre solution Patrick en if else ----------------------

// let utilisateurPrompt = prompt('avec if else');

// if (utilisateurPrompt.includes('a') || utilisateurPrompt.includes('b') || utilisateurPrompt.includes('c') || utilisateurPrompt.includes('d') || utilisateurPrompt.includes('e') || utilisateurPrompt.includes('f') || utilisateurPrompt.includes('g') || utilisateurPrompt.includes('h') || utilisateurPrompt.includes('i') || utilisateurPrompt.includes('j') || utilisateurPrompt.includes('k') || utilisateurPrompt.includes('l') || utilisateurPrompt.includes('m') || utilisateurPrompt.includes('n') || utilisateurPrompt.includes('o') || utilisateurPrompt.includes('p') || utilisateurPrompt.includes('q') || utilisateurPrompt.includes('r') || utilisateurPrompt.includes('s') || utilisateurPrompt.includes('t') || utilisateurPrompt.includes('u') || utilisateurPrompt.includes('v') || utilisateurPrompt.includes('w') || utilisateurPrompt.includes('x') || utilisateurPrompt.includes('y') || utilisateurPrompt.includes('z')) {
//     document.write('Incorrect');
// } else if (utilisateurPrompt.includes('.')) {
//     utilisateurPrompt = utilisateurPrompt.replace('.', ',');
//     document.write('Votre nombre est : ' + utilisateurPrompt);
// } else {
//    document.write('Votre nombre est : ' + utilisateurPrompt);
// }

// exo en if...else --------

// var saisieIfElse = prompt('If...Else - Saisissez un nombre :');

// if(isNaN(saisieIfElse)){
//     saisieIfElse = prompt('If...Else - Vous devez obligatoirement saisir un nombre :');
//     if(!isNaN(saisieIfElse)){
//         document.getElementById('p2').innerHTML = 'Votre nombre est : ' + saisieIfElse;
//     }
//     // console.log(saisieIfElse);
// }else{
//     document.getElementById('p2').innerHTML = 'Votre nombre est : ' + saisieIfElse;
// }

// exo avec boucle for -----------

// for(i = 1; i <= 1; i++){
//     var nbr2 = Number(prompt('Do...while - Saisissez un nombre :'))
//     if (isNaN(nbr2)){
//         i--;
//     }else {
//         document.getElementById('p2').innerHTML = 'Vous avez bien saisi un nombre : le nombre ' + nbr2;
//     }
// }

// exo en while ------------

// while(isNaN(saisieWhile)){
//     var saisieWhile = prompt('While - Saisissez un nombre :');
// }

// document.getElementById('p2').innerHTML = 'Vous avez bien saisi un nombre : le nombre ' + saisieWhile;

